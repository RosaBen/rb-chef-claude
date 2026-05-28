import {useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromChefClaude } from "../assets/scripts/ai";
// import { getRecipeFromChefClaude } from "../assets/scripts/ai"


export default function Main(){
  const mainContainer = document.querySelector(".container")
  const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
  const [recipe, setRecipe] = useState("")

  async function getRecipe(){
    const recipeMarkdown = await getRecipeFromChefClaude(ingredients)
    setRecipe(recipeMarkdown)
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
    {ingredients.length > 0 ? <IngredientsList ingredients={ingredients} showRecipe={getRecipe}/>: null}
    {recipe? <ClaudeRecipe recipe={recipe}/> : null}
    </main>
    </>
  )
}