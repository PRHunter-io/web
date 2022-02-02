import axios from 'axios';
import { parseCookies } from 'nookies';
import { ethers } from 'ethers'
import BountyFactory from '@/contract/BountyFactory.json'


class BountyServiceClass {

  bountyFactoryAddress = "0x5Ad2A671E49ebdc90C4c70f3d137a040aa6e1B99"

  apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_EXTERNAL_API_URL || '',
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  async checkIfIssueExists(issue) {
    if (issue) {
      return await this.apiClient.get(`bounty/issue/${issue.id}`)
    }
  }

  async createNewBounty(newBountyDto) {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const contract = new ethers.Contract(this.bountyFactoryAddress, BountyFactory.abi, signer)

      const expiry = new Date().getTime() + 1000

      // console.log(contract.getAllBounties()) 
      console.log(await contract.allBounties())

      // const overrides = {
      //   value: ethers.utils.parseEther("0.1")     // ether in this case MUST be a string
      // };
      // const transaction = await contract.createBounty(expiry, overrides);
      // const headers = {
      //   'Authorization': 'Bearer ' + parseCookies().token
      // }
      // console.log(transaction)
      // newBountyDto.transaction_hash = transaction.hash;
      // console.log(newBountyDto)
      // return await this.apiClient.post('bounty', newBountyDto, {
      //   headers: headers
      // });
    } catch (err) {
      return this.handleCreateBountyError(err)
    }
  }

  handleCreateBountyError(err) {
    console.log({err})

    // metamask errors
    if (err.code === 4001) {
      throw new Error('Oops, like you abandoned the transaction. Please confirm the deposit in your wallet')
    }

    if (err.code === -32000) {
      throw new Error(`Looks like you don't have enough funds for the deposit. Please use a different account or top up and try again.`)
    }

    // api errors
    if(err.response.data.code !== 200){
      throw new Error(err.response.data.message)
    }
    
    throw new Error('An error has occured')
  }
}

export const BountyService = new BountyServiceClass()
