// import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers } from '@usedapp/core';
import { Box } from '../Core';

export const Web3Data = ({ walletAddress, setWalletAddress, isEdited }) => {
	const { activateBrowserWallet, account } = useEthers();
	const loadFromMetamask = () => {
		try {
			activateBrowserWallet()
		} catch {
			// handle any possible errors thrown
		}
		setWalletAddress(account)
	}

	return (
		<Box>
			{isEdited ? (
				<div>
					<input
						className='form-control'
						name='eth_wallet_address'
						defaultValue={account}
						placeholder='Write down wallet address'
					/>
					<p className='mb-0'>or</p>
					<button
						className='btn btn-primary btn-lg px-8 text-uppercase'
						onClick={loadFromMetamask}>
						Get wallet address from metamask
					</button>
				</div>
			) : (
				<h6 className='font-weight-semibold text-break'>
					<span>
						{account ? walletAddress : 'Edit settings to add wallet address'}
					</span>
				</h6>
			)}
		</Box>
	);
};
