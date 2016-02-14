'use strict';

function addIngredient(recipe, name, amount) {
	recipe[name]=amount;
	return recipe;
}

function removeIngredient(recipe, key) {
	delete recipe[key];
	return recipe;
}

function updateIngredient(recipe, key, newValue) {
	recipe[key]=newValue;
	return recipe;
}

function readRecipe(recipe) {
	var array = [];
	for (var ing in recipe) { console.log("this recipe calls for "+recipe[ing]+" of "+ing); }
	//debugger;
	return array;
}