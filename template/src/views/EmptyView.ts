import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../layouts/TemplateLayout';
import '../components/commons/container/Container';
import '../components/commons/container/Panel';
import '../components/commons/container/PanelColor';
import '../components/composes/Template/panels/ButtonsPanel';
import '../components/composes/Template/panels/InputsPanel';
import '../components/commons/icons/Info';
import '../components/composes/Template/panels/IconsPanel';
import '../components/commons/cards/Card';

@customElement('app-empty-view')
export class EmptyView extends LitElement {
    render() {
        return html`
            <app-template-layout>
                  <app-card titleCard="Login" class="m-auto">
                    <app-panel class="w-auto" titlePanel="Usuario">
                        <app-input placeholder="Usuario" type="text"></app-input>
                    </app-panel>
                    <app-panel class="w-auto" titlePanel="Contraseña">
                        <app-input placeholder="Contraseña" type="text"></app-input>
                    </app-panel>
                    <app-button class="success">Login</app-button>
                  </app-card>        
            </app-template-layout>
        `;
    }
}
