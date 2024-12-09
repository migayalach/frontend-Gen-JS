import React from "react";
import { Select } from "antd";

function SelectLevel({ list, handleLevel, levelCurrently }) {
  if (!levelCurrently) {
    return null;
  }

  const listArray = list.map(({ idLevel, nameLevel }) => ({
    value: idLevel,
    label: nameLevel,
  }));

  const onChange = (value) => {
    handleLevel(value);
  };

  const onSearch = (value) => {
    handleLevel(value);
  };

  return (
    <Select
      defaultValue={levelCurrently}
      showSearch
      placeholder="Select a level"
      optionFilterProp="label"
      onChange={onChange}
      onSearch={onSearch}
      options={listArray}
    />
  );
}

export default SelectLevel;
