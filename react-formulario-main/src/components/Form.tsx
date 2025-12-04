import React from 'react';

type FormProps = {
  children: React.ReactNode;
  onSubmit?: (
    event: React.FormEvent<HTMLFormElement>,
    formData: FormData
  ) => void;
  className?: string;
};

export default function Form({ children, onSubmit, className }: FormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    onSubmit?.(e, fd);
  };

  return (
    <form className={className ?? 'movie-form'} onSubmit={handleSubmit}>
      {children}
    </form>
  );
}