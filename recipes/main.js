import recipes from './recipes.mjs';

function random(num) {
    return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

function tagsTemplate(tags) {
    return tags.map(tag => `<li class="tag">${tag}</li>`).join('');
}


function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    html += `</span>`;
    return html;
}

function recipeTemplate(recipe) {
    return `<section class="recipe">
        <img src="${recipe.image}" alt="${recipe.name}" />
        <div class="info">
            <ul class="recipe__tags">
                ${tagsTemplate(recipe.tags)}
            </ul>
            <h2>${recipe.name}</h2>
            <span class="recipe__ratings">
                ${ratingTemplate(recipe.rating)}
            </span>
            <p>${recipe.description}</p>
        </div>
    </section>`;
}

function renderRecipes(recipeList) {
    const output = document.querySelector('main');
    output.innerHTML = `
      <form>
        <input type="text" placeholder="Find a recipe" />
        <button type="submit">
          <img src="images/search-icon.png" alt="Search Icon" />
        </button>
      </form>`;
    output.innerHTML += recipeList.map(recipe => recipeTemplate(recipe)).join('');
}

function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

function filterRecipes(query) {
    query = query.toLowerCase();
    return recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(query)) ||
            recipe.recipeIngredient.some(ingredient => ingredient.toLowerCase().includes(query));
    }).sort((a, b) => a.name.localeCompare(b.name));
}

function searchHandler(e) {
    e.preventDefault();
    const searchInput = document.querySelector('input[type="text"]').value.toLowerCase();
    const filteredRecipes = filterRecipes(searchInput);
    renderRecipes(filteredRecipes);
}

document.querySelector('main').addEventListener('submit', searchHandler);

init();
