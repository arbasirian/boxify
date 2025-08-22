import React, { forwardRef, useMemo, memo, useEffect } from "react";
import { BoxProps } from "../types";
import {
  getDynamicCSSClass,
  generateCSSVariables,
  generateStaticClasses,
  isBrowser,
} from "../utils/styleCache";
import {
  generateResponsiveStaticClasses,
  generateResponsiveDynamicClasses,
  generateResponsiveCSSVariables,
  insertResponsiveMediaQueries,
} from "../utils/responsiveAtomic";

// Type for the allowed HTML elements
type AllowedElement = HTMLDivElement | HTMLSpanElement | HTMLLabelElement;

// Memoized Box component for better performance
const BoxComponent = forwardRef<AllowedElement, BoxProps>(
  (
    {
      children,
      className = "",
      as = "div",
      style,
      mobile,
      tablet,
      desktop,
      ...props
    },
    ref
  ) => {
    // Memoize static CSS classes generation
    const staticClasses = useMemo(() => generateStaticClasses(props), [props]);

    // Memoize dynamic CSS classes generation
    const dynamicClasses = useMemo(() => {
      const classes: string[] = [];
      const dynamicProps = [
        "width",
        "height",
        "minWidth",
        "minHeight",
        "maxWidth",
        "maxHeight",
      ] as const;

      for (const prop of dynamicProps) {
        if (props[prop] !== undefined) {
          classes.push(getDynamicCSSClass(prop));
        }
      }

      return classes;
    }, [
      props.width,
      props.height,
      props.minWidth,
      props.minHeight,
      props.maxWidth,
      props.maxHeight,
    ]);

    // Memoize responsive static classes
    const responsiveStaticClasses = useMemo(
      () => generateResponsiveStaticClasses({ mobile, tablet, desktop }),
      [mobile, tablet, desktop]
    );

    // Memoize responsive dynamic classes
    const responsiveDynamicClasses = useMemo(
      () => generateResponsiveDynamicClasses({ mobile, tablet, desktop }),
      [mobile, tablet, desktop]
    );

    // Memoize CSS variables for dynamic values
    const cssVariables = useMemo(
      () => generateCSSVariables(props),
      [
        props.width,
        props.height,
        props.minWidth,
        props.minHeight,
        props.maxWidth,
        props.maxHeight,
      ]
    );

    // Memoize responsive CSS variables
    const responsiveCSSVariables = useMemo(
      () => generateResponsiveCSSVariables({ mobile, tablet, desktop }),
      [mobile, tablet, desktop]
    );

    // Memoize final className
    const finalClassName = useMemo(() => {
      const allClasses = [
        ...staticClasses,
        ...dynamicClasses,
        ...responsiveStaticClasses,
        ...responsiveDynamicClasses,
        className,
      ].filter(Boolean);

      return allClasses.join(" ");
    }, [
      staticClasses,
      dynamicClasses,
      responsiveStaticClasses,
      responsiveDynamicClasses,
      className,
    ]);

    // Memoize final styles (only CSS variables and user-passed style)
    const finalStyles = useMemo(() => {
      const styles: React.CSSProperties = {
        ...cssVariables,
        ...responsiveCSSVariables,
      };

      if (style) {
        Object.assign(styles, style);
      }

      return styles;
    }, [cssVariables, responsiveCSSVariables, style]);

    // Insert responsive media queries into stylesheet
    useEffect(() => {
      if (!isBrowser) return;

      const responsiveOverrides = { mobile, tablet, desktop };
      insertResponsiveMediaQueries(responsiveOverrides);
    }, [mobile, tablet, desktop]);

    // Memoize element props to prevent unnecessary re-renders
    const elementProps = useMemo(
      () => ({
        ref,
        className: finalClassName,
        style: finalStyles,
        ...props,
        children,
      }),
      [ref, finalClassName, finalStyles, props, children]
    );

    return React.createElement(as, elementProps);
  }
);

BoxComponent.displayName = "Box";

// Export memoized version for better performance
export const Box = memo(BoxComponent);
