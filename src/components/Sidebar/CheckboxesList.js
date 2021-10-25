import Router from 'next/router';
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const CheckStyled = styled.span`
cursor: pointer;
display: flex;
align-items: center;
color: #2b3940 !important;
font-size: 16px;
color: inherit;
&::before {
  content: "\f0c8";
  font-weight: 400;
  font-family: "Font Awesome 5 Free";
  display: inline-block;
  color: #7e8989;
  margin-right: 11px;
  margin-top: 2px;
}
&.active {
  color: #2b3940 !important;
  font-weight: 600;
  &::before {
    content: "\f14a";
    font-weight: 900;
    color: #00b074;
  }
}
`;

const Check = ({ querriesArr, setquerriesArr, queryValue, children }) => {
  const [active, setActive] = useState(false);

  const changeQueryArr = (arr, a, b) => {
    const newQueryArr = [...arr];
    if (a) {
      newQueryArr.push(b);
    } else {
      newQueryArr.pop(b);
    };
    setquerriesArr(newQueryArr);
  }

  useEffect(() => {
    changeQueryArr(querriesArr, active, queryValue);
  }, [active])

  return (
    <CheckStyled
      className={`toggle-item ${active ? "active" : ""}`}
      onClick={() => {
        setActive(!active);
      }}
    >
      {children}
    </CheckStyled>
  );
};

const CheckboxesList = ({ setQuery, filtersList }) => {
  const [querriesArr, setquerriesArr] = useState([])

  useEffect(() => {
    setQuery(prevState => ({
      ...prevState,
      [filtersList.query]: querriesArr
    }));
  }, [querriesArr])

  return (
    <ul className="list-unstyled filter-check-list">
      {filtersList.values.map(
        (item) => {
          return (
            <li className="mb-2" key={item.value}>
              <Check querriesArr={querriesArr} setquerriesArr={setquerriesArr} queryValue={item.value}>{item.label}</Check>
            </li>
          )
        })
      }
    </ul>
  );
}

export default CheckboxesList;