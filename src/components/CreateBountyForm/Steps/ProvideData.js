import { Select } from "@/components/Core";
const defaultTypes = [
  { value: "b2b", label: "B2B" },
  { value: "saas", label: "SAAS" },
  { value: "b2b", label: "b2b" },
];

const defaultEmployees = [
  { value: "10-50", label: "10-50" },
  { value: "50-100", label: "50-100" },
  { value: "100-500", label: "100-500" },
  { value: "500-2000", label: "500-2000" },
];

const defaultLocations = [
  { value: "bd", label: "Bangladesh" },
  { value: "sp", label: "Singapore" },
  { value: "tl", label: "Thailand" },
  { value: "de", label: "Germany" },
];

const ProvideData = ({ nextFormStep, setBountyData }) => {
  const setData = () => {
    setBountyData(prevState => (
      {
        ...prevState,
        gotowe: 'no raczej!'
      }
    ))
    nextFormStep();
  }

  return (
    <>
      <form action="/">
        <fieldset>
          <div className="row mb-xl-1 mb-9">
            <div className="col-lg-6">
              <div className="form-group">
                <label
                  htmlFor="namedash"
                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  className="form-control h-px-48"
                  id="namedash"
                  placeholder="eg. Apple"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <label
                  htmlFor="select2"
                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                >
                  Corporate Type
                </label>
                <Select
                  options={defaultTypes}
                  className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                  border={false}
                />
              </div>
            </div>
          </div>
          <div className="row mb-8">
            <div className="col-lg-6 mb-xl-0 mb-7">
              <div className="form-group position-relative">
                <label
                  htmlFor="select3"
                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                >
                  Employee Size{" "}
                </label>
                <Select
                  options={defaultEmployees}
                  className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                  border={false}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group position-relative">
                <label
                  htmlFor="address"
                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                >
                  Location or (Remote)
                </label>
                <Select
                  options={defaultLocations}
                  className="form-control pl-0 arrow-3 w-100 font-size-4 d-flex align-items-center w-100 "
                  border={false}
                />
                <span className="h-100 w-px-50 pos-abs-tl d-flex align-items-center justify-content-center font-size-6"></span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label
                  htmlFor="aboutTextarea"
                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                >
                  About Comapny
                </label>
                <textarea
                  name="textarea"
                  id="aboutTextarea"
                  cols="30"
                  rows="7"
                  className="border border-mercury text-gray w-100 pt-4 pl-6"
                  placeholder="Describe about the company what make it unique"
                ></textarea>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group mb-11">
                <label
                  htmlFor="formGroupExampleInput"
                  className="d-block text-black-2 font-size-4 font-weight-semibold mb-4"
                >
                  Company Website Link
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="https://www.example.com"
                />
              </div>
              <input
                type="button"
                value="Update Profile"
                className="btn btn-green btn-h-60 text-white min-width-px-210 rounded-5 text-uppercase"
              />
            </div>
          </div>
        </fieldset>
      </form>
      <button
        onClick={() => setData()}
      >
        Sent draft
      </button>
    </>
  );
}

export default ProvideData;