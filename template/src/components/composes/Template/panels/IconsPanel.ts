import { LitElement, css, html } from 'lit';
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
    static styles = [
        css`
            :host {
                display: flex;
                margin: auto;
                width: max-content;
            }
        `
    ];
    handlerPanelColorChange(e: CustomEvent){
        console.log(e.detail);
        const fillColor = e.detail;
        const iconPanel = this.shadowRoot?.querySelector("app-panel-color")?.childNodes;
        if (iconPanel) {
            iconPanel.forEach((icon) => {
                if(icon.nodeName != "#text"){
                    (icon as Element).setAttribute('fillColor', fillColor);
                }
            });
        }
    }
    render() {
        return html`
        <app-container class="column">
            <app-panel-color @panel-color-changed="${this.handlerPanelColorChange}" titlePanel="Icon Panel">
                <app-icon-info></app-icon-info>
                <app-icon-menu></app-icon-menu>
                <app-icon-lock></app-icon-lock>
                <app-icon-open-lock></app-icon-open-lock>
                <app-icon-pluss></app-icon-pluss>
                <app-icon-synchroniz></app-icon-synchroniz>
                <app-icon-file></app-icon-file>
                <app-icon-search></app-icon-search>
            </app-panel-color>
        </app-container>
        `;
    }
}
