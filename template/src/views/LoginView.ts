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
                        <app-input placeholder="Usuario" type="text"></app-input>
                        <app-input placeholder="Contraseña" type="text"></app-input>
                    </app-panel>
                    <app-button class="success">Login</app-button>
                  </app-card> 
                  <app-card titleCard="Recordar contraseña" class="m-auto">
                    <app-container>
                      <app-icon-preferences  size="150"></app-icon-preferences>
                    </app-container>
                    <app-panel class="w-full" titlePanel="Email">
                        <app-input placeholder="Email" type="text"></app-input>
                    </app-panel>
                    <app-button class="success">Enviar</app-button>
                  </app-card>    
                  <app-card titleCard="Actualizar contraseña" class="m-auto">
                    <app-container>
                      <app-icon-preferences  size="120"></app-icon-preferences>
                    </app-container>
                    <app-panel class="w-full" titlePanel="Contraseña">
                        <app-input placeholder="Nueva Contraseña" type="text"></app-input>
                        <app-input placeholder="Repita Contraseña" type="text"></app-input>
                    </app-panel>
                    <app-button class="success">Actualizar</app-button>
                  </app-card>  
                  <app-card titleCard="Cambiar contraseña" class="m-auto">
                  <app-container>
                      <app-icon-preferences  size="50"></app-icon-preferences>
                    </app-container>
                    <app-panel class="w-full" titlePanel="Contraseña">
                        <app-input placeholder="Contraseña" type="text"></app-input>
                        <app-input placeholder="Nueva Contraseña" type="text"></app-input>
                        <app-input placeholder="Repita Contraseña" type="text"></app-input>
                    </app-panel>
                    <app-button class="success">Actualizar</app-button>
                  </app-card>  
                </app-container>     
            </app-login-layout>
        `;
    }
}