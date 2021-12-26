import React from "react";
import { bountyType, bountyCurrency, languages, experienceLevel, bountyValueRange } from "../../utils/filters";
import { Button, Select } from "../Core";
import CheckboxesList from "./CheckboxesList";

const Sidebar = ({ setFullQuery }) => {

  const updateLanguage = (language) => {
    setFullQuery(prevState => ({
      ...prevState,
      language: language.value
    }));
  }

  const updateExperience = (experience) => {
    setFullQuery(prevState => ({
      ...prevState,
      experience: experience.value
    }));
  }

  const updateBountyRange = (range) => {
    setFullQuery(prevState => ({
      ...prevState,
      price_min: range.value.min,
      price_to: range.value.max
    }));
  }

  const clearFilters = () => {
    // console.log("Clearing filters")
    // setFullQuery({})
  }

  return (
    <>
      {/* <!-- Sidebar Start --> */}
      <div className="widgets mb-11">
        <h4 className="font-size-6 font-weight-semibold mb-6">Bounty Type</h4>
        <CheckboxesList fullQuery setFullQuery={setFullQuery} filtersList={bountyType} />
      </div>
      <div className="widgets mb-11 ">
        <div className="d-flex align-items-center pr-15 pr-xs-0 pr-md-0 pr-xl-22">
          <h4 className="font-size-6 font-weight-semibold mb-6 w-75">
            Experience level
          </h4>
        </div>
        <Select options={experienceLevel.values} onChange={(value) => updateExperience(value)} />
      </div>
      <div className="widgets mb-11 ">
        <div className="d-flex align-items-center pr-15 pr-xs-0 pr-md-0 pr-xl-22">
          <h4 className="font-size-6 font-weight-semibold mb-6 w-75">
            Language
          </h4>
        </div>
        <Select options={languages.values} onChange={(value) => updateLanguage(value)} />
      </div>
      <div className="widgets mb-11">
        <h4 className="font-size-6 font-weight-semibold mb-6">
          Currency / Blockchain{" "}
        </h4>
        <CheckboxesList fullQuery setFullQuery={setFullQuery} filtersList={bountyCurrency} />
      </div>
      <div className="widgets mb-11 ">
        <div className="d-flex align-items-center pr-15 pr-xs-0 pr-md-0 pr-xl-22">
          <h4 className="font-size-6 font-weight-semibold mb-6 w-75">
            Bounty Value
          </h4>
        </div>
        <Select options={bountyValueRange.values} onChange={(value) => updateBountyRange(value)} />
      </div>
      {/* <Button onClick={() => clearFilters()}>Clear all filters</Button> */}
    </>
  );
};

export default Sidebar;
