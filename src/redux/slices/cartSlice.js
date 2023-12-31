import { createSlice } from '@reduxjs/toolkit'
import { useEffect, useState } from 'react';

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
}



const cartSlice = createSlice(
    {
        name: 'cart',
        initialState,
        reducers: {
            addItem: (state, action) => {
                const newItem = action.payload
                const existingItem = state.cartItems.find(item => item.id === newItem.id)


                state.totalQuantity++

                if (!existingItem) {
                    state.cartItems.push({
                        id: newItem.id,
                        productName: newItem.productName,
                        imgUrl: newItem.imgUrl,
                        price: newItem.price,
                        quantity: 1,
                        totalPrice: newItem.price
                    })
                }
                else {
                    existingItem.quantity++
                    existingItem.totalPrice = Number(existingItem.totalPrice) + Number(newItem.price)
                }

                state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);

            },
            deleteItem: (state, action) => {
                const id = action.payload
                const existingItem = state.cartItems.find(item => item.id === id)
                if (existingItem) {
                    state.cartItems = state.cartItems.filter(item => item.id != id)
                    state.totalQuantity = state.totalQuantity - existingItem.quantity;
                    state.totalAmount = state.totalAmount - existingItem.quantity * existingItem.price
                }
                state.totalPrice = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);
            },
            removeOne: (state, action) => {
                const id = action.payload
                const existingItem = state.cartItems.find(item => item.id === id)

                if (existingItem) {

                    if (existingItem.quantity <= 0) {
                        existingItem.totalAmount = 0;
                        if (state.totalPrice <= 0) {
                            state.totalPrice = 0;
                        }
                        if (state.totalAmount <= 0 && state.totalQuantity <= 0) {
                            state.totalAmount = 0;
                            state.totalQuantity = 0;
                        }
                    } else {
                        state.totalAmount = state.totalAmount - existingItem.price
                        state.totalQuantity = state.totalQuantity - existingItem.quantity
                        existingItem.quantity = existingItem.quantity - 1
                        state.totalPrice = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity), 0);
                    }



                }

            },
        }
    });

export const cartActions = cartSlice.actions

export default cartSlice.reducer