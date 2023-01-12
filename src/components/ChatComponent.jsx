import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToChat } from '../chatSlice'
const ChatComponent = () => {
    const chat = useSelector((store)=> store.chat)
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    useEffect(()=>{
        const interval = setInterval(()=>{
            dispatch(addToChat("Hello userssss"))
        },1000)

        return ()=> clearInterval(interval)
    },[])
  return ( 
   <>
    <div className='bg-indigo-300 flex flex-col-reverse'>
        {
            chat && chat.map((msg) => (
                <div className='border border-indigo-600 rounded font-mono my-1 p-1 '>{msg}</div>
            ))
        }
       
    </div>
    <div>
         <form onSubmit={(e)=> {
            e.preventDefault()
            dispatch(addToChat(`Namrata is typing.. ${text}`))
            console.log(text)
         }}>
            <input type="text" placeholder='Enter comment..'  
            value={text}
            onChange={(e)=> setText(e.target.value)}
            className='border border-indigo-800 mt-1'/>
        </form>
    </div>
   </>
  )
}

export default ChatComponent