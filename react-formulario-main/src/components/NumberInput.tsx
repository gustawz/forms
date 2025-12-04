type NumberInputProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  min?: number;
  max?: number;
};

export default function NumberInput({ label, name, placeholder, required, min, max }: NumberInputProps) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input type="number" id={name} name={name} placeholder={placeholder} required={required} min={min} max={max} />
    </div>
  );
}