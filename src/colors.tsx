import app from "apprun";
import { c, t } from "classy-ui";

// These background colors are arranged as an experiment
export const bgCol = {
  GRAY: {
    200: c(t.backgroundColor.GRAY_200),
    400: c(t.backgroundColor.GRAY_400),
    600: c(t.backgroundColor.GRAY_600),
    800: c(t.backgroundColor.GRAY_800)
  },
  RED: {
    200: c(t.backgroundColor.RED_200),
    400: c(t.backgroundColor.RED_400),
    600: c(t.backgroundColor.RED_600),
    800: c(t.backgroundColor.RED_800)
  },
  ORANGE: {
    200: c(t.backgroundColor.ORANGE_200),
    400: c(t.backgroundColor.ORANGE_400),
    600: c(t.backgroundColor.ORANGE_600),
    800: c(t.backgroundColor.ORANGE_800)
  },
  YELLOW: {
    200: c(t.backgroundColor.YELLOW_200),
    400: c(t.backgroundColor.YELLOW_400),
    600: c(t.backgroundColor.YELLOW_600),
    800: c(t.backgroundColor.YELLOW_800)
  },
  GREEN: {
    200: c(t.backgroundColor.GREEN_200),
    400: c(t.backgroundColor.GREEN_400),
    600: c(t.backgroundColor.GREEN_600),
    800: c(t.backgroundColor.GREEN_800)
  },
  TEAL: {
    200: c(t.backgroundColor.TEAL_200),
    400: c(t.backgroundColor.TEAL_400),
    600: c(t.backgroundColor.TEAL_600),
    800: c(t.backgroundColor.TEAL_800)
  },
  BLUE: {
    200: c(t.backgroundColor.BLUE_200),
    400: c(t.backgroundColor.BLUE_400),
    600: c(t.backgroundColor.BLUE_600),
    800: c(t.backgroundColor.BLUE_800)
  },
  INDIGO: {
    200: c(t.backgroundColor.INDIGO_200),
    400: c(t.backgroundColor.INDIGO_400),
    600: c(t.backgroundColor.INDIGO_600),
    800: c(t.backgroundColor.INDIGO_800)
  },
  PURPLE: {
    200: c(t.backgroundColor.PURPLE_200),
    400: c(t.backgroundColor.PURPLE_400),
    600: c(t.backgroundColor.PURPLE_600),
    800: c(t.backgroundColor.PURPLE_800)
  },
  PINK: {
    200: c(t.backgroundColor.PINK_200),
    400: c(t.backgroundColor.PINK_400),
    600: c(t.backgroundColor.PINK_600),
    800: c(t.backgroundColor.PINK_800)
  }
}

export const ColorTable = (props) => {
  const tableClass = props ? props.class : null;
  const names = ["GRAY", "RED", "ORANGE", "YELLOW", "GREEN", "TEAL", "BLUE", "INDIGO", "PURPLE", "PINK"];
  const nums = [200, 400, 600, 800];
  const tdClass = (varClass): string => c(
    varClass,
    t.paddingTop.SPACING_2,
    t.paddingRight.SPACING_3,
    t.paddingBottom.SPACING_2,
    t.paddingLeft.SPACING_3
  );
  
  return <table class={tableClass}>{names.map(name =>
      <tr>
        <th class={c(t.textAlign.LEFT, t.paddingRight.SPACING_2)}>{name}</th>
        {nums.map(num => <td class={tdClass(bgCol[name][num])}>{num}</td>)}
      </tr>
    )}
  </table>
}
