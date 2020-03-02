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

export const Aext = (props, children) => {
  const { href } = props;
  const aClass: string = compose(
    tokens.textDecorationLine.NONE,
    tokens.borderBottomStyle.SOLID,
    tokens.borderBottomWidth.WIDTH_1,
    tokens.borderBottomColor.INDIGO_600
  );
  const extClass: string = compose(
    tokens.fontSize.SMALL,
    tokens.verticalAlign.TOP  // better: SUPER
  );
  return <a class={aClass} href={href} target="_blank"
    rel="noopener noreferrer">{children}<span class={extClass}>&nbsp;➚</span></a>
}

export const Aint = (props, children) => {
  const { href } = props;
  const aClass: string = compose(
    tokens.textDecorationLine.NONE
  );
  return <a class={aClass} href={href}>{children}</a>
}
