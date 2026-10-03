import card from '../assets/Images/card-item.png'
import cardPic from '../assets/Images/picture.png'
import './about.css'

export function About() {
    return (
        <div className="about-us">
            <div className="left-card">
                <h3>What they say about us</h3>
                <img src={card} alt="About Us" />
            </div>
            <div className="right-card">
                <img src={cardPic} alt="About Us" />
            </div>
        </div>
    )
}