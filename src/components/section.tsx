import './section.css'
import { useGetProductCategoryListQuery, useGetProductByCategoryQuery} from '../lib/product'

export function CategoriesSection() {
  const {data: categories} = useGetProductCategoryListQuery()

  return (
    <section className="categories-grid">
			<div className="vase-left">
				<Category category={categories?.[0] ?? ''} />
			</div>
			<div className="vase-right">
				<Category category={categories?.[1] ?? ''} />
				<div className="grid md:grid-cols-2">
					<Category category={categories?.[2] ?? ''} />
					<Category category={categories?.[3] ?? ''} />
				</div>
			</div>
		</section>
  )
}

export function Category({ category }: { category: string }) {
const { data } = useGetProductByCategoryQuery({category})
const product = data?.products[0]
return (
    <div className="box">
			<img
				className="vases"
				src={product?.thumbnail}
				alt=""
			/>
			<div className="caption">
				<p className="text-green-500 font-semibold text-xl">
					{data?.total ?? 0} Items
				</p>
				<h2 className="uppercase text-3xl font-semibold">{category}</h2>
				<a className="font-semibold" href={`/categories/${category}`}>
					Read more
				</a>
			</div>
		</div>
)
}
