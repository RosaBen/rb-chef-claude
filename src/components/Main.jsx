import { useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"

export default function Main(){
  const [ingredients, setIngredients] = useState([])
  const [recipeShown, setRecipeShown] = useState(false)
  // const [inputValue, setInputValue] = useState(null)
  const mainContainer = document.querySelector(".container")



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

  function showRecipe(){
    setRecipeShown(prev => !prev)
  }

  // get-recipe-container
  return(
    <>
    {ingredients.length > 0 && mainContainer.classList.remove("original-state")}
    <main>
    {/* <form onSubmit={handleClick}> */}
    <form action={addIngredient}>
      <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient"/>
      <button type="submit">+ Add ingredient</button>
    </form>
    {/* {console.log(ingredients)} */}
    {ingredients.length > 0 ? <IngredientsList ingredients={ingredients} showRecipe={setRecipeShown}/>: null}
    {recipeShown ? <ClaudeRecipe/>: null}
    </main>
    </>
  )
}