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
import '../components/commons/cards/Card';
import '../components/composes/Template/panels/InfoPanel';

@customElement('app-home-view')
export class HomeView extends LitElement {
    render() {
        return html`
            <app-template-layout>
                <app-container class="column">
                    <app-info-panel></app-info-panel>
                    <app-card titleCard="Paneles de inputs" class="m-auto">
                        <app-panel-icons></app-panel-icons>
                        <app-panel-icons></app-panel-icons>
                        <app-panel-icons></app-panel-icons>
                    </app-card>
                    <app-card titleCard="Paneles de inputs" class="m-auto">
                        <app-info-panel></app-info-panel>
                        <app-info-panel></app-info-panel>
                        <app-info-panel></app-info-panel>
                    </app-card>
<!--                     <app-card titleCard="Paneles de inputs" class="m-auto">
                        <app-panel-inputs></app-panel-inputs>
                    </app-card>   
                    <app-panel-inputs></app-panel-inputs>
                    <app-card titleCard="Paneles de inputs" class="m-auto">
                        <app-panel-icons></app-panel-icons>
                    </app-card>   
                    <app-panel-icons></app-panel-icons>
                    <app-card titleCard="Paneles de inputs" class="m-auto">
                        <app-panel-buttons></app-panel-buttons>
                    </app-card>   
                    <app-panel-buttons></app-panel-buttons>  -->
                </app-container>          
            </app-template-layout>
        `;
    }
}
