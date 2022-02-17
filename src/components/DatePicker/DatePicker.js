import React from 'react';
import styled from 'styled-components';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { useField } from 'formik';

const DatePickerStyled = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  .DayPickerInput {
    display: block;
    width: 100%;

    input {
      &:read-only {
        background-color: transparent;
      }
    }
  }
  .DayPickerInput-Overlay {
    top: 4px;
  }
  .DayPicker-Day {
    padding: 0.35rem 0.5rem;
  }
  .DayPicker-Day--today {
    color: ${({ theme }) => theme.colors.primary};
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
  .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const DatePickerComponent = ({ className, ...props }) => {
  const today = new Date();
  const [field, , { setValue }] = useField(props);

  return (
    <DatePickerStyled>
      <DayPickerInput
        dayPickerProps={{ disabledDays: { before: today } }}
        value={field.value ? field.value : today}
        inputProps={{
          className: className ? className : 'form-control h-px-48',
          readOnly: true,
          required: true,
        }}
        onDayChange={(day) => setValue(day)}
      />
    </DatePickerStyled>
  );
};

export default DatePickerComponent;
