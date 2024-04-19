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
      <h2 className="p-2 ">Hooks only work inside of a function component</h2>
      <p className="text-justify leading-8 pt-5">
        Hooks were added to React in version 16.8. Hooks allow function
        components to have access to state and other React features. Because of
        this, class components are generally no longer needed. Although Hooks
        generally replace class components, there are no plans to remove classes
        from React.
        <p>
          With Hooks, you can extract stateful logic from a component so it can
          be tested independently and reused. Hooks allow you to reuse stateful
          logic without changing your component hierarchy. This makes it easy to
          share Hooks among many components or with the community.
        </p>
      </p>
      <p className="italic p-4">
        React Hooks cannot be put inside of if statements, inside of functions
        or inside of loops, they cannot be nested, only called at the top level
        of your function. Always called in the same order.
      </p>
      <div>
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
      <div className="p-5">
        <Link to="/useCallback">
          <button>UseCallback</button>
        </Link>
        <Link to="/useReducer">
          <button>UseReducer</button>
        </Link>
        <Link to="/useLayout">
          <button>UseLayout</button>
        </Link>
        <Link to="/useTransition">
          <button>UseTransition</button>
        </Link>
      </div>
      <div className="p-">
        <Link to="/useImperative">
          <button>UseImperative</button>
        </Link>
        <Link to="/useDeffered">
          <button>UseDeffered</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
