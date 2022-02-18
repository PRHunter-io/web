import CheckboxesList from '../CheckboxesList';

const CheckboxFilter = ({ filter, fullQuery, setFullQuery }) => {
  return (
    <div className="widgets mb-11">
      <h4 className="font-size-6 font-weight-semibold mb-6">
        {filter.heading}
      </h4>
      <CheckboxesList
        fullQuery={fullQuery}
        setFullQuery={setFullQuery}
        filtersList={filter}
      />
    </div>
  );
};

export default CheckboxFilter;
