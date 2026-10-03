import type { Product } from "../lib/types";
import {useGetProductByIdQuery, useGetProductByLimitAndSkipQuery} from '../lib/product'
import { useMediaQuery } from "../hooks/use-media-query";
import "../components/product.css"
import {Dialog, DialogTitle, DialogTrigger, DialogDescription, DialogRoot} from '@cloudflare/kumo/components/dialog'
import { Heart, Minus, Plus, ShoppingCartPlus, Star, StarHalf } from "lucide-react";
import {Button} from '@cloudflare/kumo/components/button'
import {useState} from 'react'
import {addToCart} from '../lib/cart'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../lib/store'

export function ProductSection() {
    const isMobile = useMediaQuery('max-width: 768px')
    const {data} = useGetProductByLimitAndSkipQuery({limit: isMobile ? 5 : 10})
    return (
        <section id="content">
            <div className="safe">
                <h4 id="featured">Featured product</h4>
                <h2 id="seller">Bestseller products</h2>
                <p id="conflict">Problems trying to solve the conflict between</p>
            </div>
            <div className="product-card-grid">
                {data?.products.map((p) => <ProductCardDialog key={p.id} product={p} />)}
            </div>
            <button className="btn-products">Load More Products</button>
        </section>
    )
}

function ProductCard({product}: {product: Product}) {
    const originalPrice = product.price / (1 - product.discountPercentage / 100)
    return (
                <div className="bowl">
                    <img src={product.thumbnail} alt={product.title} className="product-items" />
                    <div  className="product-info">
                        <h4>{product.title}</h4>
                        <p className="product-category">{product.category}</p>
                        <div className="price-row">
                            <p className="original-price">{new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            }).format(originalPrice)}</p>
                            <p className="sale-price">{new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            }).format(product.price)}</p>
                        </div>
                    </div>
                </div>
                
    )
}

function ProductCardDialog({product}: {product:  Product}) {
    const dispatch = useDispatch<AppDispatch>()
    const [showInput, setShowInput] = useState(false)
    const [numberToPurchase, setNumberToPurchase] = useState(1)
    const [open, setOpen] = useState(false)

    const {data} = useGetProductByIdQuery(product.id)
    const isOutOfStock = (data?.stock ?? 0) < 15
    return (
        <DialogRoot open={open} onOpenChange={setOpen}>
            <DialogTrigger render={(triggerProps) => (
                <div {...triggerProps} className="product-card" aria-label={`View ${product.title}`}>
                    <ProductCard product={product} />
                    <h4>{data?.category}</h4>
                </div>
            )} />
            <Dialog>
                <div className="dialog-inner">
                        {isOutOfStock && (
                        <div className="out-stock-overlay">
                            <h6 className="out-stock-label">Out Of Stock</h6>
                        </div>)}
                        <div className="data-wrapper">
                        <img src={data?.thumbnail} alt={data?.title }  className="data-pic"/>
                        <Button id="like-button" icon={Heart} variant="outline" disabled={isOutOfStock} />
                        </div>
                    <DialogTitle className="title">{product.title}</DialogTitle>
                    <DialogDescription className="data-category">
                        {data?.category}
                    </DialogDescription>
                    <div>
                        <div className="data-price">{data && new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data.price)}</div>
                    </div>
                    <div className="data-rating">{Array.from({length: Math.floor(data?.rating ?? 0)}).map((_, index) => (
                        <Star key={`full-${index}`} fill="currentColor" />
                    ))}{(data?.rating ?? 0) % 1 >= 0.5 && <StarHalf fill="currentColor" />}</div>
                <Button id='add-to-basket' variant="outline" disabled={isOutOfStock} onClick={() => setShowInput(true)}>Add to basket</Button>
                {showInput && 
                <div className="basket-cart">
                    <div id="keep">
                        <Button icon={Plus} variant="ghost" aria-label="Increase quantity" onClick={() => setNumberToPurchase((quantity) => quantity + 1)} />{numberToPurchase}<Button icon={Minus} variant="ghost" aria-label="Decrease quantity" disabled={numberToPurchase <= 1} onClick={() => setNumberToPurchase((quantity) => Math.max(1, quantity - 1))} />
                    </div>
                    <Button onClick={() => {
                        dispatch(addToCart({...product, numberChosen: numberToPurchase}))
                        setOpen(false)
                    }} icon={ShoppingCartPlus} className="shopping">Add</Button>
                    </div>}
                </div>
            </Dialog>
        </DialogRoot>
    )
}