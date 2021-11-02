import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Range, getTrackBackground } from "react-range";
import { bountyType, languages, experienceLevel } from "../../utils/filters";
import CheckboxesList from "./CheckboxesList";

const STEP = 1;
const MIN = 50;
const MAX = 180;

const Sidebar = ({ fullQuery, setFullQuery }) => {
  const minValue = fullQuery.price_min ? parseInt(fullQuery.price_min) : MIN;
  const maxValue = fullQuery.price_to ? parseInt(fullQuery.price_to) : MAX;

  const [rangeValues, setRangeValues] = useState([minValue, maxValue]);

  const updateQueryRange = () => {
    setFullQuery(prevState => ({
      ...prevState,
      price_min: rangeValues[0],
      price_to: rangeValues[1],
      currency: "ETH"
    }));
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
            Salary Range
          </h4>
          {/* <!-- Range Slider --> */}

          <div className="slider-price w-25 text-right mr-7">
            <p className="font-weight-bold">
              <span
                className="text-primary font-weight-semibold font-size-4 "
                css={`
                  white-space: nowrap;
                `}
              >
                ${rangeValues[0].toFixed()} - {rangeValues[1].toFixed()}K
              </span>
            </p>
          </div>
        </div>
        <div className="graph text-center mx-0 mt-5 position-relative chart-postion">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="range-slider">
          <>
            <Range
              values={rangeValues}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={(values) => {
                setRangeValues(values);
              }}
              onFinalChange={updateQueryRange}
              renderTrack={({ props, children }) => (
                <div
                  role="button"
                  tabIndex={0}
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    height: "15px",
                    display: "flex",
                    width: "290px",
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: "5px",
                      width: "100%",
                      borderRadius: "4px",
                      background: getTrackBackground({
                        values: rangeValues,
                        colors: ["#ccc", "#00b074", "#ccc"],
                        min: MIN,
                        max: MAX,
                      }),
                      alignSelf: "center",
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "24px",
                    width: "24px",
                    borderRadius: "50%",
                    backgroundColor: "#FFF",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "none !important",
                    outline: "none !important",
                  }}
                  css={`
                    &:focus {
                      outline: none !important;
                    }
                  `}
                ></div>
              )}
            />
          </>
        </div>
      </div>
      <div className="widgets mb-11">
        <h4 className="font-size-6 font-weight-semibold mb-6">
          Language{" "}
        </h4>
        <CheckboxesList fullQuery setFullQuery={setFullQuery} filtersList={languages} />
      </div>
      <div className="widgets mb-11">
        <h4 className="font-size-6 font-weight-semibold mb-6">
          Experience{" "}
        </h4>
        <CheckboxesList fullQuery setFullQuery={setFullQuery} filtersList={experienceLevel} />
      </div>
      {/* <!-- Sidebar End --> */}
    </>
  );
};

export default Sidebar;
