import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../commons/intput/Input';

@customElement('app-panel-inputs')
export class InputsPanel extends LitElement {
    render() {
        return html`
            <app-container class="center">
                <app-panel titlePanel="Input Panel">
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                </app-panel>
                <app-panel titlePanel="Input Panel">
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                </app-panel>
            </app-container>
            <app-container class="center">
                <app-panel titlePanel="Input Panel">
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                </app-panel>
                <app-panel titlePanel="Input Panel">
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                </app-panel>
                <app-panel titlePanel="Button Panel">
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                </app-panel>
                <app-panel titlePanel="Button Panel">
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                </app-panel>
                <app-panel titlePanel="Button Panel">
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
