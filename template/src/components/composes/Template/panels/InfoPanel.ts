import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@commons/forms/FormInfo';
import { classStyles } from '../../../../styles/ClassStyles';

@customElement('app-info-panel')
export class InfoPanel extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                margin: auto;
                width: max-content;
            }
        `     ,
        classStyles
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
            <app-panel-color class="f column" @panel-color-changed="${this.handlerPanelColorChange}" titlePanel="Icon Panel">
                <app-form-info infoLabel="" class="bold">FORM INFO</app-form-info>
                <app-form-info infoLabel="TEST" class="bold">FORM INFO</app-form-info>
                <app-form-info infoLabel="TEST" class="bold">FORM INFO</app-form-info>
                <app-form-info infoLabel="TEST" class="bold">FORM INFO</app-form-info>
            </app-panel-color>`;
    }
}
