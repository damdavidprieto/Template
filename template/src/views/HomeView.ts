import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js'
import '../layouts/TemplateLayout';
import '../components/commons/container/Container';
import '../components/commons/container/Panel';

@customElement('app-home-view')
export class HomeView extends LitElement {
    render() {
        return html`
            <app-template-layout>
                <app-panel title="Button Panel">
                    <app-button>Button</app-button>
                    <app-button class="info">Button</app-button>
                    <app-button class="success">Button</app-button>
                    <app-button class="warning">Button</app-button>
                    <app-button class="error">Button</app-button>
                </app-panel>
                <my-element>
                    <h1>Vite + Lit</h1>
                </my-element> 
                <my-element>
                    <h1>Vite + Lit</h1>
                </my-element>  
                <my-element>
                    <h1>Vite + Lit</h1>
                </my-element>           
            </app-template-layout>
        `;
    }
}
