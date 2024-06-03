import { createContext, useEffect, useState } from "react";

export const recipecontext = createContext(null);

const RecipeContext = (props) => {
    const [recipes, setrecipes] = useState([]);

    useEffect(() => {
        setrecipes(JSON.parse(localStorage.getItem("recipes")) || []);
    }, []);

    return (
        <recipecontext.Provider value={[recipes, setrecipes]}>
            {props.children}
        </recipecontext.Provider>
    );
};

export default RecipeContext;
