import { css } from "lit";

export const classStyles = css`
    :host(.bold){
        font-weight: bold;
    }
    :host(.f){
        display: flex;
    }
    :host(.wrap){
        flex-wrap: wrap;
    }
    :host(.center){
        justify-content: center;
    }
    :host(.end){
        justify-content: end;
    }
    :host(.a-center){
        align-items: center;
    }
    :host(.a-end){
        align-items: end;
    }
    :host(.row){
        flex-direction: row;
    }
    :host(.column){
        flex-direction: column;
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
    :host(.w-full){
        width: -webkit-fill-available;  
    }
    :host(.p-0){
        padding: 0px;  
    }    
    :host(.p-1){
        padding: 5px;  
    }
    :host(.p-2){
        padding: 10px;  
    }
    :host(.m-0){
        margin: 0px;  
    }
`;