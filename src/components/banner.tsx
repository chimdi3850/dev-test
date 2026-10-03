import { Phone, Mail} from "lucide-react";
import  facebook from "../assets/images/facebook.svg";
import instagram from '../assets/Images/instagram.svg'
import youtube from '../assets/Images/youtube.svg'
import x from '../assets/Images/x.svg'
import "./banner.css"
import {LinkButton} from '@cloudflare/kumo/components/button'

export function BannerSection(){
    return(
        <div id="container">
           <div className="left">
            <LinkButton icon={Phone} href="tel:(225) 555-0118" className="num">
            (225) 555-0118</LinkButton>
            <LinkButton icon={Mail} href="mailto:michelle.rivera@example.com" className="michelle">michelle.rivera@example.com</LinkButton>
           </div>
           <p>Follow Us  and get a chance to win 80% off</p>
           <p className="left">
            Follow Us:
            <a href="https://instagram.com">
					<img src={instagram}  className="social-icon"/>
				</a>
				<a href="https://instagram.com">
                    <img src={youtube} className="social-icon" />
				</a>
				<a href="https://instagram.com">
					<img src={facebook} className="social-icon" />
				</a>
				<a href="https://instagram.com">
					<img src={x}  className="social-icon" />
				</a>
           </p>
        </div>
    )
}
