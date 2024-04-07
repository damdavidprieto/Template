import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/commons/Components';

@customElement('app-login-view')
export class LoginView extends LitElement {
    render() {
        return html`
            <app-login-layout>
                <app-container class="column">
                  <app-card titleCard="Credenciales" class="m-auto">
                    <app-container>
                      <app-icon-preferences title="tooltip de prueba" size="200"></app-icon-preferences>
                    </app-container>
                    <app-panel class="w-full" titlePanel="Usuario">
                        <app-form-control placeholder="Usuario" type="text">Usuario:</app-form-control>
                        <app-form-control placeholder="Contraseña" type="text">Contraseña:</app-form-control>
                    </app-panel>
                    <app-button class="success">Login</app-button>
                  </app-card>                  
                </app-container>     
            </app-login-layout>
        `;
    }
}
