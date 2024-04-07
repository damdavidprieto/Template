import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import LoginStore from '../../../stores/LoginStore';

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

    @property({ type: Number }) 
    state = 0;

    connectedCallback(): void {
        super.connectedCallback();
        LoginStore.subscribe((store) => {
            this.state = store.state;
        });
    }

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
        switch (this.state.toString()) {
            case "0":
                return this._renderCardLoginColumn();
            case "1":
                return this._renderCardLoginRow();
            case "2":
                return this._renderCardLoginRememberPasswordColumn();
            case "3":
                return this._renderCardLoginRememberPasswordRow();
            case "4":
                return this._renderCardLoginUpdatePasswordColumn();
            case "5":
                return this._renderCardLoginUpdatePasswordRow();
            case "6":
                return this._renderCardLoginChangePasswordColumn();
            case "7":
                return this._renderCardLoginChangePasswordRow();
            default:
                return html``;
        }
    }
}
