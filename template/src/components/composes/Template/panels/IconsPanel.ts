import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js'
import '../../../commons/intput/Input';
import '../../../commons/icons/Menu';
import '../../../commons/icons/Info';

@customElement('app-panel-icons')
export class IconsPanel extends LitElement {
    render() {
        return html`
            <app-container>
                <app-panel title="Input Panel column">
                    <app-icon-info></app-icon-info>
                    <app-icon-menu></app-icon-menu>
                </app-panel>
                <app-panel class="row" title="Input Panel row">
                    <app-icon-info></app-icon-info>
                    <app-icon-menu></app-icon-menu>
                </app-panel>
            </app-container>
            <app-container class="row">
                <app-panel title="Icon Panel column">
                    <app-icon-info></app-icon-info>
                    <app-icon-menu></app-icon-menu>
                </app-panel>
                <app-panel title="Icon Panel column">
                    <app-icon-info></app-icon-info>
                    <app-icon-menu></app-icon-menu>
                </app-panel>
                <app-panel title="Icon Panel column">
                    <app-icon-info></app-icon-info>
                    <app-icon-menu></app-icon-menu>
                </app-panel>
                <app-panel title="Icon Panel column">
                    <app-icon-info></app-icon-info>
                    <app-icon-menu></app-icon-menu>    
                </app-panel>
                <app-panel title="Icon Panel column">
                    <app-icon-info></app-icon-info>
                    <app-icon-menu></app-icon-menu>    
                </app-panel>
            </app-container>
            `;
    }
}
