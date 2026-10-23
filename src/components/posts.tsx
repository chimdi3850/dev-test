import Bed from '../assets/Images/featured-posts.png'
import './posts.css'

export function Posts(){
    return(
         <div className="posts">
            <div className="feature-post">
                <h5>Practice Advice</h5>
                <h3>Featured Posts</h3>
            </div>
              <div className="featured-img">
                <img src={Bed} alt="" />
              </div>
        </div>
    )
}

// function PostCard({post, image}: {post: Post, image: string}) {
//     const {data} = useGetCommentsQuery(post.id)
//     return (
//         <div className="post-comm">
//             <img src={image} alt={post.title} className="tour"/>
//             <div className="write">
//                 <div className="tag">{post.tags.map((t) => t).join(' ')}</div>
//                 <h3 className="feel">{post.title}</h3>
//                 <p>{post.body}</p>
//             </div>
//             <div className="comment">
//                 {data?.total} comments
//             </div>
//            <a href="#" className="more">Learn More <span aria-hidden="true" className="arrow">→</span></a>
//         </div>
//     )
// }



            {/* <div className="posts-list">
                {data ? 
                <>
                <PostCard image={Lobby} post={data.posts[0]} />
                <PostCard image={Counter} post={data.posts[1]} />
                <PostCard image={Bed} post={data.posts[2]} />
                </> : 'Loading...'
                }
            </div> */}