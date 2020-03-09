import React from "react";
import { Input } from "antd";
import { SearchFromProps } from "../config/typeInterface";

const SearchForm: React.FC<SearchFromProps> = ({ handleQuerySubmit }) => {
  const { Search } = Input;

  return (
    <div style={{ marginBottom: "1rem" }}>
      <Search
        placeholder="input keyword about any movies....."
        onSearch={value => handleQuerySubmit(value)}
        enterButton
      />
    </div>
  );
};

export default SearchForm;
