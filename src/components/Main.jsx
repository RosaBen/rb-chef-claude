import Form from "./Form";

export default function Main(){
  const ingredients = ["Chicken", "Oregano", "Tomatoes"]

  const listIngredients = ingredients.map(ingredient => {
    return (
      <li>{ingredient}</li>
    )
  })
  return(
    <main>
      <Form />
      <div className="listIngredients">
              <h1>Ingredients on hand:</h1>
      <ul>
        {listIngredients}
      </ul>
      </div>
    </main>
  )
}