class SearchBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.querySelector("#searchElement").value;
  }

  render() {
    this.innerHTML = ` 
      <div class="input-group mb-3">
        <input class="form-control" placeholder="What food do you want to eat rn?" id="searchElement" type="search">
        <div class="input-group-append">
          <button class="btn btn-secondary" id="searchButtonElement" type="submit">Search</button>
        </div>
      </div>
      `;

    this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);