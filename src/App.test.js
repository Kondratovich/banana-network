import ReactDOM from "react-dom";
import SamuraiJsApp from "./App";

it("renders learn react link", () => {
  const div = document.createElement("div");
  ReactDOM.render(<SamuraiJsApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
