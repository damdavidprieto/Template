import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('app-navigation-bar-menu')
export class NavigationBarMenu extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                background-color: transparent;
                padding:var(--padding);
            }
            nav {
                gap: 1rem;
                display: flex;
                flex-direction: column;
                
                gap: 1rem;
                visibility: hidden; /* Por defecto, el menú está oculto */
                opacity: 0; /* Por defecto, el menú está oculto */
                transition: visibility 0s, opacity 0.5s linear; /* Transición suave */
            }
            :host([opened]) nav {

            }
            :host([opened]) nav {
                visibility: visible; /* Mostrar el menú cuando el atributo 'opened' está presente */
                opacity: 1; /* Mostrar el menú cuando el atributo 'opened' está presente */
            }
            @media (min-width: 1280px) {
                
            }
        `
    ];

    toggleMenu() {
        this.hasAttribute('opened') ? this.removeAttribute('opened') : this.setAttribute('opened', '');
    }

    render() {
        return html`
            <app-icon-menu @click="${this.toggleMenu}"></app-icon-menu>
            <nav>
                <slot></slot>
            </nav>
        `;
    }
}
