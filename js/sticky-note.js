class StickyNote extends HTMLElement {
    constructor() {
        super();
        const text = this.getAttribute('text');
        const url = this.getAttribute('url');
        if (!text || !url) {
            return;
        }

        const element = document.createElement('a');
        element.innerHTML = text;
        element.setAttribute('href', url);
        element.setAttribute('class', 'note');

        const style = document.createElement('style');
        style.textContent = `
            .note {
                display: block;
                position: relative;
                width: 210px;
                height: 210px;
                background: #fffffa;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 16px;
                line-height: 20px;
                text-align: center;
                font-family: 'Castledown';
                padding: 30px;
                text-decoration: none;
                color: #2D3137;
            }

            .note:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                border: solid 1px #2D3137;
                transition: all 0.3s;
            }
        `;

        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(style);
        shadowRoot.appendChild(element);
    }
}

customElements.define('sticky-note', StickyNote);