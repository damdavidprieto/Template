import { LitElement, html, css, PropertyValueMap } from 'lit';
import { customElement } from 'lit/decorators.js'
import '../components/commons/structures/Header';
import '../components/commons/structures/Footer';
import '../components/commons/title/Title';
import '../components/commons/navigationBar/NavigationBar';
import '../components/commons/buttons/Button';
import '../my-element';
import '../components/commons/structures/Main';

@customElement('app-template-layout')
export class TemplateLayout extends LitElement {
    
    static styles = [
        css`
            :host {
                
            }
        `
    ];

    firstUpdated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        super.firstUpdated(changedProperties);

    }

    protected update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        super.update(changedProperties);
        //Aplicar cambios despues de que se renderiza el componente
        this.updateComplete.then(() => {
            //Ajustar el main a la altura del header
            const header = this.shadowRoot?.querySelector('app-header') as HTMLElement;
            const main = this.shadowRoot?.querySelector('app-main') as HTMLElement;
            if (header && main) {
                const headerHeight = header.getBoundingClientRect().height;
                main.style.paddingTop = `${headerHeight}px`;
            }
        });
    }

    render() {
        return html`
            <app-header>
                <app-navigation-bar>
                    <app-title level=1>Header templates</app-title>
                    <app-button>Button</app-button>
                    <app-button class="success">Button</app-button>
                    <app-button class="info">Button</app-button>
                    <app-button class="warning">Button</app-button>
                    <app-button class="error">Button</app-button>
                </app-navigation-bar>
            </app-header>
            <app-main>
                <slot></slot>
            </app-main>
            <app-footer>
                <app-navigation-bar>
                    <app-title level=1>Footer</app-title>
                    <app-title level=1>Footer</app-title>
                    <app-title level=1>Footer</app-title>
                    <app-title level=1>Footer</app-title>
                    <app-title level=1>Footer</app-title>
                    <app-button class="error">Button Error</app-button>
                </app-navigation-bar>
            </app-footer>`
        ;
    }
}
