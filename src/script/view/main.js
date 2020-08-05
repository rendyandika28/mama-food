import "../component/foo-title.js"
import "../component/nav-bar.js"
import "../component/search-bar.js"

import DataMeal from "../data/data-meal.js"
import showCard from "../component/card.js"


const main = () => {
  const searchElement = document.querySelector("search-bar");
  const listItem = document.querySelector(".list-item")

  const onBtnSearchClicked = async () => {
    try {
      const results = await DataMeal.searchMeal(searchElement.value);
      renderResult(results)
    } catch (message) {
      fallbackResult(message)
    }
  }

  const renderResult = (items) => {
    let cards = ''
    items.forEach(item => {
      cards += showCard(item)
    });
    listItem.innerHTML = cards

    $('.btn-detail').click(function (e) {
      const name = $(this).data('name')
      const img = $(this).data('img')
      const category = $(this).data('category')
      const country = $(this).data('country')
      const instructions = $(this).data('instructions')
      const link = $(this).data('link')

      $(".mdl-name").text(name)
      $(".mdl-title").text(name)
      $(".mdl-category").text(category)
      $(".mdl-country").text(country)
      $(".mdl-instructions").text(instructions)
      $(".mdl-link").text(link)
      $(".mdl-link").attr('href', link)
      $(".mdl-img").attr('src', img)


    })

  }

  const fallbackResult = (message) => {
    listItem.innerHTML = `
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10">
          <div class="alert alert-warning alert-dismissible fade show" role="alert">
            Upss! <strong class="text-uppercase">${message}</strong> is not found, try with different name!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  searchElement.clickEvent = onBtnSearchClicked


  listItem.innerHTML = `
  <div class="container">
    <div class="row pt-5 justify-content-center">
      <div class="col-11 col-md-12 text-center">
        <blockquote class="blockquote">
          <p class="mb-0 font-italic">"The key to a good meal is simplicity and the right seasoning"</p>
          <footer class="blockquote-footer">Buddy Valastro</footer>
        </blockquote>
      </div>
    </div>
  </div>
  `
  $(function () {
    $(".btn-cta").on('click', function () {
      $("HTML, BODY").animate({
        scrollTop: $("#search-bar").offset().top
      }, 750);
    });
  });
};

export default main;