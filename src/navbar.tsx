import app from "apprun";
import { compose, mobile, tokens } from "classy-ui";

export const NavBar = ({ id, label }, children) => {
  const navbarFixedTop = compose(
    tokens.position.FIXED,
    tokens.top.SPACE_0,
    tokens.width.FULL,
    tokens.borderBottomStyle.SOLID,
    tokens.borderBottomWidth.WIDTH_1,
    tokens.borderBottomColor.GRAY_50
  );
  const navClass = compose(
    navbarFixedTop,
    tokens.display.FLEX,
    tokens.alignItems.CENTER,
    tokens.backgroundColor.GRAY_20,
    tokens.paddingTop.SPACE_10,
    tokens.paddingRight.SPACE_40,
    mobile(tokens.paddingRight.SPACE_20),
    tokens.paddingBottom.SPACE_10,
    tokens.paddingLeft.SPACE_70,
    mobile(tokens.paddingLeft.SPACE_40),
    tokens.zIndex.Z_9
  );
  const aClass = compose(
    tokens.display.INLINE_BLOCK,
    tokens.color.GRAY_80,
    tokens.fontSize.SIZE_60,
    mobile(tokens.fontSize.SIZE_50),
    tokens.textDecorationLine.NONE,
    tokens.whitespace.NO_WRAP,
    tokens.paddingRight.SPACE_20
  );
  const ulClass = compose(
    tokens.display.FLEX,
    tokens.flexDirection.ROW,
    tokens.listStyleType.NONE,
    tokens.paddingLeft.SPACE_0,
    tokens.marginVertical.SPACE_0  // both marginTop and marginBottom
  );
  return <nav id={id} class={navClass}>
    <a class={aClass} href="#">{label}</a>
    <ul class={ulClass}>
      {children}
    </ul>
  </nav>
}

export const NavItem = (props) => {
  const { label, href } = props;
  const aClass = compose(
    tokens.display.BLOCK,
    tokens.color.GRAY_60,
    tokens.fontFamily.ROBOTO,
    tokens.textDecorationLine.NONE,
    tokens.paddingHorizontal.SPACE_20, // both paddingLeft and paddingRight
    tokens.paddingVertical.SPACE_20  // both paddingTop and paddingBottom
  );
  return <li class={props.active ? "active" : null}>
    <a class={aClass} href={href}>{label}</a>
  </li>
}
