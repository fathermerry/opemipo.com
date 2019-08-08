class StickyBookmark extends HTMLElement {
    constructor() {
        super();
        const image = this.getAttribute('image');
        const text = this.getAttribute('text');
        const url = this.getAttribute('url');
        if (!text || !url) {
            return;
        }

        const element = document.createElement('a');
        element.setAttribute('href', url);
        element.setAttribute('class', 'bookmark');

        const style = document.createElement('style');
        style.textContent = `
            .bookmark {
                position: relative;
                width: 150px;
                height: 360px;
                background: #fffffa;
                padding: 30px;
                text-decoration: none;
                color: #2D3137;
                border: solid 1px #2D3137;
                display: grid;
                grid-template-rows: auto 30px;
                grid-template-areas:
                    "logo"
                    "link";
                text-align: center;
            }

            .bookmark img {
                grid-area: logo;
            }

            .bookmark span {
                grid-area: link;
                line-height: 30px;
            }
        `;

        if (image) {
            const bookmarkImage = document.createElement('img');
            bookmarkImage.setAttribute('src', image);
            element.appendChild(bookmarkImage);
        }

        const link = document.createElement('span');
        link.innerHTML = text;
        element.appendChild(link);

        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(style);
        shadowRoot.appendChild(element);
    }
}

customElements.define('sticky-bookmark', StickyBookmark);