import React,{useState} from 'react'
import "./MessageSender.css"
import { Avatar } from '@material-ui/core'
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import Button from '@material-ui/core/Button';
import {useStateValue} from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";

function MessageSender() {
        const [{user},dispatch] = useStateValue();
        const [input,setInput] = useState("")
        const [imageUrl,setImageUrl] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection("post").add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            profilePic:user.photoURL,
            username:user.displayName,
            image:imageUrl
        })
        setInput("")
        setImageUrl("")
    }

    return (
        <div className ="messagesender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form action="">
                    <input 
                    value={input}
                    onChange={(e)=> setInput(e.target.value)}
                    type="text"
                     placeholder={`Whats on your mind,${user.displayName}`}
                     className="messageSender__input"/>
                    <input 
                    value={imageUrl}
                    onChange={(e)=> setImageUrl(e.target.value)}
                    type="text" 
                    placeholder="Insert and IMAGE URL here"/>
                    <button onClick ={handleSubmit} type ="submit">
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
             
             <div className="messageSender__option">
                 
                            
                            <VideocamIcon style={{ color:"red"}}  />
                            <h3>Live Video</h3>      
                 </div> 
            
                <div className="messageSender__option">
                        {/* <Button
                            variant="contained"
                            component="label"
                            > */}
                    
                                <PhotoLibraryIcon style={{color:"green"}} 
                                      />
                                  <h3>Photo/Video</h3>
                            
                                    {/* <input
                                    type="file"
                                    // style={{ display: "none" }}
                                    />
                                  
                           
                            </Button> */}
                 </div>
                 <div className="messageSender__option">
                        {/* <Button
                            variant="contained"
                            component="label"
                            > */}
                            
                            <InsertEmoticonIcon style={{color:"orange"}}/>
                            <h3>Feeling/Activity</h3>
                            
                            {/* <input
                            type="file"
                            style={{ display: "none" }}
                            />
                            </Button> */}
                 </div>  
               
            
            </div>

        </div>
    )
}

export default MessageSender
