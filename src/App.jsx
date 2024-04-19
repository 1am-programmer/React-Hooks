import "./App.css";
import Usestate from "./Hooks/Usestate";
import Useeffect from "./Hooks/Useeffect";
import UseRef from "./Hooks/UseRef";
import UseContext from "./Hooks/UseContext";
import { Link } from "react-router-dom";

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

      <Link to="/useState">
        <button>UseState</button>
      </Link>
      <Link to="/useEffect">
        <button>UseEffect</button>
      </Link>
      <Link to="/useRef">
        <button>UseRef</button>
      </Link>
      <Link to="/useContext">
        <button>UseContext</button>
      </Link>
    </div>
  );
}

export default App;
