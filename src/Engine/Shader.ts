/**
 * #### Shader Class
 * this class makes and compiles Shader to use in games
 *
 */
class Shader {
  private __name: string;
  private _programe: WebGLProgram;

  public constructor(_name, _vertexShader: string, _fragmentShader: string) {
    this.__name = _name;
    let vertexShader = this.loadshader(_vertexShader, window.gl.VERTEX_SHADER);
    let fragmentShader = this.loadshader(
      _fragmentShader,
      window.gl.FRAGMENT_SHADER
    );

    this._programe = this.createPrograme();
  }

  private loadshader(source: string, shaderType: number): WebGLShader {
    let shader: WebGLShader = window.gl.createShader(shaderType);

    window.gl.shaderSource(shader, source);
    window.gl.compileShader(shader);
    let shaderLog = window.gl.getShaderInfoLog(shader);
    if (shaderLog) {
      throw new Error(
        "Shader Compiling Error " + shaderLog + source + ".Name: " + this.__name
      );
    }

    return shader;
  }
  private createPrograme(): WebGLProgram {
    return;
  }

  public get name(): string {
    return this.__name;
  }
}
