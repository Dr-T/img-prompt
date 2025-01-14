import React, { FC, useCallback } from "react";
import { Button } from "antd";

interface AttributeSectionProps {
  attributes?: string[];
  selectedAttribute: string;
  onAttributeClick: (attribute: string) => void;
}

const AttributeSection: FC<AttributeSectionProps> = ({ attributes = [], selectedAttribute, onAttributeClick }) => {
  const handleClick = useCallback(
    (attribute: string) => {
      onAttributeClick(attribute);
    },
    [onAttributeClick]
  );

  return (
    <div className="flex flex-wrap">
      {attributes.map((attribute) => (
        <Button
          key={attribute}
          onClick={() => handleClick(attribute)}
          className={`m-1 px-3 py-1 text-sm font-medium leading-5 transition-colors duration-150 rounded-lg focus:outline-none border ${
            attribute === selectedAttribute ? "bg-indigo-500 text-white border-indigo-500" : ""
          }`}>
          {attribute}
        </Button>
      ))}
    </div>
  );
};

export default AttributeSection;
