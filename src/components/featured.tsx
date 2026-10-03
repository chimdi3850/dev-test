import Bookreader from "../assets/Images/book-reader.png"
import Book from "../assets/Images/book.png"
import Growth from "../assets/Images/growth.png"
import  './featured.css'

export function Featured(){
    return(
        <div className="featured">
            <div className="words">
                <h4>Featured Products</h4>
                <h2>THE BEST SERVICES</h2>
                <p>Problems trying to resolve the conflict between</p>
            </div>
            <div className="blue">
                <div className="middle-left">
                    <img src={Bookreader} alt="" />
                    <h4>Easy win</h4>
                    <p>Get your best looking smile now!</p>
                </div>
                <div className="middle">
                    <img src={Book} alt="" />
                    <h4>Concrete</h4>
                    <p>Defalcate is most focused in helping you discover your most beautiful smile</p>
                </div>
                <div className="middle-right">
                    <img src={Growth} alt="" />
                    <h4>Hack Growth</h4>
                    <p>Overcame any hurdle or any other problem.</p>
                </div>
            </div>
        </div>
    )
}