import styles from "./styles.module.scss";
import format from "date-fns/format";
import { ptBR } from "date-fns/locale";
import { useState } from "react";
import Switches from "../Switch";

export function Header() {
  const currentDate = format(new Date(), "EEEEEE, d MMMM", { locale: ptBR });
  const [theme, settheme] = useState("dark");
  const transitionTheme = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  };

  const toggleColorTheme = (): void => {
    if (theme === "light") {
      settheme("dark");
      transitionTheme();
      document.documentElement.setAttribute("data-theme", theme);
    } else {
      settheme("light");
      transitionTheme();
      document.documentElement.setAttribute("data-theme", theme);
    }
  };
  return (
    <header className={styles.headerConteiner}>
      <img src="/logo.svg" alt="Podcastr" />
      <p>O melhor para você ouvir, sempre</p>
      <span>Qui, 8 Abril</span>
      <Switches toggleColorTheme={toggleColorTheme} />
    </header>
  );
}
