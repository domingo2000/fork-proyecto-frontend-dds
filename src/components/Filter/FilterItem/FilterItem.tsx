import React, {FormEvent} from 'react';
import {capitalize} from '../../../utils/helpers';
export interface FilterItemProps {
  name: string,
  children?: React.ReactNode,
  onCheckedChange?: (key: string, value: boolean) => void,
}

export type FilterItemCallback = (key: string, value: boolean) => void;

export function FilterItem({children, name, onCheckedChange = () => {}}: FilterItemProps) {
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const {checked} = e.currentTarget;
    onCheckedChange(name, checked);
  };

  return (
    <div className="w-full flex p-2 justify-start items-center">
      <input className="w-4 h-4" type="checkbox" onChange={(e) => handleChange(e)} />
      <h2 className='px-2'>{capitalize(name)}</h2>
      {children}
    </div>
  );
};
