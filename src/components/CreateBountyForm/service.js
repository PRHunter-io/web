import axios from 'axios';
import { parseCookies } from 'nookies';
import { ethers } from 'ethers';
import BountyFactory from '@/contract/BountyFactory.json';
import { toast } from 'react-toastify';

class BountyServiceClass {
  bountyFactoryAddress = '0x153Bab3d11fE9e2f90b9747060855fEbCf31F92C';

  apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_EXTERNAL_API_URL || '',
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  async checkIfIssueExists(issue) {
    if (issue) {
      return await this.apiClient.get(`bounty/issue/${issue.id}`);
    }
  }

  async createNewBounty(newBountyDto) {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    try {
      const bountySecret = await this.createBountyOnBackend(newBountyDto);
      console.log('Created new bounty on backend: ' + bountySecret.data);
      const tx = await this.createBountyOnBlockchain(
        bountySecret.data.id,
        newBountyDto.bounty_value
      );
      toast.success('Bounty created!');
      return bountySecret.data.id;
    } catch (err) {
      return this.handleCreateBountyError(err);
    }
  }

  async createBountyOnBackend(newBountyDto) {
    const headers = {
      Authorization: 'Bearer ' + parseCookies().token,
    };
    return await this.apiClient.post('bounty', newBountyDto, {
      headers: headers,
    });
  }

  async createBountyOnBlockchain(bountyId, bountyValue) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      this.bountyFactoryAddress,
      BountyFactory.abi,
      signer
    );
    const expiry = new Date().getTime() + 1000;
    const overrides = {
      value: ethers.utils.parseEther(bountyValue.toString()), // ether in this case MUST be a string
    };
    return await contract.createBounty(expiry, bountyId, overrides);
  }

  handleCreateBountyError(err) {
    console.log({ err });

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
    if (err.response.data.code !== 200) {
      throw new Error(err.response.data.message);
    }

    throw new Error('An error has occured');
  }
}

export const BountyService = new BountyServiceClass();
