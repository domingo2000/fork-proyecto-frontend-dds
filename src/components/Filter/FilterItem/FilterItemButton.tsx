import React from 'react';
import Button, { ButtonProps } from '../../Buttons/Button';
import { FilterItem, FilterItemProps } from './FilterItem';

export interface FilterItemButtonProps extends FilterItemProps, ButtonProps {}

export const FilterItemButton: React.FC<FilterItemButtonProps> = (
  {
    children, _key, onCheckedChange = () => {}, onClick = async () => {},
  },
) => {
  return (
    <div>
      <FilterItem _key={_key} onCheckedChange={onCheckedChange}>
        <Button onClick={onClick}>Delete</Button>
      </FilterItem>
      {children}
    </div>
  );
};
