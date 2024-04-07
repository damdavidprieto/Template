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
        const options = ["Option 1", "Option 2", "Option 3"] as string[]; 
        return html`
            <app-header>
                <app-navigation-bar>
                    <app-title level=1>Login template</app-title>
                    <app-container class="row p-1 a-center end">
                        <app-select .options="${options}"></app-select>
                    </app-container>
                </app-navigation-bar>
            </app-header>
            <main>
                <slot></slot>
            </main>`
        ;
    }
}
