import app, { Component } from "apprun";
import BundleVersion from './version';
import { ui, Aext } from "./common-ui";

export default class AboutComponent extends Component {
  state = { page: "About" };

  view = (state) => {
    return <div class="about">
      <h1 class={ui.h1}>{state.page}</h1>
      <p>This Single Page Application combines functionality from <a href="#AppRun">AppRun</a> and <a href="#Classy-UI">Classy-UI</a>. In addition, TypeScript is used to avoid type errors and certain other errors in the code.</p>
      <p>To put together the necessary code and configuration including Webpack, Babel and TypeScript, it was very convenient to be able to build this project by extending Alexander Tarasyuk’s <Aext href="https://github.com/a-tarasyuk/webpack-typescript-babel">webpack-typescript-babel</Aext> repo.</p>
      <p>This is a very early version of this SPA, with not many interesting features yet.</p>
      <p>The source code for this project can be found at <Aext href="https://github.com/jkleiser/apprun-classyui-spa">github.com</Aext>.</p>
      <p>This app. was built: {BundleVersion}</p>
    </div>
  }

  update = {
    "#About": state => {
      return state;
    }
  }
}
