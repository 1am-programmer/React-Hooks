import { useContext } from "react";
import { ThemeContext } from "../Hooks/UseContext";

const FunctionContext = () => {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "black" : "white",
    color: darkTheme ? "white" : "black",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <div>
      <div
        style={themeStyles}
        className="flex flex-col items-center justify-center"
      >
        Function Theme
      </div>
    </div>
  );
};

export default FunctionContext;
