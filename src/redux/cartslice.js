import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    item:[],
};

const cartSlice = createSlice({
    name :"cart",
    initialState,
    reducers:{
        addItem(state,action){
         const newItem = action.payload
         state.item.push(newItem)
        },
        removeItem(state,action){
            const itemIdToRemove = action.payload
            state.item = state.item.filter((item)=> item.id !== itemIdToRemove)

        }
    }
})
export const {addItem,removeItem} = cartSlice.actions;
export default cartSlice.reducer;