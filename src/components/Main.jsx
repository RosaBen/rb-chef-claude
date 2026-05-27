import { useState } from "react"

export default function Main(){
  const [ingredients, setIngredients] = useState([])
  const mainContainer = document.querySelector(".container")
  const listIngredients = ingredients.map(ingredient => {
    return (
      <li key={ingredient}>{ingredient}</li>
    )
  })
  listIngredients.length > 0 && mainContainer.classList.remove("original-state") && mainContainer.classList.add("collapse")

  // function handleClick (e){
  //     e.preventDefault()
  //   const formData = new FormData(e.currentTarget)
  //   const newIngredient = formData.get("ingredient")
  //   setIngredients(prevList => [...prevList, newIngredient])
  // }

  function addIngredient(formData){
    const newIngredient = formData.get("ingredient")
    setIngredients(prevList => [...prevList, newIngredient])
  }
  return(
    <>
    {listIngredients.length > 0 && mainContainer.classList.remove("original-state") && mainContainer.classList.add("collapse")}
    <main>
    {/* <form onSubmit={handleClick}> */}
    <form action={addIngredient}>
      <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient"/>
      <button type="submit">+ Add ingredient</button>
    </form>
    <section className="listIngredients">
        {listIngredients.length > 0 ? (<h1>Ingredients on hand:</h1>): "" }
              
      <ul aria-live="polite">
        {listIngredients}
      </ul>
      <div className="get-recipe-container">
        <div>
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
        </div>
        <button>Get a recipe</button>
      </div>
    </section>
    </main>
    </>
  )
}