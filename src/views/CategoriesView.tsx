import React, {useEffect, useState} from 'react';
import {ICategory} from '../interfaces/ICategory';
import {CategoryWithProducts} from '../components/Category/Category';
import {CategoryFilterBar} from '../components/Category/CategoryFilterBar';

import LeftRightLayout from '../components/Layouts/LeftRightLayout';
import useFetchData from '../services/useFetchData';

type Props = {
  children?: React.ReactNode;
};

function CategoriesView({children = null} : Props) {
  const {response, loading, error} = useFetchData('/categories');
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<ICategory[]>(
    response ? response.data : [],
  );
  const [filters, setFilters] = useState(new Set<string>());

  useEffect(() => {
    if (response) {
      setCategories(response.data);
    }
  }, [response]);

  useEffect(() => {
    setFilteredCategories(categories);
    const shouldFilter = !(filters.size === 0);
    if (shouldFilter) {
      setFilteredCategories(categories.filter((category: ICategory) => {
        return filters.has(category.name);
      }));
    }
  }, [filters, categories]);

  const handleFilterChange = (_filters: Set<string>) => {
    setFilters(_filters);
  };

  const handleCategoryDelete = async (category: ICategory) => {
    setCategories(categories.filter((c) => c.id !== category.id));
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && (
        <p>Error: {error.message}</p>
      )}
      {response && (
        <div>
          <LeftRightLayout
            left={(
              <CategoryFilterBar
                categories={response?.data}
                onFiltersChange={handleFilterChange}
                onCategoryDelete={handleCategoryDelete}
              />
            )}
            right={(
              <div className="ui-search">
                {filteredCategories.map((category) => (
                  <div key={category.name} className="ui-search__item ui-search__item--primary ui-search__item--spaced">
                    <CategoryWithProducts key={category.id} category={category} />
                  </div>
                ))}
              </div>
            )}
          />

        </div>
      )}

      {children}
    </div>
  );
}

export default CategoriesView;
