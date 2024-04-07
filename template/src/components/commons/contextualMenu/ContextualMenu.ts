import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classStyles } from '../../../styles/ClassStyles';
import { constantStyles } from '../../../styles/ConstantStyles';
import { colorStyles } from '../../../styles/ColorStyles';

@customElement('app-contextual-menu')
export class ContextualMenu extends LitElement {
    static styles = [
        colorStyles,
        constantStyles,
        css`
        :host {
            display: block;
            position: absolute;
            background-color: #242424;
            border: 0px solid #ccc;
            z-index: 100; /* Asegura que el menú se muestre encima de otros elementos */
            display: none; /* Inicialmente oculto */
            color:black;
            border-radius:0px;
            box-shadow:var(--box-shadow);
        }
    `,
        classStyles];

    @property({ type: String }) 
    for: string = '';
    
    constructor() {
        super();
        this.handleContextMenu = this.handleContextMenu.bind(this);
    }

    connectedCallback() {
        super.connectedCallback();
        document.addEventListener('contextmenu', this.handleContextMenu);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        document.removeEventListener('contextmenu', this.handleContextMenu);
    }

    handleContextMenu(event: MouseEvent) {
        const listElements = this.shadowRoot?.host?.parentElement?.children;
        let targetElement: Element | undefined
        if(listElements){
            targetElement = Array.from(listElements).find(child => child.id === this.for);
        }
        if (!targetElement) return;
        const menu = this.shadowRoot?.querySelector('.context-menu') as HTMLElement;
        if (!menu) return;

        const point = { x: event.clientX, y: event.clientY }; // Coordenadas del punto a verificar
        const containerRect = targetElement.getBoundingClientRect();
        const isInside = point.x >= containerRect.left && point.x <= containerRect.right &&
                         point.y >= containerRect.top && point.y <= containerRect.bottom;

        if (isInside) {
            event.preventDefault();
            this.style.display = 'block';
            menu.style.display = 'flex';
            menu.style.flexDirection = 'column';
            console.log(event.clientY + " - " + event.clientX);
            // Oculta el menú al hacer clic fuera de él
            const hideMenu = () => {
                this.style.display = 'none';
                document.removeEventListener('click', hideMenu);
            };
            document.addEventListener('click', hideMenu);
            const hideMenuOnContextMenu = () => {
                this.style.display = 'none';
                document.removeEventListener('contextmenu', hideMenuOnContextMenu);
            };
            document.addEventListener('contextmenu', hideMenuOnContextMenu);
        }
        // Oculta el menú al hacer clic fuera de él
        document.addEventListener('click', () => {
            this.style.display = 'none';
        }, { once: true });
        this.requestUpdate();
    }

    render() {
        return html`
            <div class="context-menu">
                <slot></slot>
            </div>
        `;
    }
}
