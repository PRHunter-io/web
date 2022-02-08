// import { Button, Box, Text } from "@chakra-ui/react";
import { useEthers } from '@usedapp/core';
import { Field } from 'formik';
import styled from 'styled-components';
import { Box } from '../Core';

export const Web3Data = ({
	walletAddress,
	isEdited,
	setFieldValue,
	value,
	error,
}) => {
	const { activateBrowserWallet, account } = useEthers();
	const loadFromMetamask = () => {
		try {
			activateBrowserWallet();
			setFieldValue('eth_wallet_address', account);
		} catch {
			// handle any possible errors thrown
		}
	};
	return (
		<Box>
			{isEdited ? (
				<div>
					<Field
						className='form-control'
						name='eth_wallet_address'
						value={value}
						error={error}
						placeholder='Write down wallet address'
					/>
					<BlankBtn type='button' onClick={loadFromMetamask}>
						Click to load address from metamask
					</BlankBtn>
					{error ? (
						<small className='d-block text-danger'>{error}</small>
					) : null}
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
