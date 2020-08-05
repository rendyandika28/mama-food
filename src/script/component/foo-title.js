class FooTitle extends HTMLElement {
  connectedCallback() {
    this.render()
  }

  render() {
    this.innerHTML = `
    <p class="pt-3 text-white">
            Happy Cooking, 🤍 from Mama!
          </p>
    `
  }
}

customElements.define("foo-title", FooTitle)