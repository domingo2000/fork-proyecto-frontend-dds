import React, { useState } from 'react';
import { FilterItemProps } from './FilterItem/FilterItem';

export interface FilterBarProps {
  onFiltersChange?: (filters: Set<string>) => void,
}

export const FilterBar: React.FC<FilterBarProps> = (
  { children, onFiltersChange = async () => {} },
) => {
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
    <div className="filter-bar">
      <h2>Categories</h2>
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
