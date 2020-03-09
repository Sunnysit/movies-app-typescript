import React from "react";
import { Radio } from "antd";

const CategoryRadio = ({ handleCategoryChange }: any) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}
    >
      <Radio.Group
        name="categories"
        buttonStyle="solid"
        defaultValue="now_playing"
        onChange={handleCategoryChange}
      >
        <Radio.Button value="now_playing">Now Playing</Radio.Button>
        <Radio.Button value="popular">Popular</Radio.Button>
        <Radio.Button value="top_rated">Top Rated</Radio.Button>
        <Radio.Button value="upcoming">Upcoming</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default CategoryRadio;
