
function getTemplate(filepath) {
    return fetch(filepath)
        .then(response => response.text())
        .then(txt => {
            let html = new DOMParser().parseFromString(txt, 'text/html');

            return html.querySelector('template');
        });
}

getTemplate('./templates/header.html').then(function (tmp) {
    customElements.define(
        "wc-header",
        class Header extends HTMLElement {
            constructor() {
                super();
                const shadowRoot = this.attachShadow({ mode: "open" });
                shadowRoot.appendChild(tmp.content.cloneNode(true));
            }
        });
});

getTemplate('./templates/nav.html').then(function (tmp) {
    customElements.define(
        "wc-nav",
        class Navigation extends HTMLElement {
            constructor() {
                super();
                const shadowRoot = this.attachShadow({ mode: "open" });
                shadowRoot.appendChild(tmp.content.cloneNode(true));
            }
        });
});

getTemplate('./templates/footer.html').then(function (tmp) {
    customElements.define(
        "wc-footer",
        class Footer extends HTMLElement {
            constructor() {
                super();
                const shadowRoot = this.attachShadow({ mode: "open" });
                shadowRoot.appendChild(tmp.content.cloneNode(true));
            }
        });
});
