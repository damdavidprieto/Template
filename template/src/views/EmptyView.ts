import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../layouts/TemplateLayout';
import '../components/commons/container/Container';
import '../components/commons/container/Panel';
import '../components/commons/container/PanelColor';
import '../components/composes/Template/panels/ButtonsPanel';
import '../components/composes/Template/panels/InputsPanel';
import '../components/commons/icons/Info';
import '../components/composes/Template/panels/IconsPanel';

@customElement('app-empty-view')
export class EmptyView extends LitElement {
    render() {
        return html`
            <app-template-layout>
                          
            </app-template-layout>
        `;
    }
}
