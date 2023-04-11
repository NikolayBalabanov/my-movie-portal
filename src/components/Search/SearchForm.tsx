import React, { FC, useState } from 'react';
import { ButtonSubmit } from '../UI/ButtonSubmit';
import SearchClear from './SearchClear';
import SearchIncon from './SearchIncon';

interface ISearchForm {
  onFormSubmit: (reqStr: string) => void;
  placeholder: string;
}

export const SearchForm: FC<ISearchForm> = ({ onFormSubmit, placeholder }) => {
  const [value, setValue] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFormSubmit(value);
    setValue('');
  };

  const handleClear = () => {
    onFormSubmit('');
    setValue('');
  };
  return (
    <div className="flex justify-center">
      <form className="flex gap-3" onSubmit={(event) => handleSubmit(event)}>
        <div className="relative sm:w-auto w-full">
          <input
            className="border self-center rounded py-2 px-4 w-full bg-slate-200"
            type="text"
            value={value}
            onChange={(e) => handleChange(e)}
            placeholder={placeholder}
          />
          {value ? <SearchClear onClear={() => handleClear()} /> : <SearchIncon />}
        </div>
        <ButtonSubmit />
      </form>
    </div>
  );
};
