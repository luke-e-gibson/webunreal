/**
 * #### Shader Class
 * this class makes and compiles Shader to use in games
 *
 */
export default class Shader {
  private __name: string;
  private _program: WebGLProgram;

  public constructor(_name, _vertexShader: string, _fragmentShader: string) {
    this.__name = _name;
    let vertexShader = this.loadshader(_vertexShader, window.gl.VERTEX_SHADER);
    let fragmentShader = this.loadshader(
      _fragmentShader,
      window.gl.FRAGMENT_SHADER
    );

    this.createPrograme(vertexShader, fragmentShader);
  }

  private loadshader(source: string, shaderType: number): WebGLShader {
    let shader: WebGLShader = window.gl.createShader(shaderType);

    window.gl.shaderSource(shader, source);
    window.gl.compileShader(shader);
    let shaderLog = window.gl.getShaderInfoLog(shader);
    if (shaderLog) {
      console.log("Aborting....");
      throw new Error(
        "Shader Compiling Error " + shaderLog + source + ".Name: " + this.__name
      );
    }

    return shader;
  }
  private createPrograme(vertexShader, fragmentShader): void {
    this._program = window.gl.createProgram();

    window.gl.attachShader(this._program, vertexShader);
    window.gl.attachShader(this._program, fragmentShader);

    window.gl.linkProgram(this._program);

    let error = window.gl.getProgramInfoLog(this._program);
    if (error) {
      console.log("Aborting....");
      throw new Error(
        `Error linking Program. For Shader ${this.__name} Error: ${error}.`
      );
    }
  }

  public get name(): string {
    return this.__name;
  }
}
