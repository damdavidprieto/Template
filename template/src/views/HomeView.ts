import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../layouts/TemplateLayout';
import '../components/commons/container/Container';
import '../components/commons/container/Panel';
import '../components/commons/container/PanelColor';
import '../components/composes/Template/panels/ButtonsPanel';
import '../components/composes/Template/panels/InputsPanel';
import '../components/commons/icons/Info';
import '../components/composes/Template/panels/IconsPanel';

@customElement('app-home-view')
export class HomeView extends LitElement {
    render() {
        return html`
            <app-template-layout>
                <app-container class="column">
                    <app-panel-inputs></app-panel-inputs>
                    <app-slider-panel></app-slider-panel>
                    <app-icon-input-panel></app-icon-input-panel>
                    <app-panel-icons></app-panel-icons>
                    <app-panel-buttons></app-panel-buttons> 
                </app-container>          
            </app-template-layout>
        `;
    }
}
