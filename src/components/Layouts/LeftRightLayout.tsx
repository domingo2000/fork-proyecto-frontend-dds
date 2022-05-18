import React from 'react';

interface LeftRightLayoutProps {
  header?: string,
  left: React.ReactNode;
  right: React.ReactNode;
}

function LeftRightLayout({ left, right, header } : LeftRightLayoutProps) {
  return (
    <div className="product-index">
      { header && <h1 className="product-index__header">{header}</h1> }
      <div className="product-index__layout">
        <div className="product-index__layout__item-left">
          {left}
        </div>
        <div className="product-index__layout__item-right">
          {right}
        </div>
      </div>
    </div>
  );
}

export default LeftRightLayout;
