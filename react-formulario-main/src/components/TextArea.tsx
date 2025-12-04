type TextAreaProps = {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  rows?: number;
};

export default function TextArea({ label, name, placeholder, required, rows = 4 }: TextAreaProps) {
  return (
    <div className="form-field full-width">
      <label htmlFor={name}>{label}</label>
      <textarea id={name} name={name} placeholder={placeholder} required={required} rows={rows} />
    </div>
  );
}