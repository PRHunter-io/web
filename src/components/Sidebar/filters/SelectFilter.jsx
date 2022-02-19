import { Select } from '@/components/Core';

const SelectFilter = ({ filter, fullQuery, updateSelectField }) => {
  return (
    <div className="widgets mb-11">
      <div className="d-flex align-items-center pr-15 pr-xs-0 pr-md-0 pr-xl-22">
        <h4 className="font-size-6 font-weight-semibold mb-6 w-75">
          {filter.heading}
        </h4>
      </div>
      <Select
        options={filter.values}
        onChange={(value) => updateSelectField(value, filter.query)}
        queryValue={fullQuery[filter.query]}
        clearable
      />
    </div>
  );
};

export default SelectFilter;
