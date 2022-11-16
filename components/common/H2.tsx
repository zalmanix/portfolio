import React from "react";

export const H2 = ({
  text,
  className = "",
  specialText,
  specialClassName = "",
}: {
  text: string;
  className?: string;
  specialText?: string;
  specialClassName?: string;
}) => {
  const tempArr = specialText ? text.split(specialText) : [];
  const content =
    tempArr.length === 2 ? (
      <>
        {tempArr[0]} <span className={specialClassName}>{specialText}</span>{" "}
        {tempArr[1]}
      </>
    ) : (
      text
    );
  return <h2 className={`text-[27px] font-Inter ${className}`}>{content}</h2>;
};
