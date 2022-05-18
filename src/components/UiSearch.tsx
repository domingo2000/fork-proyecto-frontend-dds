import React from 'react';

interface UiSearchProps {
  children?: React.ReactNode;
}

function UiSearch({ children }: UiSearchProps) {
  return (
    <div className="ui-search">
      {React.Children.map(children, (child) => (
        <div className="ui-search__item">{child}</div>
      ))}
    </div>
  );
}

export default UiSearch;
