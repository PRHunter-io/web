// import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers, useEtherBalance } from '@usedapp/core';
import { Box, Button, Text } from '../Core';
import { formatEther } from '@ethersproject/units';

export const Web3Data = ({ isEdited }) => {
	const { activateBrowserWallet, account } = useEthers();
	const etherBalance = useEtherBalance(account);
	console.log(etherBalance);

	return account ? (
		<Box>
			{isEdited ? (
				<input
					className='form-control'
					name='eth_wallet_address'
					defaultValue={account}
				/>
			) : (
				<h6 className='font-weight-semibold text-break'>
					{account && `${account.slice(0, 10)}...${account.slice(-6)}`}
				</h6>
			)}
		</Box>
	) : (
		<Button onClick={activateBrowserWallet}>
			Get wallet address from metamask
		</Button>
	);
};
