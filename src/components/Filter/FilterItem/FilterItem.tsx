import React, { FormEvent } from 'react';
import { capitalize } from '../../../utils/helpers';
export interface FilterItemProps {
  _key?: string,
  onCheckedChange?: (key: string, value: boolean) => void,
}

export type FilterItemCallback = (key: string, value: boolean) => void;

export const FilterItem: React.FC<FilterItemProps> = (
  { children, _key = '', onCheckedChange = () => {} },
) => {
  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    const { checked } = e.currentTarget;
    onCheckedChange(_key, checked);
  };

  return (
    <div className="w-full flex p-2 justify-start items-center">
      <input className="w-4 h-4" type="checkbox" onChange={(e) => handleChange(e)} />
      <h2 className='px-2'>{capitalize(_key)}</h2>
      {children}
    </div>
  );
};
