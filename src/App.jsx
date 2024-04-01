import "./App.css";
import Card from "./Card";
import "./style.scss";
import { createRoot } from "react-dom/client";
function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <Card />
    </div>
  );
}
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);

export default App;
