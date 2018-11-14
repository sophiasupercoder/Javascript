function Recipe(recipeTitle, servings, ingredients, directions) {
    this.recipeTitle = recipeTitle;
    this.servings = servings;
    this.ingredients = ingredients;
    this.directions = directions;
}
Recipe.prototype.letsCook = function () {
    alert('I am hungry, lets cook ' + this.recipeTitle)
}
Recipe.prototype.listIngredients = function () {
    alert('lets list ingredients:' + ' ' + this.ingredients)
}


let food1 = new Recipe('tomato with egg', 1, ['egg', 'tomato'], 'stir fry them')
food1.letsCook()
food1.listIngredients()

// let recipe = {
//     recipeTitle: 'fried agg with tomato',
//     servings: 1,
//     ingredients: ['egg', 'tomato'],
//     directions: 'you just have to stir fry scrambled eggs and tomatoes',
//     letsCook: function () {
//         console.log('I am hungry, lets cook ' + this.recipeTitle)
//     }
// }
// recipe.letsCook()
// for (let indgredient of recipe) {
//     console.log(recipe.recipeTitle + ' is ' + recipe.ingredients)
// }