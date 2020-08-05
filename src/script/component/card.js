const showCard = (meal) => {
  return `
  <div class="col-10 col-md-6 col-lg-4 mt-3">
    <div class="card m-auto" style="width: 18rem;">
      <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="Img-Meal">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}, <span class="card-category">${meal.strCategory}</span></h5>
        <p class="text-muted"><span class="card-origin">${meal.strArea}</span></p>
        <hr>
        <button class="btn-detail btn btn-secondary px-4" data-toggle="modal" data-target="#mealDetail" data-name="${meal.strMeal}" data-img="${meal.strMealThumb}" data-category="${meal.strCategory}" data-country="${meal.strArea}" data-instructions="${meal.strInstructions}" data-link="${meal.strYoutube}">Detail</button>
      </div>
    </div>
  </div>`
}

export default showCard