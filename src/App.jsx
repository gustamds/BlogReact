import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";


import "./global.css";
import styles from "./App.module.css";

// author : {avatar_url: "", name: "", role:""}
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gustaMDS.png',
      name: 'Gustavo Mariano',
      role: 'Front End Dev'
    },
    content:[
      {type: 'paragraph', content: 'Fala galeraa 👋,'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀,'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2022-12-24 20:05:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO ROCKET SEAT'
    },
    content:[
      {type: 'paragraph', content: 'Sou o Diego 👋,'},
      {type: 'paragraph', content: 'Estou te ensinando tudo sobre React'},
      {type: 'link', content: 'google.com'},
    ],
    publishedAt: new Date('2022-12-25 20:05:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return ( 
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  );
}
