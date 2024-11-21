import React, { useState } from 'react';
import './SearchBar.css';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  return (
    <div className="study-search">
      <input
        type="text"
        placeholder="검색어를 입력하세요"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <SearchIcon className="search-icon" />
    </div>
  );
};

export default SearchBar;
