import { BOX_CSS_PROPS_KEYS } from "../constants";
import {
  BaseProps,
  BoxCssProps,
  BoxNonCssProps,
  BoxProps,
  Breakpoint,
  CSSProps,
} from "../types";

export const getSplittedProps = (
  props: BoxProps
): { cssProps: BoxCssProps; baseProps: BoxNonCssProps } => {
  let cssProps: Partial<BoxCssProps> = {};
  let baseProps: BoxNonCssProps = {
    children: props.children,
    className: props.className,
    hasMirror: props.hasMirror,
  };
  const { mobile, tablet, desktop, ...restProps } = props;

  Object.keys(restProps).forEach((key) => {
    if (BOX_CSS_PROPS_KEYS.has(key as keyof CSSProps)) {
      cssProps = {
        ...cssProps,
        [key]: restProps[key as keyof BaseProps],
      };
    } else {
      baseProps = {
        ...baseProps,
        [key]: restProps[key as keyof BoxNonCssProps],
      };
    }
  });

  return {
    cssProps: {
      mobile,
      tablet,
      desktop,
      ...cssProps,
    },
    baseProps,
  };
};

const generateBaseCssClasses = (
  classes: Set<string>,
  styles: Record<string, string>,
  props?: BoxCssProps,
  layout?: Breakpoint
) => {
  if (!props) {
    return;
  }

  if (layout) {
    Object.entries(props).forEach(([key, value]) => {
      if (value) {
        classes.add(styles[`bx_${key}_${layout}`]);
      }
    });
    return;
  }
  Object.entries(props).forEach(([key, value]) => {
    if (value) {
      classes.add(styles[`bx_${key}`]);
    }
  });
};

export const generateBoxCssClasses = (
  props: BoxCssProps,
  styles: Record<string, string>
): string[] => {
  const availableClasses = new Set<string>();

  Object.entries(props).forEach(([key, value]) => {
    if (key === "mobile" || key === "tablet" || key === "desktop") {
      generateBaseCssClasses(
        availableClasses,
        styles,
        value as BoxCssProps,
        key as Breakpoint
      );
    } else {
      availableClasses.add(styles[`bx_${key}`]);
    }
  });

  return [...availableClasses];
};

const getBoxCssVariables = (props: BoxCssProps, breakpoint?: Breakpoint) => {
  return [...BOX_CSS_PROPS_KEYS].reduce<React.CSSProperties>((a, v) => {
    if (breakpoint && !props[breakpoint]?.[v]) return a;
    if (!breakpoint && !props?.[v]) return a;

    if (breakpoint) {
      if (props[breakpoint]?.[v]) {
        return {
          ...a,
          [`--${v}-${breakpoint}`]: props[breakpoint]?.[v],
        };
      }
      return a;
    } else {
      if (props?.[v]) {
        return {
          ...a,
          [`--${v}`]: props?.[v],
        };
      }
      return a;
    }
  }, {});
};

export const generateBoxStyles = (props: BoxCssProps) => {
  return {
    ...getBoxCssVariables(props),
    ...getBoxCssVariables(props, "mobile"),
    ...getBoxCssVariables(props, "tablet"),
    ...getBoxCssVariables(props, "desktop"),
  };
};
