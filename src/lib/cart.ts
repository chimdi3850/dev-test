import type { ProductInCart, LikePost } from './types'
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

const likeInitialState: LikePost[] = []

export const likeSlice = createSlice({
    name: 'likes',
    initialState: likeInitialState,
    reducers: {
        like: (state, action: PayloadAction<{id: string}>) => {
            const like = action.payload
            const existingLike = state.find((heart) => heart.id === like.id)

            if (existingLike){
                existingLike.like = !existingLike.like
            } else{
                state.push({...like, like: true})
            }
        }
    }
})
// export const likePost = createLike({
//     name: "heart",
//     initialState,
//     liking:{
//         like: (state, action:  PayloadAction<string>) =>{
//             const {
//                 id = string,
//                 like = true,
//     } 
// })
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions
export const{like} = likeSlice.actions
