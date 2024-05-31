import { useLocation } from "react-router-dom";
import Card from "./Card";
const Recipes = () => {
    const { pathname } = useLocation();
    const recipes = [
        {
            id: "mAi6vrfNOmNe1LdgZ_MTd",
            title: "Italian Wedding Soup ",
            image: "https://png.pngtree.com/png-clipart/20231127/original/pngtree-high-angle-view-of-italian-wedding-soup-in-a-bowl-on-png-image_13728005.png",
            description:
                "The BEST Italian Wedding Soup! A delicious and hearty soup made with bite size herbed beef and pork meatballs, veggies and acini de pepe",
            ingredients:
                "1/2 lb Ground beef|1/2 lb Ground veal|1/4 c Italian seasoned bread crumb|1 Egg|1 tb Parsley|Salt and pepper to taste|4 c Chicken broth|2 c Spinach leaves cut into piec|1/4 c Grated Pecorino Romano chees",
            instructions:
                "Combine the ground meat, bread crumbs, egg, parsley, salt and pepper in a bowl. Mix well and form into tiny meat balls. Bake on a cookie sheet for 30 minutes at 350F. Meanwhile, bring broth to a boil and add spinach. Cover and boil for 5 minutes. Add the meatballs to the hot broth, bring to a simmer. Stir in the cheese and serve immediately. Rita in Scottsdale 01/02/92 01:41 am",
        },
    ];

    return (
        <div className=" ">
            <h1 className="text-center text-2xl font-semibold">OUR RECIPES</h1>
            <p className="text-center text-zinc-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
                aperiam?
            </p>
            <div className="recipe-cards mt-[5%]  flex flex-wrap p-5">
                {recipes.length > 0 ? (
                    recipes.map((r) => <Card key={r.id} recipe={r} />)
                ) : (
                    <h1 className="w-full text-green-600 text-3xl font-extrabold text-center mt-10">
                        No Recipe Found
                    </h1>
                )}
            </div>

            {pathname == "/recipes" && (
                <a
                    href="/create-recipe"
                    className="cursor-pointer rounded-md absolute top-[15%] py-2 px-5 left-[10%]  bg-green-200 gap-x-3 flex items-center"
                >
                    <i className="text-3xl text-green-600 ri-add-box-line"></i>
                    Create Recipe
                </a>
            )}
        </div>
    );
};

export default Recipes;
