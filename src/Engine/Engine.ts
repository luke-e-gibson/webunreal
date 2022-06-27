import glUtili from "./gl";
import Shader from "./Shader";
import VertexShaderText from "./Vertex.glsl";
import FragmentShaderText from "./Fragment.glsl";
let gl = window.gl as WebGLRenderingContext;
/**
 * The Main Engine Class For WEBUNREAL
 */
export class Engine {
  private _count: number = 0;
  private _canves: HTMLCanvasElement;
  private _shader: Shader;

  public constructor() {
    document.body.innerHTML = "";
  }

  public start() {
    this._canves = glUtili.Init();

    window.gl.clearColor(1, 0, 0, 1);
    console.log(VertexShaderText);
    this.loop();
  }
  public resize() {
    if (this._canves !== undefined) {
      this._canves.width = window.innerWidth;
      this._canves.height = window.innerHeight;
    }
  }

  private loop() {
    this._count++;

    window.gl.clear(window.gl.COLOR_BUFFER_BIT || window.gl.DEPTH_BUFFER_BIT);

    requestAnimationFrame(this.loop.bind(this));
  }
  private loadShader(): void {
    this._shader = new Shader("MyShader", VertexShaderText, FragmentShaderText);
  }
}
