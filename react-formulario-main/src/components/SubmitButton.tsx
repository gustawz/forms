type SubmitButtonProps = {
  text: string;
};

export default function SubmitButton({ text }: SubmitButtonProps) {
  return (
    <div className="form-actions full-width">
      <button type="submit" className="submit-button">
        {text}
      </button>
    </div>
  );
}