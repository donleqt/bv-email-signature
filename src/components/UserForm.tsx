import React from 'react';
import { SignatureData } from '../emails/types';

interface UserFormProps {
  defaultData: SignatureData;
  onChange: (data: SignatureData) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onChange, defaultData }) => {
  const onInput = (form: HTMLFormElement) => {
    const getValue = (name: string) => (form[name] as HTMLInputElement).value;

    const formData: SignatureData = {
      title: getValue('title'),
      name2: getValue('name2'),
      name: getValue('name'),
      email: getValue('email'),
      email2: getValue('email2'),
      phone: getValue('phone'),
      phone2: getValue('phone2'),
    };

    onChange(formData);
  };

  return (
    <form
      className="my-5 text-sm"
      onInput={(event) => {
        onInput(event.currentTarget);
      }}
    >
      <fieldset>
        <label className="mt-1 block text-gray-600">Name:</label>
        <input
          type="text"
          name="name"
          required
          defaultValue={defaultData.name}
          className="block w-full mt-1 p-2 border rounded"
        />

        <label className="mt-4 block text-gray-600">Name 2:</label>
        <input
          type="text"
          name="name2"
          required
          defaultValue={defaultData.name2}
          className="block w-full mt-1 p-2 border rounded"
        />

        <label className="mt-4 block text-gray-600">Title:</label>
        <input
          type="text"
          name="title"
          required
          defaultValue={defaultData.title}
          className="block w-full mt-1 p-2 border rounded"
        />

        <label className="mt-4 block text-gray-600">Phone:</label>
        <input
          type="text"
          name="phone"
          required
          defaultValue={defaultData.phone}
          className="block w-full mt-1 p-2 border rounded"
        />

        <label className="mt-4 block text-gray-600">Phone 2:</label>
        <input
          type="text"
          name="phone2"
          defaultValue={defaultData.phone2}
          className="block w-full mt-1 p-2 border rounded"
        />

        <label className="mt-4 block text-gray-600">Email:</label>
        <input
          type="email"
          name="email"
          required
          defaultValue={defaultData.email}
          className="block w-full mt-1 p-2 border rounded"
        />

        <label className="mt-4 block text-gray-600">Email 2:</label>
        <input
          type="email"
          name="email2"
          defaultValue={defaultData.email2}
          className="block w-full mt-1 p-2 border rounded"
        />
      </fieldset>
    </form>
  );
};

export default UserForm;
