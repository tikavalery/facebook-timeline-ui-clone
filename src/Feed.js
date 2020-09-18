import React,{useState,useEffect} from 'react';
import "./Feed.css";
import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";
import db from "./firebase";


function Feed() {

    const [post,setPosts] = useState([])
    useEffect(()=>{
db.collection("post").orderBy("timestamp","desc").onSnapshot((snapshot) =>
    setPosts(snapshot.docs.map(doc=>({id:doc.id,data:doc.data()})))
    )
   },[]) 
   console.log(post)
    return (
        <div className="feed">
            {/* StoryReel */}
            <StoryReel/>
            <MessageSender/>
          {post.map((post)=>(
              <Post
              key = {post.id}
              profilePic ={post.data.profilePic}
              message={post.data.message}
              timestamp ={post.data.timestamp}
              username = {post.data.username}
              image ={post.data.image}
            //   key = {"123"}
            //   profilePic ={"https://d2v9ipibika81v.cloudfront.net/uploads/sites/46/2016/01/Group-of-people-with-the-USA-flag-American-youth-concepts.jpg"}
            //   message={"what is my name"}
            //   timestamp ={1236}
            //   username = {"Banadzem Valery"}
            //   image ={"https://d2v9ipibika81v.cloudfront.net/uploads/sites/46/2016/01/Group-of-people-with-the-USA-flag-American-youth-concepts.jpg"}
              />
          ))}
        </div>
    )
}

export default Feed
