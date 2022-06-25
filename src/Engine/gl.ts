/**
 * ##### GL Utille Class
 * class for utilits for webgl
 */
export class glUtili {
  /**
   * ##### This Funciton Inits webgl
   * with all of the canves need taken care of and gl context for `Engine.ts` Class and your own code
   * @param ElementId Optional Element id
   */
  public static Init(ElementId?: string): HTMLCanvasElement {
    let canves: HTMLCanvasElement;
    if (ElementId !== undefined) {
      canves = document.getElementById(ElementId) as HTMLCanvasElement;
      if (canves === undefined) {
        throw new Error(
          "Fatale: Can not find the element id in the html body. Have you created the element on the page, this filed is opetenol, leave blank to create an element on the webpage automaticly"
        );
      }
    } else {
      canves = document.createElement("canvas") as HTMLCanvasElement;
      document.body.appendChild(canves);
    }
    window.gl = canves.getContext("webgl") as WebGLRenderingContext;
    if (window.gl === undefined) {
      throw new Error("You are using an  old browser Pleas up grade");
    }
    return canves;
  }
}
