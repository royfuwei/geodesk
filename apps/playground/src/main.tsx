import App from "./pages/App.tsx";
import { createRoot } from "react-dom/client";
// import { StrictMode } from "react";
// import "./index.css";
// import ReactDOM from "react-dom";

const root = document.getElementById("root");
createRoot(root!).render(
  /**
   * FIXME:
   * React StrictMode 在開發時會導致元件雙重掛載
   * 造成 WebGL context 重複附加
   * hook.js:608 deck: WebGL context already attached to device webgl-device-1
   * deck__gl.js?v=786e1129:29649 Uncaught (in promise) Error: WebGL context already attached to device webgl-device-1
   */
  // <StrictMode>
  <App />
  // </StrictMode>
);

// ReactDOM.render(<App />, document.getElementById("root"));
