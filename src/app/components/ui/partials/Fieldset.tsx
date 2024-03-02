import React from "react";
import { Icon } from "@iconify/react";
import IconifyIcon from "../iconsbutton";

interface IProps {
  label: string;
  kind?: "blue" | "sky" | "teal" | "pink";
  icon?: string;
  fieldsetDiv?: string;
  legendDiv?: string;
  childrenDiv?: string;
  children?: React.ReactNode;
  showIcon?: boolean;
}

const Fieldset: React.FC<IProps> = ({
  label = "",
  kind = "blue",
  icon,
  fieldsetDiv = "",
  legendDiv = "",
  childrenDiv = "",
  showIcon = true,
  children,
}) => {
  const getBorderColorClass = () => {
    switch (kind) {
      case "blue":
        return "border-blue-200";
      case "teal":
        return "border-teal-200";
      case "pink":
        return "border-pink-200";
      case "sky":
        return "border-sky-200";
      default:
        return "";
    }
  };

  const getBackgroundColorClass = () => {
    switch (kind) {
      case "blue":
        return "bg-blue-50";
      case "teal":
        return "bg-teal-50";
      case "pink":
        return "bg-pink-50";
      case "sky":
        return "bg-sky-50";
      default:
        return "";
    }
  };

  const getTextColorClass = () => {
    switch (kind) {
      case "blue":
        return "text-black";
      case "teal":
        return "text-teal-500";
      case "pink":
        return "text-pink-500";
      case "sky":
        return "text-sky-500";
      default:
        return "";
    }
  };

  return (
    <fieldset
      className={`border rounded-md ${fieldsetDiv} ${getBorderColorClass()} relative`}
    >
      <legend
        className={`shadow-sm shadow-gray-200 text-xs rounded-[5px] px-2 py-1.5 uppercase ml-4 flex items-center gap-1.5 font-medium ${legendDiv} ${getBackgroundColorClass()} ${getTextColorClass()}`}
      >
        {showIcon && (
          <IconifyIcon icon={icon ?? "bxs:edit-alt"} fontSize={16} />
        )}
        {label}
      </legend>
      <div className={`p-4 ${childrenDiv} relative`}>{children}</div>
    </fieldset>
  );
};

export default Fieldset;
