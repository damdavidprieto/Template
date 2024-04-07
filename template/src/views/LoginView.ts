import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../components/commons/Components';
import '../components/composes/login/LoginContent';

@customElement('app-login-view')
export class LoginView extends LitElement {
    render() {
        return html`
            <app-login-layout>
                <app-login-content></app-login-content>   
            </app-login-layout>
        `;
    }
}
