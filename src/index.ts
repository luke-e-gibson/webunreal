declare global {
  interface Window {
    gl?: WebGLRenderingContext;
  }
}
import { Engine } from "./engine/Engine";

var engine: Engine;

window.onload = () => {
  document.body.innerHTML += "Loading";

  engine = new Engine();
  engine.start();
  engine.resize();
};

window.onresize = () => {
  engine.resize();
};
