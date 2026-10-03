export interface Product {
	id: string;
	title: string;
	category: string;
	price: number;
	thumbnail: string
	discountPercentage: number
}

export interface Products {
	products: Product[];
	total: number;
	skip: number;
	limit: number;
}

export interface ProductDetail extends Product {
	stock: number
	rating: number
	reviews: Review[]
}

interface Review {
	rating: number
	comment: string
}

export interface ProductInCart extends Product {
    numberChosen: number
}

export type Categories = string[];

export interface Post {
	id: string;
	title: string;
	body: string;
	tags: string[];
}

export interface Posts {
	posts: Post[]
	total: number
	skip: number
	limit: number
}
export interface Comment {
	id: string;
	body: string;
}
export interface Comments {
	comment: Comment[]
	skip: number
	limit: number
	total:  number
}