import { useState } from "react"

export default function Main(){
  const [ingredients, setIngredients] = useState([])

  const listIngredients = ingredients.map(ingredient => {
    return (
      <li key={ingredient}>{ingredient}</li>
    )
  })

  function handleClick (e){
      e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newIngredient = formData.get("ingredient")
    setIngredients(prevList => [...prevList, newIngredient])
  }
  return(
    <main>
    <form onSubmit={handleClick}>
      <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient"/>
      <button type="submit">+ Add ingredient</button>
    </form>
      <div className="listIngredients">
        {listIngredients.length > 0 ? (<h1>Ingredients on hand:</h1>): "" }
              
      <ul>
        {listIngredients}
      </ul>
      </div>
    </main>
  )
}