// import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers } from '@usedapp/core';
import { Box, Button } from '../Core';

export const Web3Data = ({ walletAddres, setWalletAddress, isEdited }) => {
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
					/>
					<Button onClick={loadFromMetamask}>
						Get wallet address from metamask
					</Button>
				</div>

			) : (
				<h6 className='font-weight-semibold text-break'>
					<span>{walletAddres}</span>
				</h6>
			)}
		</Box>
	)
};
