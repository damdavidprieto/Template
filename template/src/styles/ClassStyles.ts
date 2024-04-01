import { css } from "lit";

export const classStyles = css`
    :host(.wrap){
        flex-wrap: wrap;
    }
    :host(.center){
        justify-content: center;
    }
    :host(.row){
        flex-direction: row;
    }
    :host(.ml-auto){
        margin-left: auto;
    }
    :host(.m-auto){
        margin: auto;
    }
    :host(.bold){
        font-weight: bold;  
    }
    :host(.w-auto){
        width: auto;  
    }
    :host(.p-0){
        padding: 0px;  
    }
    :host(.m-0){
        margin: 0px;  
    }
`;