type SelectOption = string | { value: string; label: string };

type SelectInputProps = {
  label: string;
  name: string;
  options: SelectOption[];
  required?: boolean;
  placeholder?: string;
};

export default function SelectInput({ label, name, options, required, placeholder = 'Selecione...' }: SelectInputProps) {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} required={required} defaultValue="">
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => {
          if (typeof opt === 'string') {
            return (
              <option key={opt} value={opt}>
                {opt}
              </option>
            );
          }
          return (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}