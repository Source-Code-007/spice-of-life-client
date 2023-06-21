// set item in local storage
const setLocalStorage = (recipe_data) => {
    const existRecipe = JSON.parse(localStorage.getItem('favRecipe'))
    let recipe = []
    if (existRecipe) {
        if (existRecipe.find(recipe => recipe !== recipe_data.recipe_name)) {
            recipe = [...existRecipe, recipe_data]
            localStorage.setItem('favRecipe', JSON.stringify(recipe))
        }
    } else {
        recipe.push(recipe_data)
        localStorage.setItem('favRecipe', JSON.stringify(recipe))
    }
}

// get item from local storage
const getItemFromLocalStorage = () => {
    const existRecipe = JSON.parse(localStorage.getItem('favRecipe'))
    return existRecipe
}

// remove item from local storage
const removeItemFromLocalStorage = (recipe_name) => {
    const existRecipe = getItemFromLocalStorage()
    const restRecipes = existRecipe.filter(recipe => recipe.recipe_name !== recipe_name)
    localStorage.setItem('favRecipe', JSON.stringify(restRecipes))
    if(!(getItemFromLocalStorage().length)){
        localStorage.removeItem('favRecipe')
        return
    }
}


export { setLocalStorage, getItemFromLocalStorage, removeItemFromLocalStorage }