import { useEffect, useState } from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from 'axios'

const Post = () => {
const {id}= useParams()
    const [data, setData] = useState(null);
    const [newData, setNewData] = useState(null);


    useEffect( () => {
        //Om vi vill använda oss utav axios som vi laddat ner med "npm install axios"
         axios.get(`https://jsonplaceholder.typicode.com/comments`)
            .then(res => setData(res.data))
            
            axios.get(` https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => setNewData(res.data))
    }, []);
    const location = useLocation();

  return (
    // Glöm inte att kolla att vi har data innan vi försöker skriva ut värden från data-objektet
    <div>
    
            {/* <h2>{location.state.title}</h2>
            <h3>{location.state.body}</h3> */}
            {newData && <>
            <h2>{newData.title}</h2>
            <h2>{newData.body}</h2>
            </>}
       
        {data ? data.map((d) => {
                if(d.postId == id){
                    return (
                        <div>
                            <h4>Name: {d.name}</h4>
                            <h4>Email: {d.email}</h4>
                            <p>Comment: {d.body}</p>
                        </div>
                    )
                }
            }) :  undefined
        } 
    </div>
  )
}

export default Post