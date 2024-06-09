import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    recipes: [],
};
export const recipeSlice = createSlice({
    name: "cookbook",
    initialState,
    reducers: {
        load: (state, action) => {
            state.recipes = action.payload;
        },
        // add: (state, action) => {
        //     state.recipes.push(action.payload);
        // },
    },
});
export default recipeSlice.reducer;
export const { load } = recipeSlice.actions;
