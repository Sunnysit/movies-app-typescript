import React from "react";
import { Input } from "antd";

const SearchForm = ({ handleQuerySubmit }: any) => {
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
