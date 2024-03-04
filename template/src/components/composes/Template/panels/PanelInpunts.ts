import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js'
import '../../../../components/commons/intput/Input';

@customElement('app-panel-inputs')
export class PanelInputs extends LitElement {
    render() {
        return html`
            <app-container>
                <app-panel title="Input Panel column">
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                </app-panel>
                <app-panel class="row" title="Input Panel row">
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                </app-panel>
            </app-container>
            <app-container class="row">
                <app-panel title="Input Panel column">
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                </app-panel>
                <app-panel title="Input Panel column">
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                </app-panel>
                <app-panel title="Button Panel column">
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                </app-panel>
                <app-panel title="Button Panel column">
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                </app-panel>
                <app-panel title="Button Panel column">
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                </app-panel>
            </app-container>
            `;
    }
}
