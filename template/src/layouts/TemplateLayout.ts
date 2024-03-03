import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'
import '../components/commons/structures/Header';
import '../components/commons/structures/Footer';
import '../components/commons/title/Title';

@customElement('app-template-layout')
export class TemplateLayout extends LitElement {
    render() {
        return html`
            <app-header>
                <app-navigation-bar>
                    <app-title level=1>Header</app-title>
                </app-navigation-bar>
            </app-header>
            <main>
                <slot></slot>
            </main>
            <app-footer>
                <app-navigation-bar>
                    <app-title level=1>Footer</app-title>
                </app-navigation-bar>
            </app-footer>`
        ;
    }
}
