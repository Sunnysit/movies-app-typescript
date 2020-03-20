import React from "react";
import { Radio } from "antd";
import { CategoryRadioProps, MovieCategory } from "../config/typeInterface";

const CategoryRadio: React.FC<CategoryRadioProps> = ({
  handleCategoryChange
}) => {
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
        <Radio.Button value={MovieCategory.NOW_PLAYING}>
          Now Playing
        </Radio.Button>
        <Radio.Button value={MovieCategory.POPULAR}>Popular</Radio.Button>
        <Radio.Button value={MovieCategory.TOP_RATED}>Top Rated</Radio.Button>
        <Radio.Button value={MovieCategory.UPCOMING}>Upcoming</Radio.Button>
      </Radio.Group>
    </div>
  );
};

export default CategoryRadio;
