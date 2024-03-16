import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../../../commons/intput/Input';

@customElement('app-panel-inputs')
export class InputsPanel extends LitElement {
    render() {
        return html`
            <app-container class="center">
            <app-panel titlePanel="Input radio Panel">
                    <app-input type="radio"></app-input>
                    <app-input type="radio"></app-input>
                    <app-input type="radio"></app-input>
                </app-panel>
                <app-panel titlePanel="Input datetime-local Panel">
                    <app-input type="datetime-local"></app-input>
                    <app-input type="datetime-local"></app-input>
                    <app-input type="datetime-local"></app-input>
                </app-panel>
                <app-panel titlePanel="Input date Panel">
                    <app-input type="date"></app-input>
                    <app-input type="date"></app-input>
                    <app-input type="date"></app-input>
                </app-panel>
                <app-panel titlePanel="Input month Panel">
                    <app-input type="month"></app-input>
                    <app-input type="month"></app-input>
                    <app-input type="month"></app-input>
                </app-panel>
                <app-panel titlePanel="Input week Panel">
                    <app-input type="week"></app-input>
                    <app-input type="week"></app-input>
                    <app-input type="week"></app-input>
                </app-panel>
                <app-panel titlePanel="Input number Panel">
                    <app-input type="number" placeholder="Introduce un número..."></app-input>
                    <app-input type="number" placeholder="Introduce un número..."></app-input>
                    <app-input type="number" placeholder="Introduce un número..."></app-input>
                </app-panel>
            </app-container>
            <app-container class="center">
                <app-panel titlePanel="range Panel">
                    <app-input type="range"></app-input>
                    <app-input type="range"></app-input>
                    <app-input type="range"></app-input>
                    <app-input type="range"></app-input>
                    <app-input type="range"></app-input>
                </app-panel>
                <app-panel titlePanel="CheckBox Panel">
                    <app-input type="checkbox"></app-input>
                    <app-input type="checkbox"></app-input>
                    <app-input type="checkbox"></app-input>
                    <app-input type="checkbox"></app-input>
                    <app-input type="checkbox"></app-input>
                </app-panel>
                <app-panel titlePanel="Password Panel">
                    <app-input type="password" placeholder="Password..."></app-input>
                    <app-input type="password" placeholder="Password..."></app-input>
                    <app-input type="password" placeholder="Password..."></app-input>
                    <app-input type="password" placeholder="Password..."></app-input>
                    <app-input type="password" placeholder="Password..."></app-input>
                </app-panel>
                <app-panel titlePanel="Input Panel">
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                    <app-input type="text" placeholder="Input..."></app-input>
                </app-panel>
                <app-panel titlePanel="Email Panel">
                    <app-input type="email" placeholder="Email..."></app-input>
                    <app-input type="email" placeholder="Email..."></app-input>
                    <app-input type="email" placeholder="Email..."></app-input>
                    <app-input type="email" placeholder="Email..."></app-input>
                    <app-input type="email" placeholder="Email..."></app-input>
                </app-panel>
                <app-panel titlePanel="Input Panel">
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                    <app-icon-input type="text" placeholder="Input..."><app-icon-info></app-icon-info></app-icon-input>
                </app-panel>
            </app-container>  
            `;
    }
}
