import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@commons/forms/FormInfo';
import { classStyles } from '../../../../styles/ClassStyles';

@customElement('app-info-panel')
export class InfoPanel extends LitElement {
    static styles = [
        css`
            :host {
                margin: auto;
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
            <app-panel-color class="f column m-auto" @panel-color-changed="${this.handlerPanelColorChange}" titlePanel="Icon Panel">
                <app-form-info infoLabel="" class="bold">FORM INFO</app-form-info>
                <app-form-info infoLabel="TEST" class="bold">FORM INFO</app-form-info>
                <app-form-info infoLabel="TEST" class="bold">FORM INFO</app-form-info>
                <app-form-info infoLabel="TEST" class="bold">FORM INFO</app-form-info>
            </app-panel-color>
            <app-panel-color class="f row" @panel-color-changed="${this.handlerPanelColorChange}" titlePanel="Icon Panel">
                <app-form-info infoLabel="" class="bold">FORM INFO</app-form-info>
                <app-form-info infoLabel="TEST" class="bold">FORM INFO</app-form-info>
                <app-form-info infoLabel="TEST" class="bold">FORM INFO</app-form-info>
                <app-form-info infoLabel="TEST" class="bold">FORM INFO</app-form-info>
                <app-form-info infoLabel="" class="bold">FORM INFO</app-form-info>
                <app-form-info infoLabel="TEST" class="bold">FORM INFO</app-form-info>
                <app-form-info infoLabel="TEST" class="bold">FORM INFO</app-form-info>
                <app-form-info infoLabel="TEST" class="bold">FORM INFO</app-form-info>
            </app-panel-color>
            `;
    }
}
