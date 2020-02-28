import app from "apprun";
import { compose, c, tokens, t } from "classy-ui";

export const ui = {
  button: compose(
    tokens.borderStyle.SOLID,
    tokens.borderColor.GRAY_600,
    tokens.borderWidth.WIDTH_1,
    tokens.borderRadius.MEDIUM,
    tokens.backgroundColor.GRAY_100,
    tokens.backgroundColor.GREEN_200.hover,
/*
  info re. hover on iOS touch screens:
  https://www.prowebdesign.ro/how-to-deal-with-hover-on-touch-screen-devices/
*/
    tokens.color.BLUE_700.active,
    tokens.paddingLeft.SPACING_3,
    tokens.paddingRight.SPACING_3,
    tokens.textAlign.CENTER,
    tokens.verticalAlign.MIDDLE,
    tokens.userSelect.NONE
  ),
  h1: compose(
    tokens.fontSize.EXTRA_LARGE_3,
    tokens.marginTop.SPACING_1,
    tokens.marginBottom.SPACING_4
  ),
  h2: compose(
    tokens.fontSize.EXTRA_LARGE_2,
    tokens.marginTop.SPACING_2,
    tokens.marginBottom.SPACING_1
  )
};

// These background colors are arranged as an experiment
export const bgCol = {
  gray: {
    200: c(t.backgroundColor.GRAY_200),
    400: c(t.backgroundColor.GRAY_400),
    600: c(t.backgroundColor.GRAY_600),
    800: c(t.backgroundColor.GRAY_800)
  },
  red: {
    200: c(t.backgroundColor.RED_200),
    400: c(t.backgroundColor.RED_400),
    600: c(t.backgroundColor.RED_600),
    800: c(t.backgroundColor.RED_800)
  },
  orange: {
    200: c(t.backgroundColor.ORANGE_200),
    400: c(t.backgroundColor.ORANGE_400),
    600: c(t.backgroundColor.ORANGE_600),
    800: c(t.backgroundColor.ORANGE_800)
  },
  yellow: {
    200: c(t.backgroundColor.YELLOW_200),
    400: c(t.backgroundColor.YELLOW_400),
    600: c(t.backgroundColor.YELLOW_600),
    800: c(t.backgroundColor.YELLOW_800)
  },
  green: {
    200: c(t.backgroundColor.GREEN_200),
    400: c(t.backgroundColor.GREEN_400),
    600: c(t.backgroundColor.GREEN_600),
    800: c(t.backgroundColor.GREEN_800)
  }
}

export const Aext = (props, children) => {
  const { href } = props;
  const aClass = compose(
    tokens.textDecorationLine.NONE,
    tokens.borderBottomStyle.SOLID,
    tokens.borderBottomWidth.WIDTH_1,
    tokens.borderBottomColor.INDIGO_600
  );
  return <a class={aClass} href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}
