import React from 'react';
import API from '../../services/APIRequester';
import {ICategory} from '../../interfaces/ICategory';
import Button from '../Buttons/Button';
import FilterBar, {
  FilterBarProps,
} from '../Filter/FilterBar';
import {FilterItem, FilterItemCallback, FilterItemProps} from '../Filter/FilterItem/FilterItem';
import {CategoriesProps, CategoryProps} from './Category';
import CategoryAddInput from './CategoryInput';

interface CategoryItemProps extends CategoryProps, FilterItemProps {
  onClick?: (category: ICategory) => Promise<any>;
}

export function CategoryItem({category, name, onClick = async () => {}, onCheckedChange = async () => {}}:
  CategoryItemProps) {
  const handleClick = async () => {
    await API.delete(`/categories/${category.id}`);
    await onClick(category);
  };

  const handleCheckedChange: FilterItemCallback = async ($key, checked) => {
    await onCheckedChange($key, checked);
  };

  return (
    <FilterItem key={name} name={name} onCheckedChange={handleCheckedChange}>
      <Button onClick={handleClick}>Delete</Button>
    </FilterItem>
  );
};

interface CategoryFilterBarProps extends FilterBarProps, CategoriesProps {
  categories: ICategory[]
  onFiltersChange: (filters: Set<string>) => void
  children?: React.ReactNode
  onCategoryDelete: (category: ICategory) => any;
  onCategoryAdd? : (category: ICategory) => any;
}

export function CategoryFilterBar({categories, onFiltersChange, children, onCategoryDelete, onCategoryAdd= () => {}}:
  CategoryFilterBarProps) {
  const handleFilterChange = async (filters: Set<string>) => {
    onFiltersChange(filters);
  };

  const handleClick = async (cateogry: ICategory) => {
    await onCategoryDelete(cateogry);
  };

  const handleCategoryAdd = async (category: ICategory) => {
    await onCategoryAdd(category);
  };

  return (
    <div>
      <FilterBar onFiltersChange={handleFilterChange}>
        {categories.map((category) => (
          <CategoryItem key={category.id} name={category.name} category={category} onClick={handleClick} />
        ))}
        <CategoryAddInput onCategoryAdd={handleCategoryAdd} />
      </FilterBar>
      {children}
    </div>
  );
};
