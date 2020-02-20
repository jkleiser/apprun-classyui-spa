import { c, active, hover } from "classy-ui";

export const ui = {
  button: c(
    "border-style-solid",
    "border-color-gray-600",
    "border-width-1",
    "border-radius-md",
    "background-color-gray-100",
    "padding-left-3",
    "padding-right-3",
    "text-align-center",
    "vertical-align-middle",
    "user-select-none",
    hover(
      "background-color-green-200"
/*
  info re. hover on iOS touch screens:
  https://www.prowebdesign.ro/how-to-deal-with-hover-on-touch-screen-devices/
*/
    ),
    active(
      "color-blue-700"
    )
  ),
  h1: c(
    "font-size-3xl",
    "margin-top-1",
    "margin-bottom-4"
  ),
  h2: c(
    "font-size-2xl",
    "margin-top-2",
    "margin-bottom-2"
  )
};
