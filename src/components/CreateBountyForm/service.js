import BountyFactory from '@/contract/BountyFactory.json';
import { ethers } from 'ethers';
import { toast } from 'react-toastify';

class BountyServiceClass {
  async checkIfIssueExists(issue) {
    if (issue) {
      return await this.apiClient.get(`bounty/issue/${issue.id}`);
    }
  }

  async createNewBounty(newBountyDto, post) {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    try {
      const createBountyResponse = await this.createBountyOnBackend(
        newBountyDto,
        post
      );
      await this.createBountyOnBlockchain(
        createBountyResponse,
        newBountyDto.total_bounty_value,
        newBountyDto.expires_at
      );
      toast.success('Bounty created!');
      return createBountyResponse.new_bounty_id;
    } catch (err) {
      return this.handleCreateBountyError(err);
    }
  }

  async createBountyOnBackend(newBountyDto, post) {
    return await post('bounty', newBountyDto);
  }

  async createBountyOnBlockchain(
    createBountyResponse,
    totalBountyValue,
    bountyExpiry
  ) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      createBountyResponse.bounty_factory_address,
      BountyFactory.abi,
      signer
    );
    const ethValue = ethers.utils.parseEther(totalBountyValue.toPrecision(6)); // ether in this case MUST be a string
    const overrides = {
      value: ethValue,
    };
    return await contract.createBounty(
      bountyExpiry,
      createBountyResponse.new_bounty_id,
      overrides
    );
  }

  calculateCommision(formValue) {
    if (formValue < 0.25) {
      return this.getBaseCommision();
    } else {
      // Calc the 103% of bounty value and subtract the value
      const total = (parseFloat(formValue) * 103) / 100;
      return total - formValue;
    }
  }

  getBaseCommision() {
    return 0.008;
  }

  handleCreateBountyError(err) {
    console.error(err);

    // metamask errors
    if (err.code === 4001) {
      throw new Error(
        'Oops, like you abandoned the transaction. Please confirm the deposit in your wallet'
      );
    }

    if (err.code === -32000) {
      throw new Error(
        `Looks like you don't have enough funds for the deposit. Please use a different account or top up and try again.`
      );
    }

    // api errors
    if (err.response !== undefined && err.response.data.code !== 200) {
      throw new Error(err.response.data.message);
    }

    throw new Error(
      'An error has occured, please check the console for metamask errors'
    );
  }
}

export const BountyService = new BountyServiceClass();
