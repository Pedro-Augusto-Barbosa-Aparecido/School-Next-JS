import styles from "./styles.module.css";

import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";

import $ from "jquery";

export default function Header() {
    const [language, setLanguege] = useState("Português Brasil (pt-br)");
    const [studentName, setStudentName] = useState("pedro augusto barbosa aparecido");

    useEffect(() => {
        $("#bg").hide();

        $("#menuAux>a").hover((ev) => {
            let bg = $("#bg");

            if (window.innerWidth > 950) {
                bg.css("left", $(ev.target).offset().left);
                bg.css("width", $(ev.target).css("width"));
                bg.css("top", 0);
                bg.css("height", $(ev.target).css("height"));
                bg.show();

            } else {
                bg.css("top", `${$(ev.target).offset().top - 120}px`);
                bg.css("width", "150px");
                bg.css("height", $(ev.target).css("height"));
                bg.css("left", 0);
                bg.show();

            }

        }, () => {
            $("#bg").hide();

        });

    }, []);

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
                <div id={"menuAux"} className={styles.menuAux}>
                    <Link href={"/"}>
                        <a href={"/"} className={styles.button} style={{ left: "50px" }}>
                            <i className="bi bi-house-door-fill" />
                            <p>Início</p>
                        </a>
                    </Link>
                    <Link href={"/"}>
                        <a href={"/"} className={styles.button} style={{ left: "150px", width: "150px" }}>
                            <i className="bi bi-briefcase-fill" />
                            <p>Meus Cursos</p>
                        </a>
                    </Link>
                    <Link href={"/"}>
                        <a href={"/"} className={styles.button} style={{ left: "300px", width: "110px" }}>
                            <i className="bi bi-tools" />
                            <p>Opções</p>
                        </a>
                    </Link>
                    <Link href={"/"}>
                        <a href={"/"} className={styles.button} style={{ left: "410px", width: "90px" }}>
                            <i className="bi bi-box-arrow-right" />
                            <p>Sair</p>
                        </a>
                    </Link>
                    <div id={"bg"} className={styles.bg} />
                </div>
            </div>
        </header>

    );

}
