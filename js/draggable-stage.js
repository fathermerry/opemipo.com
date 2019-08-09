class DraggableStage extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('template-stage');
        if (!template) {
            return;
        }
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.cloneNode(true));
    }
}

customElements.define('draggable-stage', DraggableStage);