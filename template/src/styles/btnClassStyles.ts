import { css } from "lit";

export const btnClases = css`
    :host(.success) button {
        background-color:#2ebe02;
    }
    :host(.success:hover) button {
        background-color:#249501;
    }
    :host(.success:active ) button {
        background-color:#196901;
    }
    :host(.info) button {
        background-color:#021bbe;
    }
    :host(.info:hover) button {
        background-color:#021591;
    }
    :host(.info:active ) button {
        background-color:#02106b;
    }
    :host(.warning) button {
        background-color:#abbe02;
    }
    :host(.warning:hover) button {
        background-color:#899801;
    }
    :host(.warning:active ) button {
        background-color:#626d01;
    }
    :host(.error) button {
        background-color:#be0202;
    }
    :host(.error:hover) button {
        background-color:#9d0202;
    }
    :host(.error:active ) button {
        background-color:#7b0202;
    }
`;