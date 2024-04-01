import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@commons/structures/Header';
import '@commons/structures/Footer';
import '@commons/title/Title';
import '@commons/navigationBar/NavigationBar';
import '@commons/buttons/Button';
import '@commons/structures/Main';
import '@commons/label/Label';
import '@commons/intput/Input';
import '@commons/intput/IconInput';
import '@commons/icons/Info';
import '@commons/drawer/Drawer';

@customElement('app-login-layout')
export class LoginLayout extends LitElement {
    setColor(e:CustomEvent){
        //console.log(e.detail);
        const iconInfo = this.shadowRoot?.querySelector("app-icon-info")as Element;
        iconInfo.setAttribute('fillColor', e.detail);
    }

    render() {
        return html`
            <app-header>
                <!-- <app-drawer>

                </app-drawer> -->
                <app-navigation-bar>
                    <app-title level=1>Login template</app-title>
                    <app-container class="row p-0">
                        <app-icon-info class="m-0"></app-icon-info>
                        <app-label class="bold">Selecciona el color:</app-label>
                        <app-input @color-changed="${this.setColor}" type="color"></app-input>
                    </app-container>
                </app-navigation-bar>
            </app-header>
            <app-main>
                <slot></slot>
            </app-main>`
        ;
    }
}
