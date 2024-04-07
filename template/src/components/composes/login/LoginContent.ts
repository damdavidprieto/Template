import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('app-login-content')
export class LoginContent extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                height: -webkit-fill-available;
                width: -webkit-fill-available;
            }
        `
    ];

    render() {
        return html`
                <app-container>
                  <app-card titleCard="Login" class="m-auto">
                    <app-container>
                      <app-home-icon title="tooltip de prueba" size="200"></app-home-icon>
                    </app-container>
                    <app-form>
                      <app-form-row>
                        <app-form-control class="bold" placeholder="Usuario" type="text">Usuario:</app-form-control>
                        <app-form-control class="bold" placeholder="Contraseña" type="password">Contraseña:</app-form-control>
                        <app-form-control placeholder="Contraseña" type="checkbox">Recordarme</app-form-control>
                      </app-form-row>
                      <app-button class="success bold">Login</app-button>
                    </app-form>
                  </app-card>                  
                </app-container> 
            `;
    }
}
