import React, { FormEvent } from 'react';

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
    <div className="filter-bar__item">
      <input className="checkbox checkbox--medium" type="checkbox" onChange={(e) => handleChange(e)} />
      <h2>{_key}</h2>
      {children}
    </div>
  );
};
