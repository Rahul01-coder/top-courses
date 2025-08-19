import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import "../components/Card.css"
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function Card({course}){

    const [isLike, setIsLike] = useState(false);

    function likeHandler(){
        setIsLike(!isLike);
        if (!isLike) {
            toast.success("Liked ❤️");
        } else {
            toast.warning("Unliked 💔");
         }
    }

    return (
        <div className="Card">
            <div>
                <img src={course.image.url} className="course-img"/>

                <div onClick={likeHandler}>
                    <button className="like">
                        {!isLike ? <FcLikePlaceholder className="like-btn"/> : <FcLike className="like-btns"/> }
                    </button>
                </div>
            </div>
            <div className="course-data">
                <p className="title">{course.title}</p>
                <p className="discription">
                    {
                        course.description.length > 100 ? 
                        (course.description.substr(0,100)) + "...":
                        (course.description) 
                    }
                </p>
            </div>
        </div>
    )
}