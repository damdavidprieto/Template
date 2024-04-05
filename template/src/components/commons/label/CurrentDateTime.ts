import { LitElement, html, css } from 'lit-element';
import { customElement } from 'lit/decorators.js';
import './Label';
import '../container/Container';
import { classStyles } from '../../../styles/ClassStyles';

@customElement('current-date-time')
export class CurrentDateTime extends LitElement {
  private timer: number = 0;
  public dateLabel: string = '';
  public timeLabel: string = '';
  public currentDate: string = '';
  public currentTime: string = '';

  static styles = [css`
    :host {
      display: block;
    }
    app-label{
      padding: 0px 5px 0px 5px;
    }
    `,
        classStyles
    ];

  constructor() {
    super();
    this.updateDateTime();
  }

  connectedCallback() {
    super.connectedCallback();
    // Actualizar la fecha y hora cada segundo
    this.timer = window.setInterval(() => this.updateDateTime(), 1000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Limpiar el temporizador cuando el componente se desconecta
    clearInterval(this.timer);
  }

  private updateDateTime() {
    const now = new Date();
    this.currentDate = now.toLocaleDateString();
    this.currentTime = now.toLocaleTimeString();
    this.requestUpdate();
  }

  render() {
    return html`
        <app-label>${this.dateLabel} ${this.currentDate}</app-label>
        <app-label>${this.timeLabel} ${this.currentTime}</app-label>
    `;
  }
}

// Invocar el componente donde sea necesario
const currentDateComponent = new CurrentDateTime();
document.body.appendChild(currentDateComponent);
