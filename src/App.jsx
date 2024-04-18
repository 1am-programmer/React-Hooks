import "./App.css";
import Usestate from "./Hooks/Usestate";
import Useeffect from "./Hooks/Useeffect";
import UseRef from "./Hooks/UseRef";

function App() {
  return (
    <div>
      <h1>React Hooks</h1>
      <h2>Hooks only work inside of a function component</h2>
      <p>
        React Hooks cannot be put inside of if statements, inside of functions
        or inside of loops, they cannot be nested, only called at the top level
        of your function. Always called in the same order.
      </p>
      <Usestate />
      <Useeffect />
      <UseRef />
    </div>
  );
}

export default App;
