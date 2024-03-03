import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js'
import '../layouts/TemplateLayout';
import '../components/commons/container/Container';

@customElement('app-home-view')
export class HomeView extends LitElement {
    render() {
        return html`
            <app-template-layout>
                <app-container>
                    <my-element>
                        <h1>Vite + Lit</h1>
                    </my-element> 
                    <my-element>
                        <h1>Vite + Lit</h1>
                    </my-element>  
                    <my-element>
                        <h1>Vite + Lit</h1>
                    </my-element>  
                </app-container>           
            </app-template-layout>
        `;
    }
}
