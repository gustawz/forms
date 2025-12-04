type TextInputProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
};

export default function TextInput({ label, name, placeholder, required }: TextInputProps) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} name={name} placeholder={placeholder} required={required} />
    </div>
  );
}