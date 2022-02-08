// import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers } from '@usedapp/core';
import styled from 'styled-components';
import { Box } from '../Core';

export const Web3Data = ({ walletAddress, setWalletAddress, isEdited }) => {
	const { activateBrowserWallet, account } = useEthers();
	const loadFromMetamask = () => {
		try {
			activateBrowserWallet();
		} catch {
			// handle any possible errors thrown
		}
		setWalletAddress(account);
	};
	return (
		<Box>
			{isEdited ? (
				<div>
					<input
						className='form-control'
						name='eth_wallet_address'
						defaultValue={walletAddress}
						placeholder='Write down wallet address'
					/>
					<BlankBtn onClick={loadFromMetamask}>
						Click to load address from metamask
					</BlankBtn>
				</div>
			) : (
				<h6 className='font-weight-semibold text-break'>
					<span>
						{walletAddress
							? walletAddress
							: 'Edit settings to add wallet address'}
					</span>
				</h6>
			)}
		</Box>
	);
};

const BlankBtn = styled.button`
	background-color: transparent;
	border: none;
	padding: 0;
	padding-top: 3px;
	color: ${({ theme }) => theme.colors.primary};
	font-size: 13px;
	outline: none;
	transition: opacity 0.4s;
	&:hover,
	&:focus {
		opacity: 0.7;
	}
	&:focus {
		outline: none;
	}
`;
