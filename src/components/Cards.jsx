import Card from "./Card";
import "../components/Cards.css"

export default function Cards({courses,category}){


// function of getCourses return list of all courses array

    // first method to push all courses in single array 

    // function getCourses(){
    //     let allCourse = [];
    //     Object.values(courses).map((courseCategory)=>{
    //         courseCategory.map((course) =>{
    //             allCourse.push(course)
    //         })
    //     })
    //     console.log(allCourse);
    // }


    // second method to push all courses in single array
    function getCourses(){

        if(category === "All"){

            let allCourses = [];
            Object.values(courses).forEach(array => {
                array.forEach(courseData=>{
                    allCourses.push(courseData);
                })
            })
            // console.log(allCourses)
            return allCourses;

        }else{
            return courses[category]
        }

        
    }

    return (
        <div className="cards">
            {
                getCourses().map((course)=>{
                    return <Card
                                 key={course.id} 
                                 course={course}
                            />
                })
            }
        </div>
    )
}