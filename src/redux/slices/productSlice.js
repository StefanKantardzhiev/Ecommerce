import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    products: []
}

const productSlice = createSlice(
    {
        name: 'profile-products',
        initialState,
        reducers: {
            deleteItem: (state, action) => {
                const id = action.payload
                const existingItem = state.products.find(item => item.id === id)
                if (existingItem) {
                    state.products = state.products.filter(item => item.id != id)
                }
            }
        }
    }
)

export const productActions = productSlice.actions
export default productSlice.reducer