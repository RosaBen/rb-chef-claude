import { useEffect, useState } from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromChefClaude } from "../assets/scripts/ai"


// console.log("main===>", getRecipeFromChefClaude(ingredients))
export default function Main(){
  const [ingredients, setIngredients] = useState(["all the main spices", "pasta", "ground beef", "tomato paste"])
  const [recipeShown, setRecipeShown] = useState(false)
  const [recipe, setRecipe] = useState("")

  async function generateRecipe(){
    const result = await getRecipeFromChefClaude(ingredients)
    console.log(result)
    setRecipe(result)
  }

  useEffect(() => {
    const container = document.querySelector(".container")
    if (!container) return
    container.classList.toggle("original-state", ingredients.length === 0)
  }, [ingredients.length])



  // function handleClick (e){
  //     e.preventDefault()
  //   const formData = new FormData(e.currentTarget)
  //   const newIngredient = formData.get("ingredient")
  //   setIngredients(prevList => [...prevList, newIngredient])
  // }

  function addIngredient(formData){
    const newIngredient = formData.get("ingredient")
    if (!newIngredient) return
    setIngredients(prevList => [...prevList, newIngredient])
  }

  async function showRecipe(){
    setRecipeShown(true)
    if (!recipe) {
      await generateRecipe()
    }
  }

  // get-recipe-container
  return(
    <>
    <main>
    {/* <form onSubmit={handleClick}> */}
    <form action={addIngredient}>
      <input type="text" placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient"/>
      <button type="submit">+ Add ingredient</button>
    </form>
    {/* {console.log(ingredients)} */}
    {ingredients.length > 0 ? <IngredientsList ingredients={ingredients} showRecipe={showRecipe}/>: null}
    {recipeShown && recipe ? <ClaudeRecipe recipe={recipe} /> : null}
    </main>
    </>
  )
}