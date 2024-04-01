import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'
import { classStyles } from '../../../styles/ClassStyles';

@customElement('app-title')
export class Title extends LitElement {
    @property({ type: Number }) 
    level : 1|2|3|4|5 = 1;

    static styles = [
        css`
            :host {
                display: block;
            }
            h1, h2, h3, h4, h5 {
                white-space: nowrap;
                margin: 0;
            }
            h1{
                font-size: 2em;
            }
            h2{
                font-size: 1.5em;
            }
            h3{
                font-size: 1.17em;
            }
            h4{
                font-size: 1em;
            }
            h5{
                font-size:  0.67em;
            }
            @media (max-width: 366px) {
                h1 {
                    font-size: 1.5em;
                }
                h2{
                    font-size: 1.17em;
                }
                h3{
                    font-size: 1em;
                }
                h4{
                    font-size: 0.67em;
                }
                h5{
                    font-size: 0.35em;
                }
            }
        `,
        classStyles
    ];

    private getHeaderElement() {
        switch (this.level) {
            case 1:
                return html`<h1><slot></slot></h1>`;
            case 2:
                return html`<h2><slot></slot></h2>`;
            case 3:
                return html`<h3><slot></slot></h3>`;
            case 4:
                return html`<h4><slot></slot></h4>`;
            case 5:
                return html`<h5><slot></slot></h5>`;
            default:
                return html`<h1><slot></slot></h1>`;
        }
    }

    render() {
        return this.getHeaderElement();
    }
}
