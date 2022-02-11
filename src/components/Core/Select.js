import React from "react";
import { withTheme } from "styled-components";

import Select from "react-select";

const defaultOptions = [];

const getCustomStyles = (theme, accentColor, bg, hoverBg, border, indicator) => {
  return {
    dropdownIndicator: () => {
      return {
        display: !indicator && "none",
      };
    },
    indicatorSeparator: () => { },
    option: (provided, state) => {
      return {
        ...provided,
        color: state.isSelected ? theme.colors[accentColor] : theme.colors.dark,
        textAlign: "left",
        backgroundColor: bg,
        cursor: 'pointer',
        transition: 'background-color .4s',
        ['&:hover']: {
          backgroundColor: hoverBg
        }
      };
    },
    control: (provided, state) => {
      return {
        ...provided,
        border: !border
          ? "none"
          : state.menuIsOpen || state.isFocused
            ? `1px solid ${theme.colors[accentColor]} !important`
            : `1px solid ${theme.colors.border} !important`,
        borderRadius: 10,
        padding: "0.25rem 1rem",
        width: "100%",
        height: "45px",
        outline: "none",
        boxShadow: "none",
        textAlign: "left",
        backgroundColor: bg,
        cursor: 'pointer',
      };
    },
  };
};

const SelectStyled = ({
  theme,
  bg = "#fff",
  hoverBg = "#f3f3f3",
  border = true,
  accentColor = "success",
  name = "item",
  indicator = true,
  options = defaultOptions,
  queryValue = false,
  clearable,
  ...rest
  }) => {

  const setCurrentValue = () => {
    let result = null;
    if (queryValue) {
      if (typeof queryValue !== 'boolean') {
        result = options.filter((o) => { return o.value == queryValue; });
      }
    } 
    return result;
  }

  return (
    <Select
      styles={getCustomStyles(theme, accentColor, bg, hoverBg, border, indicator)}
      value={setCurrentValue()}
      name={name}
      options={options}
      isClearable={clearable}
      instanceId={`inId-${name}`}
      {...rest}
    />
  );
};

export default withTheme(SelectStyled);
