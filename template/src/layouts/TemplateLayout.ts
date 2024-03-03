import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'
import '../components/commons/structures/Header';
import '../components/commons/structures/Footer';
import '../components/commons/title/Title';

@customElement('app-template-layout')
export class TemplateLayout extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];
    render() {
        return html`
            <app-header>
                <app-title>Header</app-title>
            </app-header>
            <main>
                <slot></slot>
            </main>
            <app-footer>
                <app-title>Footer</app-title>
            </app-footer>`
            ;
    }
}
