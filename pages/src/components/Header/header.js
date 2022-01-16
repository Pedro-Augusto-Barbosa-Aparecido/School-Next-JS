import styles from "./styles.module.css";

import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

import $ from "jquery";

export default function Header() {
    const [language, setLanguege] = useState("Português Brasil (pt-br)");
    const [studentName, setStudentName] = useState("pedro augusto barbosa aparecido");

    function toggleMenu () {
        $("#menu").animate({ height: "toggle" }, 500);

    }

    return (
        <header className={styles.container}>
            <Link href={"/"}>
                <a>
                    <Image
                        src={"/assets/logo/logo-etesr.png"}
                        width={150}
                        height={50}
                        layout={"fixed"}
                        priority
                    />
                </a>
            </Link>
            <i className={`bi bi-list ${styles.iconMenu}`} onClick={toggleMenu} />
            <div id={"menu"} className={styles.menu}>
                <i className={`bi bi-bell-fill ${styles.icon} ${styles.notify}`}/>
                <i className={`bi bi-chat-left-fill ${styles.icon} ${styles.message}`} />
                <i className={`bi bi-globe ${styles.icon} ${styles.language}`} title={language} style={{ marginRight: "10px" }} />
                <div className={styles.containerLanguage}>
                    <i className={`bi bi-globe`} title={language} style={{ marginRight: "10px" }} />
                    { language }
                    <i className="bi bi-caret-down-fill" style={{ marginLeft: "10px" }} />
                </div>
                <div className={styles.containerStudent}>
                    <p>{ studentName.toUpperCase() }</p>
                    <i className={`bi bi-person-circle ${styles.loginImage}`} />
                </div>
                {/*<div className={styles.menuAux}>*/}

                {/*</div>*/}
            </div>
        </header>

    );

}
