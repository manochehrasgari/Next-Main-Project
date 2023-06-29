import http from "@/services/HttpService";
import { routerPush } from "@/utils/routerPush";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";

const CommentForm = ({id,responseTo,setReply}) => {
    const [commentValue, setCommentValue] = useState("");
    const router = useRouter()

    const commentHandler=(e)=>{
        e.preventDefault()
        const comment = {
            content : commentValue,
            postId : id,
            responseTo : responseTo
        }
        if (commentValue === "") {
            toast.error("لطفا کامنت مورد نطر خود را وارد کنید")
        } else {
            http.post(`/post-comment/save-comment`,comment)
            .then((res)=> {
                toast.success(res.data.message)
                if(setReply) setReply((open) => !open)
                routerPush(router)
                setCommentValue("")
                
            })
            .catch(err => toast.error(err?.response?.data?.message))
        }
    }
    return ( 
        <div>
            <form className='flex flex-col items-start mb-8'>
                <textarea placeholder='نظرت رو برام بنویس ...' value={commentValue} onChange={(e)=>setCommentValue(e.target.value)} className='w-2/3 h-16 mb-2 border border-gray-300 rounded-lg outline-none p-4' name='' id=''></textarea>
                <button type='submit' onClick={commentHandler} className='p-4 bg-purple-500 text-white  rounded-xl w-36'>ارسال نطر</button>
            </form>
        </div>
     );
}
 
export default CommentForm;