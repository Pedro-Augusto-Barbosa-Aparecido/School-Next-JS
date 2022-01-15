import styles from "./styles.module.css";

import Image from "next/image";
import Link from "next/link";

import $ from "jquery";

export default function Header() {
    const timeout = 500;
    function toggleMenu () {
        $("#menu").animate({ width: "toggle" }, timeout);
        $("#back-menu").toggle();

    }

    function closeMenu () {
        if (window.innerWidth <= 700) {
            $("#menu").animate({ width: "hide" }, timeout);
            $("#back-menu").hide();

        }

    }

    return (
        <header className={styles.container}>
            <>
                <Image
                    src={"/assets/code-school-symbol-sketch.png"}
                    alt={"Logo"}
                    width={32}
                    height={32}
                    layout={"fixed"}
                    id={"logo"}
                />
                <Link href={"/"}>
                    <a className={styles.title}>Coding School 4k</a>
                </Link>
            </>
            <div id={"back-menu"} onClick={toggleMenu} className={styles.menuOptAux} />
            <div id={"menu"} className={styles.menuOpt}>
                <ul>
                    <li>
                        <Link href={"/"}>
                            <a onClick={closeMenu}>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/contact-us"}>
                            <a onClick={closeMenu}>Contact us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/support/help/"}>
                            <a onClick={closeMenu}>Help</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <i onClick={toggleMenu} className={`bi bi-list ${styles.menu}`}/>
        </header>

    );

}
