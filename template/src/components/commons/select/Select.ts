import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('app-select')
export class Select extends LitElement {
    @property({ type: Array }) options: KeyValue[] = [];
    @property({ type: String }) selectedOption: string | undefined;

    static styles = css`
        :host {
            display: inline-block;
        }
        select {
            padding: 5px;
            font-size: 16px;
        }
    `;

    render() {
        return html`
            <select @change=${this.handleSelectChange}>
                ${this.options.map(option => html`<option value=${option.key}>${option.value}</option>`)}
            </select>
        `;
    }

    handleSelectChange(event: Event) {
        const selectElement = event.target as HTMLSelectElement;
        this.selectedOption = selectElement.value;
        this.dispatchEvent(new CustomEvent('option-selected', {
            detail: { key: this.selectedOption },
            bubbles: true,
            composed: true
        }));
    }
}
