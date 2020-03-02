import app, { Component } from "apprun";
import { ui, Aext } from "./common-ui";
import { compose, tokens } from "classy-ui";

const counterClass = compose(
  tokens.borderStyle.SOLID,
  tokens.borderColor.GRAY_400,
  tokens.borderWidth.WIDTH_1,
  tokens.padding.SPACING_2,
  tokens.textAlign.CENTER,
  tokens.width.SPACING_40
);

const outputClass = compose(
  tokens.display.BLOCK,
  tokens.marginLeft.AUTO,
  tokens.marginRight.AUTO,
  tokens.fontSize.EXTRA_LARGE_3,
  tokens.lineHeight.RELAXED,
  tokens.textAlign.CENTER,
  tokens.width.SPACING_32
);

const btnClass = compose(
  ui.button,
  tokens.fontSize.EXTRA_LARGE,
  tokens.cursor.POINTER,
  tokens.margin.SPACING_1
);

export default class AboutComponent extends Component {
  state = { count: 0 };

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
      <div class={counterClass}>
        <output class={outputClass} value={state.count} />
        <button class={btnClass} $onclick="-1">-1</button>
        <button class={btnClass} $onclick="+1">+1</button>
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
    }
  }
}
