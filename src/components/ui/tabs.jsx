import React, { useState } from "react";

export const Tabs = ({ value, onValueChange, children }) => {
  const [current, setCurrent] = useState(value);

  const handleTabClick = (val) => {
    setCurrent(val);
    onValueChange(val);
  };

  const tabs = React.Children.toArray(children);
  const currentTab = tabs.find(tab => tab.props.value === current);

  return (
    <div className="space-y-4">
      <div className="flex space-x-4 border-b pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.props.value}
            onClick={() => handleTabClick(tab.props.value)}
            className={`px-4 py-2 rounded-t-md font-semibold ${
              tab.props.value === current
                ? "bg-white border border-b-transparent text-indigo-600"
                : "text-gray-600 hover:text-indigo-500"
            }`}
          >
            {tab.props.label}
          </button>
        ))}
      </div>
      <div>{currentTab}</div>
    </div>
  );
};

export const Tab = ({ children }) => {
  return <div className="pt-4">{children}</div>;
};
