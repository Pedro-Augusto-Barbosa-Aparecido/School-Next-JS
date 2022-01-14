import styles from "./styles.module.css";

import Image from "next/image";
import Link from "next/link";

import $ from "jquery";

export default function Header() {
    function menuIconClick () {


    }

    return (
        <header className={styles.container}>
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
            <div className={styles.menuOpt}>
                <ul>
                    <li>
                        <Link href={"/"}>
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/contact-us"}>
                            <a>Contact us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/support/help/"}>
                            <a>Help</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <i onClick={menuIconClick} className={`bi bi-list ${styles.menu}`}/>
        </header>

    );

}
