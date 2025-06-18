// SearchContext.tsx
import React, { createContext, useContext, useState } from 'react';

const SearchContext = createContext({
  searchTerm: '',
  setSearchTerm: (_term: string) => {},
});

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
