import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/commons/Components';

@customElement('app-login-view')
export class LoginView extends LitElement {
    render() {
        return html`
            <app-login-layout>
                <app-container class="column">
                  <app-card titleCard="Login" class="m-auto">
                    <app-container>
                      <app-home-icon title="tooltip de prueba" size="200"></app-home-icon>
                    </app-container>
                      <app-form-control placeholder="Usuario" type="text">Usuario:</app-form-control>
                      <app-form-control placeholder="Contraseña" type="text">Contraseña:</app-form-control>
                    <app-button class="success">Login</app-button>
                  </app-card>                  
                </app-container>     
            </app-login-layout>
        `;
    }
}
