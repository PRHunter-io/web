import { useState } from 'react';
import { Box } from '../Core';
import { GithubData } from './github-data';
import { Web3Data } from './web3-data';

export const UserData = ({ userData }) => {
	const [isEdited, setIsEdited] = useState(null);
	const [walletAddress, setWalletAddress] = useState(
		userData.eth_wallet_address
	);

	const submitForm = e => {
		e.preventDefault();
		console.log('form', e);
	};

	return (
		<div className='container'>
			<div className='mb-15 mb-lg-23'>
				<div className='row'>
					<div className='col-xxxl-9'>
						<form onSubmit={submitForm}>
							<Box className='d-flex justify-content-between align-items-center mb-11'>
								<h5 className='font-weight-semibold mb-0'>Account settings</h5>
							</Box>
							<div className='bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-15 pb-13'>
								<div className='row mb-10'>
									<UserDataEntry label='Email' name='email' isEdited={isEdited}>
										{userData.email ? userData.email : 'missing'}
									</UserDataEntry>
									<UserDataEntry label='Name'>
										{userData.display_name ? userData.display_name : 'missing'}
									</UserDataEntry>
								</div>

								<h5 className='font-weight-semibold mb-6'>Linked accounts</h5>
								<div className='row'>
									<div className='col-xl-6 mb-10'>
										<span className='d-block mb-1'>Web3 wallet address</span>
										<Web3Data
											isEdited={isEdited}
											setWalletAddress={setWalletAddress}
											walletAddress={walletAddress}
										/>
									</div>
									<div className='col-xl-6 mb-10'>
										<span className='d-block mb-1'>Github</span>
										<GithubData />
									</div>
								</div>
								<Box>
									{isEdited ? (
										<>
											<button className='btn btn-primary mr-5'>Save!</button>
											<button
												className='btn btn-outline-danger'
												type='button'
												onClick={e => {
													e.target.blur();
													setIsEdited(!isEdited);
												}}>
												Cancel
											</button>
										</>
									) : null}

									{isEdited ? null : (
										<button
											className='btn btn-primary'
											type='button'
											onClick={e => {
												e.target.blur();
												setIsEdited(!isEdited);
											}}>
											Edit
										</button>
									)}
								</Box>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

const UserDataEntry = ({ label, name, isEdited, children }) => (
	<div className='col-lg-6 mb-4'>
		<span className='d-block mb-1'>{label}</span>
		{isEdited ? (
			<input
				className='form-control'
				name={name}
				defaultValue={children}></input>
		) : (
			<h6 className='font-weight-semibold'>{children}</h6>
		)}
	</div>
);
