import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    favoriteItems: [],
    totalAmount: 0,
    totalQuantity: 0
}

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const favItem = action.payload
            const existingItem = state.favoriteItems.find(item => item.id === favItem.id)

            state.totalQuantity++

            if (!existingItem) {
                state.favoriteItems.push({
                    id: favItem.id,
                    productName: favItem.productName,
                    imgUrl: favItem.imgUrl,
                    price: favItem.price,
                    quantity: 1,
                    totalPrice: favItem.price
                })
            }
            else {
                existingItem.quantity++
                existingItem.totalPrice = Number(existingItem.totalPrice) + Number(favItem.price)
            }
            state.totalAmount = state.favoriteItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);
        },
        deleteItem: (state, action) => {
            const id = action.payload
            const existingItem = state.favoriteItems.find(item => item.id === id)
            if (existingItem) {
                state.favoriteItems = state.favoriteItems.filter(item => item.id != id)
                state.totalQuantity = state.totalQuantity - existingItem.quantity;
                state.totalAmount = state.totalAmount - existingItem.quantity * existingItem.price
            }
            state.totalPrice = state.favoriteItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);
        },

    }
});

export const favoriteActions = favoriteSlice.actions

export default favoriteSlice.reducer