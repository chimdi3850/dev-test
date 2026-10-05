import { Heart, Search, ShoppingCart, User, Menu, X } from "lucide-react";
import { Button, LinkButton } from "@cloudflare/kumo/components/button"
import './header.css'
import { useSelector } from "react-redux";
import type { RootState } from "../lib/store";
import { useEffect, useState } from "react";


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
                <MobileNav />
            </div>
        </header>
    )
}

const LINKS = ["Home", "Shop", "About", "Blog", "Contact", "Pages"]

export function MobileNav() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (!open) return

        const previousOverflow = document.body.style.overflow
        const desktop = window.matchMedia("(min-width: 769px)")
        const onKeyDown = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
        const onBreakpoint = (e: MediaQueryListEvent) => e.matches && setOpen(false)

        document.body.style.overflow = "hidden"
        document.addEventListener("keydown", onKeyDown)
        desktop.addEventListener("change", onBreakpoint)

        return () => {
            document.body.style.overflow = previousOverflow
            document.removeEventListener("keydown", onKeyDown)
            desktop.removeEventListener("change", onBreakpoint)
        }
    }, [open])

    return (
        <div className="mobile-nav">
            <Button
                variant="ghost"
                icon={open ? X : Menu}
                aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={open}
                aria-controls="mobile-navigation"
                onClick={() => setOpen((v) => !v)}
            />

            <div
                aria-hidden="true"
                onClick={() => setOpen(false)}
                className={`mobile-navbackdrop ${open ? "is-open" : ""}`}
            />

            <nav
                id="mobile-navigation"
                aria-label="Mobile navigation"
                className={`mobile-navpanel ${open ? "is-open" : ""}`}
            >
                <ul className="mobile-navlist">
                    {LINKS.map((label, i) => (
                        <li
                            key={label}
                           className="mobile-navitem"
                            style={{ transitionDelay: open ? `${120 + i * 45}ms` : "0ms" }}
                        >
                            <a
                                href="#"
                                onClick={() => setOpen(false)}
                                className="mobile-navlink"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}