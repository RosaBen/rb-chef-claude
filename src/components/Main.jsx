import {useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
// import { getRecipeFromChefClaude } from "../assets/scripts/ai"


export default function Main(){
  const mainContainer = document.querySelector(".container")
  const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
  const [recipeShown, setRecipeShown] = useState(false)

  function toggleRecipe(){
    setRecipeShown(prev => !prev)
  }

  function addIngredient(formData){
    const newIngredient = formData.get("ingredient")
    if (!newIngredient) return
    setIngredients(prevList => [...prevList, newIngredient])
  }

  return(
    <>
    <main>
    <form action={addIngredient}>
      <input 
      type="text" 
      placeholder="e.g. oregano" 
      aria-label="Add ingredient" 
      name="ingredient"
      />
      <button type="submit">+ Add ingredient</button>
    </form>
    {ingredients.length > 0 ? <IngredientsList ingredients={ingredients} showRecipe={toggleRecipe}/>: null}
    {recipeShown ? <ClaudeRecipe /> : null}
    </main>
    </>
  )
}