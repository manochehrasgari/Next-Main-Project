import { useState } from "react";

const CommentForm = ({comment,setComment}) => {
    
    return ( 
        <div>
            <form className='flex flex-col items-start mb-8'>
                <textarea placeholder='نظرت رو برام بنویس ...' value={comment} onChange={(e)=>setComment(e.target.value)} className='w-2/3 h-16 mb-2 border border-gray-300 rounded-lg outline-none p-4' name='' id=''></textarea>
                <button type='submit' className='p-4 bg-purple-500 text-white  rounded-xl w-36'>ارسال نطر</button>
            </form>
        </div>
     );
}
 
export default CommentForm;