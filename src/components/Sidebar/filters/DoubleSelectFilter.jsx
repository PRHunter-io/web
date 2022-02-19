import { Select } from '@/components/Core';

const DoubleSelectFilter = ({ filter, fullQuery, updateSelectField }) => {
  const defaultInputsData = [
    {
      placeholder: 'From',
      query: 'price_min',
    },
    {
      placeholder: 'To',
      query: 'price_to',
    },
  ];

  const bountyInputsData = filter.bountyInputsData
    ? filter.bountyInputsData
    : defaultInputsData;

  return (
    <div className="widgets mb-11">
      <div className="d-flex align-items-center pr-15 pr-xs-0 pr-md-0 pr-xl-22">
        <h4 className="font-size-6 font-weight-semibold mb-6 w-75">
          {filter.heading}
        </h4>
      </div>
      <div className="row">
        {bountyInputsData.map((bounty, index) => (
          <div className="col-6" key={index}>
            <Select
              options={filter.values}
              placeholder={bounty.placeholder}
              onChange={(value) => updateSelectField(value, bounty.query)}
              queryValue={fullQuery[bounty.query]}
              clearable
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoubleSelectFilter;
