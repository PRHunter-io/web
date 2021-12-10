import { Select } from "@/components/Core";
import { authService } from "@/services/auth.service";
import { useEffect, useState } from "react";
import { experienceLevel } from "../../../utils/filters";
import { bountyType } from "../../../utils/filters";
import { languages } from "../../../utils/filters";
import { bountyCurrency } from "../../../utils/filters";

const requiredFields = [
  'title',
  'experience',
  'bounty_type',
  'languages',
  'bounty_value',
  'bounty_currency',
  'problem_statement',
  'acceptance_criteria'
]

const ProvideData = ({ setFormStep, bountyData, setBountyData }) => {
  const [validationErr, setValidationErr] = useState([]);
  const [formBlock, setFormBlock] = useState(true);

  const setData = (value, key) => {
    setBountyData(prevState => (
      {
        ...prevState,
        [key]: value
      }
    ))
  }

  useEffect(() => {
    setValidationErr([]);

    requiredFields.forEach(field => {
      const fieldValue = bountyData[field];
      if (!fieldValue) {
        setValidationErr(prevState => (
          [
            ...prevState,
            field
          ]
        ));
      };
    });
  }, [bountyData])

  useEffect(() => {
    if (bountyData.title && validationErr.length === 0) {
      setFormBlock(false);
    } else {
      setFormBlock(true);
    };
  }, [validationErr])

  const submitData = async () => {
    const repo_owner = bountyData.repo_name.split('/')[0];
    const repo_name = bountyData.repo_name.split('/')[1];
    const tags = bountyData.tags ? bountyData.tags : [];
    const formattedBody = {
      ...bountyData,
      repo_owner,
      repo_name,
      languages: [
        bountyData.languages
      ],
      tags
    };

    delete formattedBody.repoOptions;
    delete formattedBody.issuesOptions;

    console.log('finalBody', formattedBody)

    const data = JSON.stringify(formattedBody);
    const apiUrl = process.env.NEXT_PUBLIC_EXTERNAL_API_URL;
    const token = authService.getAccessToken();

    try {
      const res = await fetch(`${apiUrl}/bounty`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: data
      });
      const response = await res.json();
      console.log(response);
      setFormStep(2);
    } catch (err) {
      console.error('Failed to fetch bounty:', err)
    }
  }

  return (
    <div className="mt-12">
      <h2 className="text-muted">Fill in a form</h2>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          submitData();
        }}
      >
        <fieldset>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label
                  htmlFor="bounty-title"
                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4 required-custom"
                >
                  Bounty Title
                </label>
                <input
                  type="text"
                  className="form-control h-px-48"
                  id="bounty-title"
                  placeholder="eg. New feature JS"
                  onChange={e => setData(e.target.value, 'title')}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label
                  htmlFor="select2"
                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4 required-custom"
                >
                  Experience
                </label>
                <Select
                  options={experienceLevel.values}
                  className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                  border={false}
                  queryValue={true}
                  onChange={e => setData(e.value, 'experience')}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group position-relative">
                <label
                  htmlFor="select3"
                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4 required-custom"
                >
                  Bounty Type
                </label>
                <Select
                  options={bountyType.values}
                  className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                  border={false}
                  queryValue={true}
                  onChange={e => setData(e.value, 'bounty_type')}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group position-relative">
                <label
                  htmlFor="address"
                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4 required-custom"
                >
                  Language
                </label>
                <Select
                  options={languages.values}
                  className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                  border={false}
                  queryValue={true}
                  onChange={e => setData(e.value, 'languages')}
                />
                <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label
                  htmlFor="bounty-title"
                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4 required-custom"
                >
                  Bounty Value
                </label>
                <input
                  type="number"
                  className="form-control h-px-48"
                  id="bounty-title"
                  placeholder="eg. New feature JS"
                  onChange={e => setData(e.target.value, 'bounty_value')}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label
                  htmlFor="select2"
                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4 required-custom"
                >
                  Bounty currency
                </label>
                <Select
                  options={bountyCurrency.values}
                  className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                  border={false}
                  queryValue={true}
                  onChange={e => setData(e.value, 'bounty_currency')}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label
                  htmlFor="aboutTextarea"
                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4 required-custom"
                >
                  Problem Statement
                </label>
                <textarea
                  name="textarea"
                  id="aboutTextarea"
                  cols="30"
                  rows="7"
                  className="border border-mercury text-gray w-100 pt-4 pl-6"
                  placeholder="Describe your bounty"
                  onChange={e => setData(e.target.value, 'problem_statement')}
                ></textarea>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label
                  htmlFor="aboutTextarea"
                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4 required-custom"
                >
                  Acceptance Criteria
                </label>
                <textarea
                  name="textarea"
                  id="aboutTextarea"
                  cols="30"
                  rows="7"
                  className="border border-mercury text-gray w-100 pt-4 pl-6"
                  placeholder="Describe your bounty"
                  onChange={e => setData(e.target.value, 'acceptance_criteria')}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label
                  htmlFor="formGroupExampleInput"
                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                >
                  Tags
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Separate Tags with Commas"
                  onChange={e => setData(e.target.value, 'tags')}
                />
              </div>
              <button
                disabled={formBlock ? true : false}
                className="line-height-reset mt-6 btn-submit text-uppercase btn btn-primary"
              >
                Create Bounty!
              </button>
              <p className="small">Fields with <span className="required-custom">*</span> are required.</p>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default ProvideData;