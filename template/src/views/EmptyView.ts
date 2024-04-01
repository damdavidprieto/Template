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
import '../layouts/LoginLayout';

@customElement('app-empty-view')
export class EmptyView extends LitElement {
    render() {
        return html`
            <app-login-layout>
                <app-container class="column">
                  <app-card titleCard="Login" class="m-auto">
                    <app-panel class="w-full" titlePanel="Usuario">
                        <app-input placeholder="Usuario" type="text"></app-input>
                    </app-panel>
                    <app-panel class="w-full" titlePanel="Contraseña">
                        <app-input placeholder="Contraseña" type="text"></app-input>
                    </app-panel>
                    <app-button class="success">Login</app-button>
                  </app-card> 
                  <app-card titleCard="Recordar contraseña" class="m-auto">
                    <app-panel class="w-full" titlePanel="Email">
                        <app-input placeholder="Email" type="text"></app-input>
                    </app-panel>
                    <app-button class="success">Enviar</app-button>
                  </app-card>    
                  <app-card titleCard="Actualizar contraseña" class="m-auto">
                    <app-panel class="w-full" titlePanel="Contraseña">
                        <app-input placeholder="Contraseña" type="text"></app-input>
                        <app-input placeholder="Repita Contraseña" type="text"></app-input>
                    </app-panel>
                    <app-button class="success">Actualizar</app-button>
                  </app-card>  
                </app-container>     
            </app-login-layout>
        `;
    }
}
