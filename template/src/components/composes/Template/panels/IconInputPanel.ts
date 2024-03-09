import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js'
import '../../../commons/intput/IconInput';

@customElement('app-icon-input-panel')
export class IconInputPanel extends LitElement {
    render() {
        return html`
            <app-container>
                <app-panel titlePanel="Input Panel column">
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-menu></app-icon-menu></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-lock></app-icon-lock></app-icon-input>
                </app-panel>
                <app-panel titlePanel="Input Panel">
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                </app-panel>
            </app-container>
            <app-container>
                <app-panel titlePanel="Input Panel column">
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                </app-panel>
                <app-panel titlePanel="Input Panel column">
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                </app-panel>
                <app-panel titlePanel="Button Panel column">
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                </app-panel>
                <app-panel titlePanel="Button Panel column">
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                </app-panel>
                <app-panel titlePanel="Button Panel column">
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                </app-panel>
            </app-container>
            `;
    }
}
