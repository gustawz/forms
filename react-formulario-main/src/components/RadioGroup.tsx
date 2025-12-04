import React from 'react';

type RadioGroupProps = {
  label: string;
  children: React.ReactNode;
};

export default function RadioGroup({ label, children }: RadioGroupProps) {
  return (
    <fieldset className="form-field radio-group full-width">
      <legend>{label}</legend>
      <div className="radio-options">{children}</div>
    </fieldset>
  );
}