import styles from "./Sidebar.module.css";
import { PencilLine } from 'phosphor-react';
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <img
        src="https://media.istockphoto.com/id/486760752/pt/foto/c%C3%B3digo-de-programa%C3%A7%C3%A3o-de-desenvolvimento-de-software-no-computador.jpg?s=1024x1024&w=is&k=20&c=k1WR9IwUJVk61lapbmRzrnJcmyCnFzHD8nrx0nxWZLc="
        alt="Imagem de capa"
        className={styles.cover}
      />

      <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/71940473?v=4" />
        <strong>Gustavo Mariano</strong>
        <span>Front End Developer</span>
      </div>

      <footer>
        <a href="#">
            <PencilLine 
              size={20}
            />
            Editar seu perfil
        </a>
      </footer>

    </aside>
  );
}
