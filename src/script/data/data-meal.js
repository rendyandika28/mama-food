class DataMeal {
  static searchMeal(keyword) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
      .then(response => response.json())
      .then(responseJSON => {
        if (responseJSON.meals) {
          return Promise.resolve(responseJSON.meals)
        } else {
          return Promise.reject(`${keyword}`)
        }
      })
  }
}

export default DataMeal