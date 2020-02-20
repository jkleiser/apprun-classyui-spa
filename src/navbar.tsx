import app from "apprun";
import { c } from "classy-ui";

export const NavBar = ({ id, label }, children) => {
  const navbarFixedTop = c(
    "position-fixed",
    "top-0",
    "width-full",
    "border-bottom-style-solid",
    "border-bottom-width-1",
    "border-bottom-color-gray-500"
  );
  const navClass = c(
    navbarFixedTop,
    "display-flex",
    "align-items-center",
    "background-color-gray-200",
    "padding-top-1",
    "padding-right-4",
    "padding-bottom-1",
    "padding-left-8",
    "z-index-10"
  );
  const aClass = c(
    "display-inline-block",
    "color-gray-800",
    "font-size-2xl",
    "text-decoration-none",
    "whitespace-no-wrap",
    "padding-right-2"
  );
  const ulClass = c(
    "display-flex",
    "flex-direction-row",
    "list-style-type-none",
    "padding-left-0",
    "margin-top-0",
    "margin-bottom-0"
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
  const aClass = c(
    "display-block",
    "color-gray-600",
    "font-family-roboto",
    "text-decoration-none",
    "padding-top-2",
    "padding-right-2",
    "padding-bottom-2",
    "padding-left-2"
  );
  return <li class={props.active ? "active" : null}>
    <a class={aClass} href={href}>{label}</a>
  </li>
}
