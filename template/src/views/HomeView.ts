import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js'
import '../layouts/TemplateLayout';
import '../components/commons/container/Container';
import '../components/commons/container/Panel';
import '../components/composes/Template/panels/PanelButtons';
import '../components/composes/Template/panels/PanelInpunts';

@customElement('app-home-view')
export class HomeView extends LitElement {
    render() {
        return html`
            <app-template-layout>
                <app-panel-buttons></app-panel-buttons>
                <app-panel-inputs></app-panel-inputs>
                <my-element>
                    <h1>Vite + Lit</h1>
                </my-element>           
            </app-template-layout>
        `;
    }
}
