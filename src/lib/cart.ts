import type { ProductInCart } from './types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: ProductInCart[] = []

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductInCart>) => {
            const product = action.payload
            const existingProduct = state.find((item) => item.id === product.id)

            if (existingProduct) {
                existingProduct.numberChosen += product.numberChosen
            } else {
                state.push(product)
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            const index = state.findIndex((s) => s.id === action.payload)
            if (index !== -1) state.splice(index, 1)
        },
        emptyCart: () => initialState,
    }
})
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions

export default cartSlice.reducer
