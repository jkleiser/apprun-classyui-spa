import app, { Component } from "apprun";
import { ui, Aext } from "./common-ui";
import { compose, tokens } from "classy-ui";

const demoWrapClass = compose(
  tokens.display.FLEX,
  tokens.flexWrap.WRAP
);

const demoClass = (varClass?): string => compose(
  varClass || "",
  tokens.borderStyle.SOLID,
  tokens.borderColor.GRAY_40,
  tokens.borderWidth.WIDTH_1,
  tokens.padding.SPACE_20,
  tokens.textAlign.CENTER,
  tokens.marginLeft.SPACE_50,
  tokens.marginBottom.SPACE_20,
  tokens.minHeight.SIZE_3
);

const inputClass = compose(
  tokens.fontSize.SIZE_40,
  tokens.padding.SPACE_10,
  tokens.placeholder.GRAY_50,
  tokens.width.SIZE_7
);

const outputClass = compose(
  tokens.display.BLOCK,
  tokens.marginHorizontal.AUTO,
  tokens.fontSize.SIZE_70,
  tokens.lineHeight.HEIGHT_40,
  tokens.textAlign.CENTER
);

const btnClass = compose(
  ui.button,
  tokens.fontSize.SIZE_50,
  tokens.cursor.POINTER,
  tokens.margin.SPACE_10
);

export default class AboutComponent extends Component {
  state = { count: 0, sport: "" };

  view = (state) => {
    return <div class="appruninfo">
      <h1 class={ui.h1}>AppRun</h1>
      <p><Aext href="https://apprun.js.org/">AppRun</Aext> is a JavaScript library for building reliable, high-performance web applications using the <Aext href="https://elm-lang.org">Elm</Aext> inspired architecture, events, and components.</p>
      <h2 class={ui.h2}>AppRun Benefits</h2>
      <ul>
        <li>Write less code</li>
        <li>No proprietary syntax to learn</li>
        <li>Compiler/transpiler is optional</li>
        <li>State management and routing included</li>
        <li>Run side-by-side with jQuery, chartjs, D3, lit-html ...</li>
      </ul>
      <p>AppRun supports the Redux DevTools Extension. To use the devtools, install the <Aext href="https://github.com/zalmoxisus/redux-devtools-extension">Redux DevTools Extension</Aext>. You can monitor the events and states in the devtools.</p>
      
      <div class={demoWrapClass}>
        <div class={demoClass(tokens.paddingHorizontal.SPACE_60)}>
          <output class={outputClass} value={state.count} />
          <button class={btnClass} $onclick="-1">-1</button>
          <button class={btnClass} $onclick="+1">+1</button>
        </div>
        <div class={demoClass(tokens.paddingTop.SPACE_40)}>
          <input class={inputClass} value={state.sport}
            placeholder="type your favourite sport" $oninput="sportEdit" />
          {state.sport &&
            <p class={compose(tokens.marginVertical.SPACE_20)}>
              That text contains {state.sport.length} char(s)
            </p>}
        </div>
      </div>
      
    </div>
  }

  update = {
    "#AppRun": state => {
      return state;
    },
    "-1": state => {
      return { ...state, count: state.count - 1 };
    },
    "+1": state => {
      return { ...state, count: state.count + 1 };
    },
    "sportEdit": (state, evt) => {
      const sport = evt.target.value;
      return { ...state, sport };
    }
  }
}
