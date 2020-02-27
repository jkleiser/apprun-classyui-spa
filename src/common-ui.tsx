import app from "apprun";
import { compose, tokens } from "classy-ui";

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
    tokens.paddingLeft.SPACING_03,
    tokens.paddingRight.SPACING_03,
    tokens.textAlign.CENTER,
    tokens.verticalAlign.MIDDLE,
    tokens.userSelect.NONE
  ),
  h1: compose(
    tokens.fontSize.EXTRA_LARGE_3,
    tokens.marginTop.SPACING_01,
    tokens.marginBottom.SPACING_04
  ),
  h2: compose(
    tokens.fontSize.EXTRA_LARGE_2,
    tokens.marginTop.SPACING_02,
    tokens.marginBottom.SPACING_02
  )
};

export const Aext = (props, children) => {
  const { href } = props;
  return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
}
