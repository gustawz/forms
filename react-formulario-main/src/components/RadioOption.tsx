type RadioOptionProps = {
  name: string;
  value: string;
  label: string;
  defaultChecked?: boolean;
};

export default function RadioOption({ name, value, label, defaultChecked }: RadioOptionProps) {
  const id = `${name}-${value}`;
  return (
    <label className="radio-option" htmlFor={id}>
      <input type="radio" id={id} name={name} value={value} defaultChecked={defaultChecked} />
      <span>{label}</span>
    </label>
  );
}