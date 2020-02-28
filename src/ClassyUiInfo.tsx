import app, { Component } from "apprun";
import { ui, Aext } from "./common-ui";

export default class AboutComponent extends Component {
  state = { page: "Classy-UI" };

  view = (state) => {
    return <div class="classyuiinfo">
      <h1 class={ui.h1}>{state.page}</h1>
      <p><Aext href="https://classy-ui.io">Classy-UI</Aext> is CSS properties abstracted to design tokens. This abstraction does not only make your design consistent, but also discoverable and documented at your fingertips in the IDE, if your IDE has TypeScript Language Server support.</p>
      <p>Classy-UI is a <Aext href="https://babeljs.io">Babel</Aext>-plugin.</p>
      <p>Classy-UI was originally inspired by <Aext href="https://tailwindcss.com">Tailwindcss</Aext>.</p>
    </div>
  }

  update = {
    "#Classy-UI": state => {
      return state;
    }
  }
}
