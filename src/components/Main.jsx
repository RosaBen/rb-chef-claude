

export default function Main(){
  const ingredients = ["Chicken", "Oregano", "Tomatoes"]

  const listIngredients = ingredients.map(ingredient => {
    return (
      <li key={ingredient}>{ingredient}</li>
    )
  })

  function handleClick (e){
      e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newIngredient = formData.get("ingredient")
    ingredients.push(newIngredient)
  }
  return(
    <main>
    <form onSubmit={handleClick}>
      <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient"/>
      <button type="submit">+ Add ingredient</button>
    </form>
      <div className="listIngredients">
              <h1>Ingredients on hand:</h1>
      <ul>
        {listIngredients}
      </ul>
      </div>
    </main>
  )
}