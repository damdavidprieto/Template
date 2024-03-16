import { LitElement, html, PropertyValueMap } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Main } from '../components/commons/structures/Main';
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

@customElement('app-template-layout')
export class TemplateLayout extends LitElement {
    firstUpdated(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        super.firstUpdated(changedProperties);

    }

    protected update(changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
        super.update(changedProperties);
        //Aplicar cambios despues de que se renderiza el componente
        this.updateComplete.then(() => {
            //Ajustar el main a la altura del header
            const header = this.shadowRoot?.querySelector('app-header') as HTMLElement;
            const main = this.shadowRoot?.querySelector('app-main') as Main;
            const footer = this.shadowRoot?.querySelector('app-footer') as HTMLElement;
            if (header && main && footer) {
                const footerHeight = footer.getBoundingClientRect().height + 10;
                // Traducir el valor de píxeles del footer a vh
                //console.log('footerHeight', footerHeight);
                //console.log('window.innerHeight', window.innerHeight);
                const footerHeightInVh = (footerHeight*2 / window.innerHeight) * 100;
                //console.log('footerHeightInVh', footerHeightInVh);
                // Establecer 'maxHeight' en 'vh'
                main.maxHeight = `${100 - footerHeightInVh}vh`;
                //console.log('main', main.maxHeight);
            }
        });
    }

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
                    <app-container class="row p-0">
                        <app-icon-info class="m-0"></app-icon-info>
                        <app-label class="bold">Selecciona el color:</app-label>
                        <app-input @color-changed="${this.setColor}" type="color"></app-input>
                    </app-container> 
                    <app-container class="p-0">
                        <app-button class="bold">Button</app-button>
                        <app-button class="success bold">Button</app-button>
                        <app-button class="info bold">Button</app-button>
                        <app-button class="warning bold">Button</app-button>
                        <app-button class="error bold">Button</app-button>
                    </app-container>
                </app-navigation-bar>
            </app-header>
            <app-main>
                <slot></slot>
            </app-main>
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
