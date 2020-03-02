import app, { Component } from "apprun";
import BundleVersion from './version';
import { ui, Aext, Aint } from "./common-ui";

export default class AboutComponent extends Component {
  state = { page: "About" };

  view = (state) => {
    return <div class="about">
      <h1 class={ui.h1}>{state.page}</h1>
      <p>This Single Page Application combines functionality from <Aint href="#AppRun">AppRun</Aint> and <Aint href="#Classy-UI">Classy-UI</Aint>. In addition, TypeScript is used to avoid type errors and certain other errors in the code.</p>
      <p>To put together the necessary code and configuration including Webpack, Babel and TypeScript, it was very convenient to be able to build this project by extending Alexander Tarasyuk’s <Aext href="https://github.com/a-tarasyuk/webpack-typescript-babel">webpack-typescript-babel</Aext> repo.</p>
      <p>The text editor used for this demo was the wonderful <Aext href="https://www.barebones.com/products/bbedit/">BBEdit</Aext> on macOS. To get the smoothest developer experience while editing the Classy-UI properties, however, it may be a considerable advantage using an editor with TypeScript Language Server support. BBEdit doesn’t have that yet.</p>
      <p>This is a very early version of this SPA, with not that many interesting features yet.</p>
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
