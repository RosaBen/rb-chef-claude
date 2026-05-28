export default function IngredientsList({showRecipe, ingredients}){
    const listIngredients = ingredients.map(ingredient => {
    return (
    <li key={ingredient}>{ingredient}</li>
    )
  })
  return(
          <section className="listIngredients">
        
              <h2>Ingredients on hand:</h2>
      <ul aria-live="polite">
        {listIngredients}
      </ul>
      {ingredients.length > 3 ? (
              <div className="get-recipe-container">
        <div>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button onClick={showRecipe}>Get a recipe</button>
      </div>
      ): null}
    </section>
  )
}