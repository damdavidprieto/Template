import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js'

@customElement('app-drawer')
export class Drawer extends LitElement {
    static styles = [
        css`
            :host{
                position:fixed;
                top:0;
                width:fit-content;
                left:-100%;
                height:100%;
                background-color: black;
                overflow-x: hidden;
                overflow-y: none;
                -webkit-overflow-scrolling: touch;
            }
            input {
                position: absolute;
            }
            input:checked{
                height:100%;
                width: calc(100%-300px);
            }
            input:checked label{
                height:100%;
                width: calc(100%-300px);
            }
            label{
                left: 0px;
                height: 50px;
                width: 50px;
                position:fixed;
                display:block;
                background-color:blue;
            }
            label::before{
                content:'';
                display:block;
                position: absolute;
                height: 2px;
                width: 24px;
                background-color: black;
                left: 13px;
                top: 18px;
                box-shadow: 0 6px 0 red, 0 12px 0 yellow;
            }
        `
    ];

    @property()
    drawerId:string="";
    @property()
    private isChecked : boolean = false;

    private handleChecboxChange(){
        this.isChecked = !this.isChecked
        if(this.isChecked){
            this.setAttribute('checked',this.isChecked.toString())
        }else{
            this.removeAttribute('checked');
        }
    }

    render() {
        return html`
            <input type="checkbox" name="drawer-toggle" id="${this.drawerId}" @change="${this.handleChecboxChange}">
            <label for="drawer-toggle" id="${this.drawerId}-label"></label>
            <!-- <slot name="label"></slot> -->
            <slot></slot>
        `;
    }
}
