function getReference() {
  var database = firebase.database();
}

function read(ingredients) {
  var recipeName = firebase.database().ref('Recipes/' + ingredients + '/name');
  recipeName.on('value', (snapshot) => {
    const name = snapshot.val();
    console.log(name);
  });

  var recipeIngredients = firebase.database().ref('Recipes/' + ingredients + '/ingredients');
  recipeIngredients.on('value', (snapshot) => {
    const ingredients = snapshot.val();
    console.log(ingredients);
  });

  var recipe = firebase.database().ref('Recipes/' + ingredients + '/recipe');
  recipe.on('value', (snapshot) => {
    const recipe = snapshot.val();
    console.log(recipe);
  });
}