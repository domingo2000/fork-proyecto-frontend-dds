import React, {useState} from 'react';
import API from '../../services/APIRequester';
import {ICategory} from '../../interfaces/ICategory';
import Button from '../Buttons/Button';

interface CategoryAddInputProps {
  onCategoryAdd?: (category: ICategory) => any;
  placeholder?: string;
}

export default function CategoryAddInput({placeholder = 'New Category', onCategoryAdd = () => {}}
  : CategoryAddInputProps) {
  const [categoryName, setCategoryName] = useState<string>('');

  const onClick = async () => {
    const response = await API.post('/categories', {
      name: categoryName,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      products: [],
    });
    if (response) {
      const category : ICategory = response.data;
      await onCategoryAdd(category);
    }
  };

  return (
    <div>
      <input type="text" placeholder={placeholder} onChange={(e) => setCategoryName(e.currentTarget.value)} />
      <Button className="button--green" onClick={onClick}>Add</Button>
    </div>

  );
}
