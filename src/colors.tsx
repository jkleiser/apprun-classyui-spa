import app from "apprun";
import { compose, tokens } from "classy-ui";

// These background colors are arranged as an experiment
export const bgCol = {
  GRAY: {
    20: compose(tokens.backgroundColor.GRAY_20),
    40: compose(tokens.backgroundColor.GRAY_40),
    60: compose(tokens.backgroundColor.GRAY_60),
    80: compose(tokens.backgroundColor.GRAY_80)
  },
  RED: {
    20: compose(tokens.backgroundColor.RED_20),
    40: compose(tokens.backgroundColor.RED_40),
    60: compose(tokens.backgroundColor.RED_60),
    80: compose(tokens.backgroundColor.RED_80)
  },
  ORANGE: {
    20: compose(tokens.backgroundColor.ORANGE_20),
    40: compose(tokens.backgroundColor.ORANGE_40),
    60: compose(tokens.backgroundColor.ORANGE_60),
    80: compose(tokens.backgroundColor.ORANGE_80)
  },
  YELLOW: {
    20: compose(tokens.backgroundColor.YELLOW_20),
    40: compose(tokens.backgroundColor.YELLOW_40),
    60: compose(tokens.backgroundColor.YELLOW_60),
    80: compose(tokens.backgroundColor.YELLOW_80)
  },
  GREEN: {
    20: compose(tokens.backgroundColor.GREEN_20),
    40: compose(tokens.backgroundColor.GREEN_40),
    60: compose(tokens.backgroundColor.GREEN_60),
    80: compose(tokens.backgroundColor.GREEN_80)
  },
  TEAL: {
    20: compose(tokens.backgroundColor.TEAL_20),
    40: compose(tokens.backgroundColor.TEAL_40),
    60: compose(tokens.backgroundColor.TEAL_60),
    80: compose(tokens.backgroundColor.TEAL_80)
  },
  BLUE: {
    20: compose(tokens.backgroundColor.BLUE_20),
    40: compose(tokens.backgroundColor.BLUE_40),
    60: compose(tokens.backgroundColor.BLUE_60),
    80: compose(tokens.backgroundColor.BLUE_80)
  },
  INDIGO: {
    20: compose(tokens.backgroundColor.INDIGO_20),
    40: compose(tokens.backgroundColor.INDIGO_40),
    60: compose(tokens.backgroundColor.INDIGO_60),
    80: compose(tokens.backgroundColor.INDIGO_80)
  },
  PURPLE: {
    20: compose(tokens.backgroundColor.PURPLE_20),
    40: compose(tokens.backgroundColor.PURPLE_40),
    60: compose(tokens.backgroundColor.PURPLE_60),
    80: compose(tokens.backgroundColor.PURPLE_80)
  },
  PINK: {
    20: compose(tokens.backgroundColor.PINK_20),
    40: compose(tokens.backgroundColor.PINK_40),
    60: compose(tokens.backgroundColor.PINK_60),
    80: compose(tokens.backgroundColor.PINK_80)
  }
}

export const ColorTable = (props) => {
  const tableClass = props ? props.class : null;
  const names = ["GRAY", "RED", "ORANGE", "YELLOW", "GREEN", "TEAL", "BLUE", "INDIGO", "PURPLE", "PINK"];
  const nums = [20, 40, 60, 80];
  const tdClass = (varClass): string => compose(
    varClass,
    tokens.paddingTop.SPACE_20,
    tokens.paddingRight.SPACE_30,
    tokens.paddingBottom.SPACE_20,
    tokens.paddingLeft.SPACE_30
  );
  
  return <table class={tableClass}>{names.map(name =>
      <tr>
        <th class={compose(tokens.textAlign.LEFT, tokens.paddingRight.SPACE_20)}>{name}</th>
        {nums.map(num => <td class={tdClass(bgCol[name][num])}>{num}</td>)}
      </tr>
    )}
  </table>
}
