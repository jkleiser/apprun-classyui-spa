import app from "apprun";
import { compose, tokens } from "classy-ui";

// These background colors are arranged as an experiment
export const bgCol = {
  GRAY: {
    200: compose(tokens.backgroundColor.GRAY_200),
    400: compose(tokens.backgroundColor.GRAY_400),
    600: compose(tokens.backgroundColor.GRAY_600),
    800: compose(tokens.backgroundColor.GRAY_800)
  },
  RED: {
    200: compose(tokens.backgroundColor.RED_200),
    400: compose(tokens.backgroundColor.RED_400),
    600: compose(tokens.backgroundColor.RED_600),
    800: compose(tokens.backgroundColor.RED_800)
  },
  ORANGE: {
    200: compose(tokens.backgroundColor.ORANGE_200),
    400: compose(tokens.backgroundColor.ORANGE_400),
    600: compose(tokens.backgroundColor.ORANGE_600),
    800: compose(tokens.backgroundColor.ORANGE_800)
  },
  YELLOW: {
    200: compose(tokens.backgroundColor.YELLOW_200),
    400: compose(tokens.backgroundColor.YELLOW_400),
    600: compose(tokens.backgroundColor.YELLOW_600),
    800: compose(tokens.backgroundColor.YELLOW_800)
  },
  GREEN: {
    200: compose(tokens.backgroundColor.GREEN_200),
    400: compose(tokens.backgroundColor.GREEN_400),
    600: compose(tokens.backgroundColor.GREEN_600),
    800: compose(tokens.backgroundColor.GREEN_800)
  },
  TEAL: {
    200: compose(tokens.backgroundColor.TEAL_200),
    400: compose(tokens.backgroundColor.TEAL_400),
    600: compose(tokens.backgroundColor.TEAL_600),
    800: compose(tokens.backgroundColor.TEAL_800)
  },
  BLUE: {
    200: compose(tokens.backgroundColor.BLUE_200),
    400: compose(tokens.backgroundColor.BLUE_400),
    600: compose(tokens.backgroundColor.BLUE_600),
    800: compose(tokens.backgroundColor.BLUE_800)
  },
  INDIGO: {
    200: compose(tokens.backgroundColor.INDIGO_200),
    400: compose(tokens.backgroundColor.INDIGO_400),
    600: compose(tokens.backgroundColor.INDIGO_600),
    800: compose(tokens.backgroundColor.INDIGO_800)
  },
  PURPLE: {
    200: compose(tokens.backgroundColor.PURPLE_200),
    400: compose(tokens.backgroundColor.PURPLE_400),
    600: compose(tokens.backgroundColor.PURPLE_600),
    800: compose(tokens.backgroundColor.PURPLE_800)
  },
  PINK: {
    200: compose(tokens.backgroundColor.PINK_200),
    400: compose(tokens.backgroundColor.PINK_400),
    600: compose(tokens.backgroundColor.PINK_600),
    800: compose(tokens.backgroundColor.PINK_800)
  }
}

export const ColorTable = (props) => {
  const tableClass = props ? props.class : null;
  const names = ["GRAY", "RED", "ORANGE", "YELLOW", "GREEN", "TEAL", "BLUE", "INDIGO", "PURPLE", "PINK"];
  const nums = [200, 400, 600, 800];
  const tdClass = (varClass): string => compose(
    varClass,
    tokens.paddingTop.SPACING_2,
    tokens.paddingRight.SPACING_3,
    tokens.paddingBottom.SPACING_2,
    tokens.paddingLeft.SPACING_3
  );
  
  return <table class={tableClass}>{names.map(name =>
      <tr>
        <th class={compose(tokens.textAlign.LEFT, tokens.paddingRight.SPACING_2)}>{name}</th>
        {nums.map(num => <td class={tdClass(bgCol[name][num])}>{num}</td>)}
      </tr>
    )}
  </table>
}
