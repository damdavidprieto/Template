import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('app-panel-buttons')
export class ButtonsPanel extends LitElement {
    render() {
        return html`
            <app-container>
                <app-panel title="Button Panel column">
                    <app-button>Button</app-button>
                    <app-button class="info">Button</app-button>
                    <app-button class="success">Button</app-button>
                    <app-button class="warning">Button</app-button>
                    <app-button class="error">Button</app-button>
                </app-panel>
                <app-panel class="row" title="Button Panel row">
                    <app-button>Button</app-button>
                    <app-button class="info">Button</app-button>
                    <app-button class="success">Button</app-button>
                    <app-button class="warning">Button</app-button>
                    <app-button class="error">Button</app-button>
                </app-panel>
            </app-container>
            <app-container class="row">
                <app-panel title="Button Panel column">
                    <app-button>Button</app-button>
                    <app-button class="info">Button</app-button>
                    <app-button class="success">Button</app-button>
                    <app-button class="warning">Button</app-button>
                    <app-button class="error">Button</app-button>
                </app-panel>
                <app-panel title="Button Panel column">
                    <app-button>Button</app-button>
                    <app-button class="info">Button</app-button>
                    <app-button class="success">Button</app-button>
                    <app-button class="warning">Button</app-button>
                    <app-button class="error">Button</app-button>
                </app-panel>
                <app-panel title="Button Panel column">
                    <app-button>Button</app-button>
                    <app-button class="info">Button</app-button>
                    <app-button class="success">Button</app-button>
                    <app-button class="warning">Button</app-button>
                    <app-button class="error">Button</app-button>
                </app-panel>
                <app-panel title="Button Panel column">
                    <app-button>Button</app-button>
                    <app-button class="info">Button</app-button>
                    <app-button class="success">Button</app-button>
                    <app-button class="warning">Button</app-button>
                    <app-button class="error">Button</app-button>
                </app-panel>
                <app-panel title="Button Panel column">
                    <app-button>Button</app-button>
                    <app-button class="info">Button</app-button>
                    <app-button class="success">Button</app-button>
                    <app-button class="warning">Button</app-button>
                    <app-button class="error">Button</app-button>
                </app-panel>
            </app-container>
            `;
    }
}
