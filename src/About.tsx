import app, { Component } from "apprun";
import { ui } from "./common-ui";

export default class AboutComponent extends Component {
  state = { page: "About" };

  view = (state) => {
    return <div class="about">
      <h1 class={ui.h1}>{state.page}</h1>
      <p>This Single Page Application combines functionality from <a href="#AppRun">AppRun</a> and <a href="#Classy-UI">Classy-UI</a>. In addition, TypeScript is used to avoid type errors and certain other errors in the code.</p>
      <p>To put together the necessary code and configuration including Webpack, Babel and TypeScript, it was very convenient to be able to build this project by extending Alexander Tarasyuk’s <a href="https://github.com/a-tarasyuk/webpack-typescript-babel" target="_blank">webpack-typescript-babel</a> repo.</p>
      <p>This is a very early version of this SPA, with not many interesting features yet.</p>
    </div>
  }

  update = {
    "#About": state => {
      return state;
    }
  }
}
