import { LitElement } from 'lit-element';

export class CssHandler extends LitElement {
    private static root: HTMLElement = document.documentElement;
    static setVariable(name: string, value: string) {
      this.root.style.setProperty(`--${name}`, value);
    }
    static getVariable(name: string): string | null {
      return getComputedStyle(this.root).getPropertyValue(`--${name}`).trim() || null;
    }
}
