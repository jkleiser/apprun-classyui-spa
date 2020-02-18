import app, { Component } from "apprun";
import { ui } from "./common-ui";

export default class AboutComponent extends Component {
  state = { page: "Classy-UI" };

  view = (state) => {
    return <div class="classyuiinfo">
      <h1 class={ui.h1}>{state.page}</h1>
      <p><a href="https://classy-ui.io" target="_blank">Classy-UI</a> is an atomic design system inspired by the wonderful <a href="https://tailwindcss.com" target="_blank">Tailwindcss</a>. Tailwindcss is a classnames abstraction over CSS properties that gives you a consistent set of utilities to design your application. This abstraction does not only make your design consistent, but in combination with Classy-UI it also allows other benefits not possible when defining your design with CSS properties.</p>
      <p>Classy-UI is a <a href="https://babeljs.io" target="_blank">Babel</a>-plugin.</p>
    </div>
  }

  update = {
    "#Classy-UI": state => {
      return state;
    }
  }
}
