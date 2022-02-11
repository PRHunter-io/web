import React from 'react';
import {
	bountyType,
	bountyCurrency,
	languages,
	experienceLevel,
	bountyValues,
} from '../../utils/filters';
import { Button, Select } from '../Core';
import CheckboxesList from './CheckboxesList';

const Sidebar = ({ fullQuery, setFullQuery }) => {
	const bountyInputsData = [
		{
			placeholder: 'From',
			query: 'price_min',
		},
		{
			placeholder: 'To',
			query: 'price_to',
		},
	];

	const updateSelectField = (selectValue, key) => {
		setFullQuery(prevState => {
			let newState;

			if (selectValue) {
				newState = {
					...prevState,
					[key]: selectValue.value,
				};
			} else {
				newState = { ...prevState };
				delete newState[key];
			}

			return newState;
		});
	};

	const clearFilters = () => {
		setFullQuery(false);
	};

	return (
		<>
			{/* <!-- Sidebar Start --> */}
			<div className='widgets mb-11'>
				<h4 className='font-size-6 font-weight-semibold mb-6'>Bounty Type</h4>
				<CheckboxesList
					fullQuery
					setFullQuery={setFullQuery}
					filtersList={bountyType}
				/>
			</div>
			<div className='widgets mb-11 '>
				<div className='d-flex align-items-center pr-15 pr-xs-0 pr-md-0 pr-xl-22'>
					<h4 className='font-size-6 font-weight-semibold mb-6 w-75'>
						Experience level
					</h4>
				</div>
				<Select
					options={experienceLevel.values}
					onChange={value => updateSelectField(value, 'experience')}
					queryValue={fullQuery['experience']}
					clearable
				/>
			</div>
			<div className='widgets mb-11 '>
				<div className='d-flex align-items-center pr-15 pr-xs-0 pr-md-0 pr-xl-22'>
					<h4 className='font-size-6 font-weight-semibold mb-6 w-75'>
						Language
					</h4>
				</div>
				<Select
					options={languages.values}
					onChange={value => updateSelectField(value, 'language')}
					queryValue={fullQuery['language']}
					clearable
				/>
			</div>
			<div className='widgets mb-11'>
				<h4 className='font-size-6 font-weight-semibold mb-6'>
					Currency / Blockchain{' '}
				</h4>
				<CheckboxesList
					fullQuery
					setFullQuery={setFullQuery}
					filtersList={bountyCurrency}
				/>
			</div>
			<div className='widgets mb-11 '>
				<div className='d-flex align-items-center pr-15 pr-xs-0 pr-md-0 pr-xl-22'>
					<h4 className='font-size-6 font-weight-semibold mb-6 w-75'>
						Bounty Value
					</h4>
				</div>
				<div className='row'>
					{bountyInputsData.map((bounty, index) => (
						<div className='col-6' key={index}>
							<Select
								options={bountyValues.values}
								placeholder={bounty.placeholder}
								onChange={value => updateSelectField(value, bounty.query)}
								queryValue={fullQuery[bounty.query]}
								clearable
							/>
						</div>
					))}
				</div>
			</div>
			<Button onClick={clearFilters}>Clear all filters</Button>
		</>
	);
};

export default Sidebar;
