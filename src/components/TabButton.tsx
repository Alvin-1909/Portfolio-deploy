import React from "react";

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({
  active,
  selectTab,
  children,
}) => {
  return (
    <button
      onClick={selectTab}
      className={`px-4 py-2 font-semibold border-b-2 ${
        active
          ? "text-white border-purple-500"
          : "text-[#adb7be] border-transparent hover:text-white hover:border-purple-500"
      }`}
    >
      {children}
    </button>
  );
};

export default TabButton;
