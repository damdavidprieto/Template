import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js'
import '../../../commons/intput/IconInput';

@customElement('app-icon-input-panel')
export class IconInputPanel extends LitElement {
    render() {
        return html`
            <app-container>
                <app-panel title="Input Panel column">
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                </app-panel>
                <app-panel class="row" title="Input Panel row">
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                </app-panel>
            </app-container>
            <app-container class="row">
                <app-panel title="Input Panel column">
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                </app-panel>
                <app-panel title="Input Panel column">
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                </app-panel>
                <app-panel title="Button Panel column">
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                </app-panel>
                <app-panel title="Button Panel column">
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                </app-panel>
                <app-panel title="Button Panel column">
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                </app-panel>
            </app-container>
            `;
    }
}
