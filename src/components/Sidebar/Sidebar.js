import React from 'react';
import allFiltersArr from '../../utils/filters';
import { Button } from '../Core';
import CheckboxFilter from './filters/CheckboxFilter';
import DoubleSelectFilter from './filters/DoubleSelectFilter';
import SelectFilter from './filters/SelectFilter';

const Sidebar = ({ fullQuery, setFullQuery }) => {
  const updateSelectField = (selectValue, key) => {
    setFullQuery((prevState) => {
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

  const renderProperFilter = (filter) => {
    switch (filter.fieldType) {
      case 'SELECT':
        return (
          <SelectFilter
            key={filter.query}
            filter={filter}
            fullQuery={fullQuery}
            updateSelectField={updateSelectField}
          />
        );
      case 'DOUBLESELECT':
        return (
          <DoubleSelectFilter
            key={filter.query}
            filter={filter}
            fullQuery={fullQuery}
            updateSelectField={updateSelectField}
          />
        );
      case 'CHECKBOX':
        return (
          <CheckboxFilter
            key={filter.query}
            filter={filter}
            fullQuery={fullQuery}
            setFullQuery={setFullQuery}
          />
        );
    }
  };

  return (
    <>
      {allFiltersArr.map((filter) => renderProperFilter(filter))}

      <Button
        className="d-none d-lg-block"
        onClick={() => {
          setFullQuery(false);
        }}
      >
        Clear all filters
      </Button>
    </>
  );
};

export default Sidebar;
