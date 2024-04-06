import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-contextual-menu')
export class ContextualMenu extends LitElement {
    static styles = css`
        :host {
            display: block;
            position: absolute;
            background-color: white;
            border: 1px solid #ccc;
            padding: 5px;
            z-index: 100; /* Asegura que el menú se muestre encima de otros elementos */
            display: none; /* Inicialmente oculto */
        }
        label
        {
            color:black;
        }
    `;

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
        debugger;
        const targetElement = this.shadowRoot?.getElementById(this.for);
        if (!targetElement) return;
        const menu = this.shadowRoot?.querySelector('.context-menu') as HTMLElement;
        if (!menu) return;
        event.preventDefault();
        if (event.target === targetElement) {
            menu.style.display = 'block';
            menu.style.top = `${event.clientY}px`;
            menu.style.left = `${event.clientX}px`;

            // Oculta el menú al hacer clic fuera de él
            const hideMenu = () => {
                menu.style.display = 'none';
                document.removeEventListener('click', hideMenu);
            };
            document.addEventListener('click', hideMenu);
        }
        // Oculta el menú al hacer clic fuera de él
        document.addEventListener('click', () => {
            menu.style.display = 'none';
        }, { once: true });
    }

    render() {
        return html`
            <div class="context-menu">
                <!-- Aquí puedes agregar los elementos del menú contextual -->
                <label>Acción 1</label>
                <label>Acción 2</label>
                <label>Acción 3</label>
            </div>
        `;
    }
}
