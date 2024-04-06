import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/commons/Components';

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
                </app-container>          
            </app-template-layout>
        `;
    }
}
