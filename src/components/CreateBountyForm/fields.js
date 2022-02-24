import React from 'react';
import { useField } from 'formik';
import { FieldTooltip } from '../FieldTooltip';
import DatePicker from '@/components/DatePicker';

export const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="text-muted pr-2 mb-4" htmlFor={props.id || props.name}>
        {label}
        {props?.tooltip && (
          <FieldTooltip icon="fa-question-circle" text={props.tooltip} />
        )}
      </label>
      <input className="form-control h-px-48 mb-6" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error mb-4">{meta.error}</div>
      ) : null}
    </>
  );
};

export const MyTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="text-muted pr-2 mb-4" htmlFor={props.id || props.name}>
        {label}
        {props?.tooltip && (
          <FieldTooltip icon="fa-question-circle" text={props.tooltip} />
        )}
      </label>
      <textarea className="form-control h-px-300 mb-6" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error mb-4">{meta.error}</div>
      ) : null}
    </>
  );
};

export const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <label className="checkbox">
        <input {...field} {...props} type="checkbox" />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error mb-4">{meta.error}</div>
      ) : null}
    </>
  );
};

export const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label className="text-muted pr-2 mb-4" htmlFor={props.id || props.name}>
        {label}
        {props?.tooltip && (
          <FieldTooltip icon="fa-question-circle" text={props.tooltip} />
        )}
      </label>
      <select className="form-control h-px-48 mb-6" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error mb-4">{meta.error}</div>
      ) : null}
    </>
  );
};

export const MyDatePicker = ({ label, ...props }) => {
  return (
    <div className="mb-4">
      <label className="text-muted pr-2 mb-4" htmlFor={props.id || props.name}>
        {label}
        {props?.tooltip && (
          <FieldTooltip icon="fa-question-circle" text={props.tooltip} />
        )}
      </label>
      <DatePicker className="form-control h-px-48" name="expirationDate" />
    </div>
  );
};
