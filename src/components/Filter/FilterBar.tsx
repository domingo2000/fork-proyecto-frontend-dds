import React, { useState } from 'react';
import { FilterItemProps } from './FilterItem/FilterItem';

export interface FilterBarProps {
  onFiltersChange?: (filters: Set<string>) => void,
  children?: React.ReactNode,
}

function FilterBar({ children, onFiltersChange = async () => {} }: FilterBarProps) {
  const [filters, setFilters] = useState<Set<string>>(new Set());

  const onCheckedChange = (key: string, checked: boolean) => {
    const newFilters = new Set(filters);
    if (checked) {
      newFilters.add(key);
    } else {
      newFilters.delete(key);
    }
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  return (
    <div className="flex flex-col items-center px-16 py-4 bg-gray-200 rounded-lg">
      <h2 className='font-semibold text-center text-xl'>Filter by Category</h2>
      {React.Children.map(children, (child) => {
        if (child) {
          return React.cloneElement(child as React.ReactElement<FilterItemProps>, {
            onCheckedChange,
          });
        }
        return <div />;
      })}
    </div>
  );
};

export default FilterBar;
