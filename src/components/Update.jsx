import { useState, useContext } from "react";
import { recipecontext } from "../contexts/RecipeContext";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Update = () => {
    const [recipes, setrecipes] = useContext(recipecontext);
    const { id } = useParams();
    const navigate = useNavigate();
    const recipe = recipes && recipes.find((r) => r.id == id);

    const [image, setimage] = useState(recipe.image);
    const [title, settitle] = useState(recipe.title);
    const [description, setdescription] = useState(recipe.description);
    const [ingredients, setingredients] = useState(recipe.ingredients);
    const [instructions, setinstructions] = useState(recipe.instructions);

    const UpdateHandler = (e) => {
        e.preventDefault();
        const updatedRecipe = {
            id: recipe.id,
            title,
            image,
            description,
            ingredients,
            instructions,
        };
        const copyrecipe = [...recipes];
        const index = copyrecipe.findIndex((r) => r.id == id);
        copyrecipe[index] = updatedRecipe;
        setrecipes(copyrecipe);
        localStorage.setItem("recipes", JSON.stringify(copyrecipe));
        toast.success("Recipe Updated Successfully!");
        navigate("/recipes");
    };

    return recipe ? (
        <form onSubmit={UpdateHandler} className="w-[70%] m-auto  ">
            <h1 className="text-7xl mt-5 font-extrabold text-green-600 mb-[5%]">
                Update <br /> Existing Recipe
            </h1>
            <input
                onChange={(e) => setimage(e.target.value)}
                value={image}
                type="url"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Image URL"
            />
            <input
                onChange={(e) => settitle(e.target.value)}
                value={title}
                type="text"
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="Recipe Name"
            />
            <textarea
                onChange={(e) => setdescription(e.target.value)}
                value={description}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe description..."
            ></textarea>
            <textarea
                onChange={(e) => setingredients(e.target.value)}
                value={ingredients}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe ingredients -> 'use comma to seperate ingredients'..."
            ></textarea>
            <textarea
                onChange={(e) => setinstructions(e.target.value)}
                value={instructions}
                className="w-full border rounded-md px-6 py-3 text-lg mb-5"
                placeholder="recipe instructions -> 'use comma to seperate instructions'..."
            ></textarea>
            <div className="w-full text-right">
                <button className="rounded-md text-xl bg-green-600 text-white py-2 px-5 hover:bg-green-700 duration-200">
                    Re-Publish Recipe &nbsp; &#8594;
                </button>
            </div>
        </form>
    ) : (
        <h1 className="w-full text-center text-4xl text-green-600 mt-10">
            Loading Recipe...
        </h1>
    );
};

export default Update;
