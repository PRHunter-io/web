import { Form, Formik, Field } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { Box } from '../Core';
import { GithubData } from './github-data';
import { Web3Data } from './web3-data';

export const UserData = ({ userData }) => {
	const [isEdited, setIsEdited] = useState(null);

	const initialValues = {
		email: userData.email,
		eth_wallet_address: userData.eth_wallet_address,
	};

	const UserDataSchema = Yup.object().shape({
		email: Yup.string().email().required('Email is required'),
		eth_wallet_address: Yup.string()
			.nullable()
			.matches(/^0x[a-fA-F0-9]{40}$/, 'Enter valid wallet address'),
	});

	const submitForm = async values => {
		alert(JSON.stringify(values, null, 2));
	};

	return (
		<div className='container'>
			<div className='mb-15 mb-lg-23'>
				<div className='row'>
					<div className='col-xxxl-9'>
						<Formik
							initialValues={initialValues}
							validationSchema={UserDataSchema}
							onSubmit={submitForm}>
							{formik => {
								const { values, errors, handleReset, setFieldValue } = formik;
								return (
									<Form>
										<Box className='d-flex justify-content-between align-items-center mb-11'>
											<h5 className='font-weight-semibold mb-0'>
												Account settings
											</h5>
										</Box>
										<div className='bg-white shadow-8 rounded-4 pl-sm-10 pl-4 pr-sm-11 pr-4 pt-15 pb-13'>
											<div className='row mb-10'>
												<UserDataEntry
													label='Email'
													name='email'
													value={values.email}
													isEdited={isEdited}
													error={errors.email}>
													{userData.email ? userData.email : 'missing'}
												</UserDataEntry>
												<UserDataEntry label='Name'>
													{userData.display_name
														? userData.display_name
														: 'missing'}
												</UserDataEntry>
											</div>

											<h5 className='font-weight-semibold mb-6'>
												Linked accounts
											</h5>
											<div className='row'>
												<div className='col-xl-6 mb-10'>
													<span className='d-block mb-1'>
														Web3 wallet address
													</span>
													<Web3Data
														isEdited={isEdited}
														setFieldValue={setFieldValue}
														value={values.eth_wallet_address}
														error={errors.eth_wallet_address}
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
														<button
															type='submit'
															className='btn btn-primary mr-5'>
															Save!
														</button>
														<button
															className='btn btn-outline-danger'
															type='button'
															onClick={e => {
																e.target.blur();
																handleReset();
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
									</Form>
								);
							}}
						</Formik>
					</div>
				</div>
			</div>
		</div>
	);
};

const UserDataEntry = ({ label, name, value, isEdited, children, error }) => (
	<div className='col-lg-6 mb-4'>
		<span className='d-block mb-1'>{label}</span>
		{isEdited ? (
			<>
				<Field className='form-control' name={name} value={value} />
				{error ? <small className='text-danger'>{error}</small> : null}
			</>
		) : (
			<h6 className='font-weight-semibold'>{children}</h6>
		)}
	</div>
);
