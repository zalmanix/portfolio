import React from "react";

export const Text = ({
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
  return <p className={` font-Rubik ${className}`}>{content}</p>;
};
