import React, { FC, useRef } from "react";

interface IProps {
  action: (formdata: FormData) => Promise<void>; // Adjust action's type to expect FormData
  reset?: () => void;
  [key: string]: any;
}

const Form: FC<IProps> = ({ action, reset, ...props }) => {
  const formRef = useRef<HTMLFormElement | null>(null);

  async function handleAction(event: React.FormEvent) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Ensure formRef.current is not null before accessing it
    if (formRef.current) {
      const formData = new FormData(formRef.current); // Get form data from the form element
      await action(formData); // Call the action with the form data
    }
  }

  return (
    <form {...props} ref={formRef} onSubmit={handleAction}>
      {/* Replace 'action' with 'onSubmit' */}
      {props.children}
    </form>
  );
};

export default Form;
