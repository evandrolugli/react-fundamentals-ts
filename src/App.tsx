import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css'

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: string

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/evandrolugli.png',
      name: 'Evandro Lugli',
      role: 'Developer'
    },
    content: [
      { type: 'paragraph', content: 'Hi everyone,' },
      { type: 'paragraph', content: 'I have just to realized a new project in my profile. It is a NWL project in AI.' },
      { type: 'link', content: 'evandrolugli/nwl-ai' },
    ],
    publishedAt: new Date('2023-10-05 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator'
    },
    content: [
      { type: 'paragraph', content: 'Hi everyone,' },
      { type: 'paragraph', content: 'I have just to realized a new project in my profile. It is a NWL project in AI.' },
      { type: 'link', content: 'evandrolugli/nwl-ai' },
    ],
    publishedAt: new Date('2023-10-20 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper} >
        <Sidebar />
        
        <main>
          { posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </div>
)}