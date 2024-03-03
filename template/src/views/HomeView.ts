import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js'
import '../layouts/TemplateLayout';
import '../components/commons/container/Container';
import '../components/commons/container/Panel';
import '../components/composes/Template/panels/PanelButtons';

@customElement('app-home-view')
export class HomeView extends LitElement {
    render() {
        return html`
            <app-template-layout>
                <app-panel-buttons></app-panel-buttons>
                <my-element>
                    <h1>Vite + Lit</h1>
                </my-element>           
            </app-template-layout>
        `;
    }
}
