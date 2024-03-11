import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js'

@customElement('app-slider-panel')
export class SliderPanel extends LitElement {
    render() {
        return html`
            <app-container class="center">
                <app-panel titlePanel="Slider Panel">
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
