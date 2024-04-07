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

    _renderCardLoginColumn(){
        return html`
          <app-card titleCard="Login" class="m-auto">
            <app-container>
              <app-home-icon title="tooltip de prueba" size="200"></app-home-icon>
            </app-container>
            <app-form>
              <app-form-row>
                <app-form-control class="bold" placeholder="Usuario" type="text">Usuario:</app-form-control>
                <app-form-control class="bold" placeholder="Contraseña" type="password">Contraseña:</app-form-control>
                <app-form-control placeholder="Contraseña" type="checkbox">Recordarme</app-form-control>
                <app-hyperlink>Recordar contraseña</app-hyperlink>
              </app-form-row>
              <app-button class="success bold">Login</app-button>
            </app-form>
          </app-card> 
        `;
    }

    _renderCardLoginRow(){
        return html`
          <app-card titleCard="Login" class="m-auto row">
            <app-container>
              <app-home-icon title="tooltip de prueba" size="200"></app-home-icon>
            </app-container>
            <app-form>
              <app-form-row>
                <app-form-control class="bold" placeholder="Usuario" type="text">Usuario:</app-form-control>
                <app-form-control class="bold" placeholder="Contraseña" type="password">Contraseña:</app-form-control>
                <app-form-control placeholder="Contraseña" type="checkbox">Recordarme</app-form-control>
                <app-hyperlink>Recordar contraseña</app-hyperlink>
              </app-form-row>
              <app-button class="success bold">Login</app-button>
            </app-form>
          </app-card> 
        `;
    }

    _renderCardLoginRememberPasswordColumn(){
        return html`
          <app-card titleCard="Recordar Contraseña" class="m-auto">
            <app-container>
              <app-home-icon title="tooltip de prueba" size="200"></app-home-icon>
            </app-container>
            <app-form>
              <app-form-row>
                <app-form-control class="bold" placeholder="Email" type="text">Introduzca el Email:</app-form-control>
                <app-hyperlink>Volver al login</app-hyperlink>
              </app-form-row>
              <app-button class="success bold">Recordar</app-button>
            </app-form>
          </app-card> 
        `;
    }

    _renderCardLoginRememberPasswordRow(){
        return html`
          <app-card titleCard="Recordar Contraseña" class="m-auto row">
            <app-container>
              <app-home-icon title="tooltip de prueba" size="200"></app-home-icon>
            </app-container>
            <app-form>
              <app-form-row>
                <app-form-control class="bold" placeholder="Email" type="text">Introduzca el Email:</app-form-control>
                <app-hyperlink>Volver al login</app-hyperlink>
              </app-form-row>
              <app-button class="success bold">Recordar</app-button>
            </app-form>
          </app-card> 
        `;
    }

    _renderCardLoginUpdatePasswordColumn(){
        return html`
          <app-card titleCard="Actualizar contraseña" class="m-auto">
            <app-container>
              <app-home-icon title="tooltip de prueba" size="200"></app-home-icon>
            </app-container>
            <app-form>
              <app-form-row>
                <app-form-control class="bold" placeholder="Nueva contraseña" type="password">Nueva contraseña:</app-form-control>
                <app-form-control class="bold" placeholder="Repita contraseña" type="password">Repita contraseña:</app-form-control>
              </app-form-row>
              <app-button class="success bold">Actualizar</app-button>
            </app-form>
          </app-card> 
        `;
    }

    _renderCardLoginUpdatePasswordRow(){
        return html`
          <app-card titleCard="Actualizar contraseña" class="m-auto row">
            <app-container>
              <app-home-icon title="tooltip de prueba" size="200"></app-home-icon>
            </app-container>
            <app-form>
              <app-form-row>
                <app-form-control class="bold" placeholder="Nueva contraseña" type="password">Nueva contraseña:</app-form-control>
                <app-form-control class="bold" placeholder="Repita contraseña" type="password">Repita contraseña:</app-form-control>
              </app-form-row>
              <app-button class="success bold">Actualizar</app-button>
            </app-form>
          </app-card> 
        `;
    }

    _renderCardLoginChangePasswordColumn(){
        return html`
          <app-card titleCard="Cambiar Contraseña" class="m-auto">
            <app-container>
              <app-home-icon title="tooltip de prueba" size="200"></app-home-icon>
            </app-container>
            <app-form>
              <app-form-row>
                <app-form-control class="bold" placeholder="Contrseña actual" type="password">Contrseña actual:</app-form-control>
                <app-form-control class="bold" placeholder="Nueva contraseña" type="password">Nueva contraseña:</app-form-control>
                <app-form-control class="bold" placeholder="Repita contraseña" type="password">Repita contraseña:</app-form-control>
              </app-form-row>
              <app-button class="success bold">Cambiar</app-button>
            </app-form>
          </app-card> 
        `;
    }
    _renderCardLoginChangePasswordRow(){
        return html`
          <app-card titleCard="Cambiar Contraseña" class="m-auto row">
            <app-container>
              <app-home-icon title="tooltip de prueba" size="200"></app-home-icon>
            </app-container>
            <app-form>
              <app-form-row>
                <app-form-control class="bold" placeholder="Contrseña actual" type="password">Contrseña actual:</app-form-control>
                <app-form-control class="bold" placeholder="Nueva contraseña" type="password">Nueva contraseña:</app-form-control>
                <app-form-control class="bold" placeholder="Repita contraseña" type="password">Repita contraseña:</app-form-control>
              </app-form-row>
              <app-button class="success bold">Cambiar</app-button>
            </app-form>
          </app-card> 
        `;
    }

    render() {
        return html`
                <app-container class="f column">
                  ${this._renderCardLoginColumn()} 
                  ${this._renderCardLoginRow()}               
                  ${this._renderCardLoginRememberPasswordColumn()} 
                  ${this._renderCardLoginRememberPasswordRow()}
                  ${this._renderCardLoginUpdatePasswordColumn()}
                  ${this._renderCardLoginUpdatePasswordRow()} 
                  ${this._renderCardLoginChangePasswordColumn()}
                  ${this._renderCardLoginChangePasswordRow()}               
                </app-container> 
            `;
    }
}
