import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react';

interface CommentProps {
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment } : CommentProps ){
    
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content); // should be better use ID
    }

    function handleLikeComment() {
        // setLikeCount(likeCount + 1);
        setLikeCount((state) => {
            return state + 1
        })
    }

    return(
        <div className={styles.comment}>
            <Avatar
                hasBorder={false} src="https://github.com/diego3g.png"
                alt=""
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Evandro Lugli</strong>
                            <time title="Nov 12th at 17:50" dateTime="2023-11-12 17:50:00">Around 1 hour ago</time>
                        </div>

                        <button onClick={handleDeleteComment} title="delete comment">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Claps <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}