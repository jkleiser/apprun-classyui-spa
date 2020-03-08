import app from "apprun";
import { compose, tokens } from "classy-ui";

export const ui = {
  button: compose(
    tokens.borderStyle.SOLID,
    tokens.borderColor.GRAY_60,
    tokens.borderWidth.WIDTH_1,
    tokens.borderRadius.RADIUS_20,
    tokens.backgroundColor.GRAY_10,
    tokens.backgroundColor.GREEN_20.hover,
/*
  info re. hover on iOS touch screens:
  https://www.prowebdesign.ro/how-to-deal-with-hover-on-touch-screen-devices/
*/
    tokens.color.BLUE_70.active,
    tokens.paddingHorizontal.SPACE_30, // both paddingLeft and paddingRight
    tokens.textAlign.CENTER,
    tokens.verticalAlign.MIDDLE,
    tokens.userSelect.NONE
  ),
  h1: compose(
    tokens.fontSize.SIZE_70,
    tokens.marginTop.SPACE_10,
    tokens.marginBottom.SPACE_40
  ),
  h2: compose(
    tokens.fontSize.SIZE_60,
    tokens.marginTop.SPACE_20,
    tokens.marginBottom.SPACE_10
  )
};

export const Aext = (props, children) => {
  const { href } = props;
  const aClass: string = compose(
    tokens.textDecorationLine.NONE,
    tokens.borderBottomStyle.SOLID,
    tokens.borderBottomWidth.WIDTH_1,
    tokens.borderBottomColor.INDIGO_60
  );
  const extClass: string = compose(
    tokens.fontSize.SIZE_10,  // TODO SIZE_15
    tokens.verticalAlign.SUPER
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
