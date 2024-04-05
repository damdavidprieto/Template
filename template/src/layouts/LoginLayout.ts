import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@commons/structures/Header';
import '@commons/structures/Footer';
import '@commons/title/Title';
import '@commons/navigationBar/NavigationBar';
import '@commons/buttons/Button';
import '@commons/label/Label';
import '@commons/intput/Input';
import '@commons/intput/IconInput';
import '@commons/icons/Info';
import '@commons/drawer/Drawer';
import '../components/commons/label/CurrentDateTime';
import '../components/commons/forms/FormInfo';

@customElement('app-login-layout')
export class LoginLayout extends LitElement {
    static styles = [
        css`
            :host {
                display: grid;
                grid-template-rows: 14% 1fr;
            }
            main{
                overflow-y:scroll;
                height: 83vh;
                padding: 15px
            }
            @media (max-width: 366px) {
                :host {
                    grid-template-rows: fit-content(10%) 1fr;
                }
                main{
                    overflow-y:scroll;
                    height: 77vh;
                    padding: 15px
                }
            }
            @media (min-width: 1280px) {
                :host {
                    grid-template-rows: fit-content(5%) 1fr;
                }
                main{
                    overflow-y:scroll;
                    height: 90vh;
                    padding: 15px
                }
            }
        `
    ];
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
                    <app-container class="row p-1 a-center">
                        <app-icon-info class="m-0"></app-icon-info>
                        <app-label class="bold">Selecciona el color:</app-label>
                        <app-input @color-changed="${this.setColor}" type="color"></app-input>
                        <current-date-time class="bold f row"></current-date-time>
                        <app-form-info infoLabel="TEST" class="bold">FORM INFO</app-form-info>
                    </app-container>
                </app-navigation-bar>
            </app-header>
            <main>
                <slot></slot>
            </main>`
        ;
    }
}
