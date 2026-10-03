import { Heart, Search, ShoppingCart, User } from "lucide-react";
import { Button, LinkButton } from "@cloudflare/kumo/components/button"
import './header.css'
import { useSelector } from "react-redux";
import type { RootState } from "../lib/store";


export function Header(){
    const itemCount = useSelector((state: RootState) =>
        state.cart.reduce((total, item) => total + item.numberChosen, 0)
    )

    return (
        <header>
            <nav id="nav-bar">
                <h2>Bandage</h2>
                <ul id="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Pages</a></li>
                </ul>
            </nav>
            <div id="nav-content">
               <LinkButton href="#">
                 <User id="icon" style={{ color: "rgb(20, 109, 219)" }} />
                <span style={{color: "rgb(20, 109, 219)" }}> Login / Register</span>
               </LinkButton>
                <Button variant="ghost"  icon={Search} />
			<Button variant="ghost" icon={ShoppingCart} aria-label={`Shopping cart, ${itemCount} items`}>
                {itemCount}
            </Button>
				<Button variant="ghost" icon={Heart} />
            </div>
        </header>
    )
}
