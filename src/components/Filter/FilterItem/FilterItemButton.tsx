import React from 'react';
import Button, {ButtonProps} from '../../Buttons/Button';
import {FilterItem, FilterItemProps} from './FilterItem';

export interface FilterItemButtonProps extends FilterItemProps, ButtonProps {}

export const FilterItemButton: React.FC<FilterItemButtonProps> = (
  {
    children, name, onCheckedChange = () => {}, onClick = async () => {},
  },
) => {
  return (
    <div>
      <FilterItem key={name} name={name} onCheckedChange={onCheckedChange}>
        <Button onClick={onClick}>Delete</Button>
      </FilterItem>
      {children}
    </div>
  );
};
