import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js'
import '../../../commons/intput/IconInput';

@customElement('app-icon-input-panel')
export class IconInputPanel extends LitElement {
    render() {
        return html`
            <app-container class="center">
                <app-panel titlePanel="Input Panel">
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                </app-panel>
                <app-panel titlePanel="Input Panel">
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                </app-panel>
                <app-panel titlePanel="Button Panel">
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                </app-panel>
                <app-panel titlePanel="Button Panel">
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                </app-panel>
                <app-panel titlePanel="Button Panel">
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                </app-panel>
            </app-container>
            `;
    }
}
