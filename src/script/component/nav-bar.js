class NavBar extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <span class="navbar-brand mb-0">Mama's Food</span>
    `
  }
}

customElements.define("nav-bar", NavBar)