import './section.css'
import coconut from "../assets/Images/plates.png"
import flowerVase from "../assets/Images/flower-vase.png"
import chandelier from "../assets/Images/chandelier.png"
import groupVases from "../assets/Images/groupvase.png"

export function CategoriesSection() {
  return (
    <section className="categories-grid">
      <div className="vase">
        <div className="left-vase">
          <div className="caption">
            <span className="iteems">5 Items</span>
            <h2>FURNITURE</h2>
            <a href="#">Read More</a>
          </div>
          <img src={coconut} alt="Plates" />
        </div>
        <div className="right-vase">
          <div className="top-vase">
            <div className="caption">
              <span className="iteems">5 Items</span>
              <h2>FURNITURE</h2>
              <a href="#">Read More</a>
            </div>
            <img src={flowerVase} alt="Flower-Vase" className="Vs"/>
          </div>
          <div className="bottom">
            <div className="bottom-left-vase">
              <div className="caption">
                <span className="iteems">5 Items</span>
                <h2>FURNITURE</h2>
                <a href="#">Read More</a>
              </div>
              <img src={chandelier} alt="Chandelier" />
            </div>
            <div className="bottom-right-vase">
              <div className="caption">
                <span className="iteems">5 Items</span>
                <h2>FURNITURE</h2>
                <a href="#">Read More</a>
              </div>
              <img src={groupVases} alt="Flower" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}




			{/* <div className="vase-left">
				<Category category={categories?.[0] ?? ''} />
			</div>
			<div className="vase-right">
				<Category category={categories?.[1] ?? ''} />
				<div className="grid md:grid-cols-2">
					<Category category={categories?.[2] ?? ''} />
					<Category category={categories?.[3] ?? ''} />
				</div>
			</div> */}


// export function Category({ category }: { category: string }) {
// const { data } = useGetProductByCategoryQuery({category})
// const product = data?.products[0]
// return (
//     <div className="box">
// 			<img
// 				className="vases"
// 				src={product?.thumbnail}
// 				alt=""
// 			/>
// 			<div className="caption">
// 				<p className="text-green-500 font-semibold text-xl">
// 					{data?.total ?? 0} Items
// 				</p>
// 				<h2 className="uppercase text-3xl font-semibold">{category}</h2>
// 				<a className="font-semibold" href={`/categories/${category}`}>
// 					Read more
// 				</a>
// 			</div>
// 		</div>
// )
// }
