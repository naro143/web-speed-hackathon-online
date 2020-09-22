import React from 'react';

import { BlogCard } from '../BlogCard';

export function BlogCardList({ list, columnCount }) {
  const rows = [];
  let index = 0;
  while (1) {
    rows.push(list.slice(index, index + columnCount));
    index += columnCount;
    if (list.length <= index) {
      break;
    }
  }

  return (
    <div className="blog-list-BlogCardList">
      {rows.map((rowItems, i) => (
        <div key={i} className="blog-list-BlogCardList__row">
          {rowItems.map((item, j) => (
            <div
              key={j}
              className="blog-list-BlogCardList__column"
              style={{ width: `calc(100% / ${columnCount})` }}
            >
              <BlogCard blog={item} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
