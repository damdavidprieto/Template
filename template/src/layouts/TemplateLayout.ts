import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@commons/Components';
import '@commons/structures/Header';
import '@commons/structures/Footer';
import '@commons/title/Title';
import '@commons/navigationBar/NavigationBar';
import '@commons/buttons/Button';
import '@commons/label/Label';
import '@commons/intput/Input';
import '@commons/intput/IconInput';
import '@commons/icons/Info';

@customElement('app-template-layout')
export class TemplateLayout extends LitElement {
    static styles = [
        css`
            :host {
                display: grid;
                grid-template-rows: fit-content(23%) 1fr fit-content(7%);
            }
            main{
                overflow-y:scroll;
                height: 60vh;
                padding: 15px
            }
            @media (max-width: 768px) {
                :host {
                    grid-template-rows: fit-content(20%) 1fr fit-content(7%);
                }
                main{
                    overflow-y:scroll;
                    height: 60vh;
                    padding: 15px
                }
            }
            @media (min-width: 1280px) {
                :host {
                    grid-template-rows: fit-content(7%) 1fr fit-content(7%);
                }
                main{
                    overflow-y:scroll;
                    height: 84vh;
                    padding: 15px
                }
            }
        `
    ];

    setColor(e:CustomEvent){
        console.log(e.detail);
        const iconInfo = this.shadowRoot?.querySelector("app-icon-info")as Element;
        iconInfo.setAttribute('fillColor', e.detail);
    }

    render() {
        return html`
            <app-header>
                <app-navigation-bar>
                    <app-title level=1>Header templates</app-title>
                    <app-container class="row p-1">
                        <app-icon-info id="app-icon-info-main" class="m-0"></app-icon-info>
                        <app-label class="bold">Selecciona el color:</app-label>
                        <app-input @color-changed="${this.setColor}" type="color"></app-input>
                        <app-contextual-menu for="app-icon-info-main"></app-contextual-menu>
                    </app-container> 
                    <app-container class="p-2">
                        <app-button class="bold">Button</app-button>
                        <app-button class="success bold">Button</app-button>
                        <app-button class="info bold">Button</app-button>
                        <app-button class="warning bold">Button</app-button>
                        <app-button class="error bold">Button</app-button>
                    </app-container>
                </app-navigation-bar>
            </app-header>
            <main>
                <slot></slot>
            </main>
            <app-footer>
                <app-navigation-bar>
                    <app-title level=1>Footer</app-title>
                    <app-input placeholder="Input..."></app-input>
                    <app-button class="error">Button Error</app-button>
                </app-navigation-bar>
            </app-footer>`
        ;
    }
}
