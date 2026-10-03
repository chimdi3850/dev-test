import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { Comments, Posts, ProductDetail, Products } from "../lib/types"

export const productApi = createApi({
    reducerPath: "productApi", 
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/products'}),
    endpoints: (builder) => ({
        getProductById: builder.query<ProductDetail, string>({
            query: (id) => `/${id}`
        }),
        getProductBySearch: builder.query<Products, string>({
            query: (search) => `/search?q=${encodeURIComponent(search)}`
        }),
        getProductByLimitAndSkip: builder.query<Products, {limit: number, skip?: number}>({
            query: (input) => `?limit=${input.limit}&skip=${input.skip ?? 0}&select=title,price,category,thumbnail,discountPercentage`
        }),
        getProductCategoryList: builder.query<string[], void>({
            query: () => `/category-list`
        }),
        getProductByCategory: builder.query<Products, { category: string }>({
            query: (input) => `/category/${input.category}`
        }),
    })
    
})

export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({baseUrl:'https://dummyjson.com/posts'}),
        endpoints: (builder) => ({
            getPosts: builder.query<Posts, {limit: number, skip?: number}>({
                query: (input) => `?limit=${input.limit}&skip=${input.skip ?? 0}`
            }),
        })
})

export const commentsApi = createApi({
    reducerPath: "commentsApi",
    baseQuery: fetchBaseQuery({baseUrl:'https://dummyjson.com/comments'}),
        endpoints: (builder) => ({
            getComments: builder.query<Comments, string>({
                query: (input) => `/post/${input}`
            }),
        })
})


export const {useGetProductByIdQuery, useGetProductByCategoryQuery, useGetProductByLimitAndSkipQuery, useGetProductBySearchQuery, useGetProductCategoryListQuery} = productApi
export const {useGetPostsQuery} = postsApi
export const {useGetCommentsQuery} = commentsApi