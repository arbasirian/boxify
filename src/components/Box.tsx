import React from "react";
import { BoxProps } from "../types";
import styles from "./Box.module.css";
import { cx } from "../utils";
import {
  generateBoxCssClasses,
  getSplittedProps,
  generateBoxStyles,
} from "../utils/shared";

export const Box: React.FC<BoxProps> = ({
  children,
  className,
  style,
  as = "div",
  htmlFor,
  ...props
}) => {
  const { cssProps, baseProps } = getSplittedProps(props);
  const Component = as as React.ElementType;
  const availableClasses = generateBoxCssClasses(cssProps, styles);
  const cssVariables = generateBoxStyles(cssProps);
  return (
    <Component
      className={cx(availableClasses, className)}
      style={{
        ...style,
        ...cssVariables,
      }}
      htmlFor={htmlFor}
      {...baseProps}
    >
      {children}
    </Component>
  );
};
