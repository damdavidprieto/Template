import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js'
import '../../../commons/intput/Input';
import '../../../commons/icons/Menu';
import '../../../commons/icons/Info';
import '../../../commons/icons/Lock';
import '../../../commons/icons/OpenLock';
import '../../../commons/icons/Pluss';
import '../../../commons/icons/Synchroniz';
import '../../../commons/icons/File';
import '../../../commons/icons/Search';

@customElement('app-panel-icons')
export class IconsPanel extends LitElement {
    render() {
        return html`
            <app-container>
                <app-panel class="row" title="Icon Panel row">
                    <app-input class="w-auto" type="color"></app-input>
                    <app-icon-info></app-icon-info>
                    <app-icon-menu></app-icon-menu>
                    <app-icon-lock></app-icon-lock>
                    <app-icon-open-lock></app-icon-open-lock>
                    <app-icon-pluss></app-icon-pluss>
                    <app-icon-synchroniz></app-icon-synchroniz>
                    <app-icon-file></app-icon-file>
                    <app-icon-search></app-icon-search>
                </app-panel>
            </app-container>
            <app-container class="row">
                <app-panel title="Icon Panel column">
                    <app-icon-info></app-icon-info>
                    <app-icon-menu></app-icon-menu>
                    <app-icon-lock></app-icon-lock>
                    <app-icon-open-lock></app-icon-open-lock>
                    <app-icon-pluss></app-icon-pluss>
                    <app-icon-synchroniz></app-icon-synchroniz>
                    <app-icon-file></app-icon-file>
                    <app-icon-search></app-icon-search>
                </app-panel>
                <app-panel title="Icon Panel column">
                    <app-icon-info></app-icon-info>
                    <app-icon-menu></app-icon-menu>
                    <app-icon-lock></app-icon-lock>
                    <app-icon-open-lock></app-icon-open-lock>
                    <app-icon-pluss></app-icon-pluss>
                    <app-icon-synchroniz></app-icon-synchroniz>
                    <app-icon-file></app-icon-file>
                    <app-icon-search></app-icon-search>
                </app-panel>
                <app-panel title="Icon Panel column">
                    <app-icon-info></app-icon-info>
                    <app-icon-menu></app-icon-menu>
                    <app-icon-lock></app-icon-lock>
                    <app-icon-open-lock></app-icon-open-lock>
                    <app-icon-pluss></app-icon-pluss>
                    <app-icon-synchroniz></app-icon-synchroniz>
                    <app-icon-file></app-icon-file>
                    <app-icon-search></app-icon-search>
                </app-panel>
                <app-panel title="Icon Panel column">
                    <app-icon-info></app-icon-info>
                    <app-icon-menu></app-icon-menu>  
                    <app-icon-lock></app-icon-lock>  
                    <app-icon-open-lock></app-icon-open-lock>
                    <app-icon-pluss></app-icon-pluss>
                    <app-icon-synchroniz></app-icon-synchroniz>
                    <app-icon-file></app-icon-file>
                    <app-icon-search></app-icon-search>
                </app-panel>
                <app-panel title="Icon Panel column">
                    <app-icon-info></app-icon-info>
                    <app-icon-menu></app-icon-menu>  
                    <app-icon-lock></app-icon-lock>  
                    <app-icon-open-lock></app-icon-open-lock>
                    <app-icon-pluss></app-icon-pluss>
                    <app-icon-synchroniz></app-icon-synchroniz>
                    <app-icon-file></app-icon-file>
                    <app-icon-search></app-icon-search>
                </app-panel>
            </app-container>
            `;
    }
}
