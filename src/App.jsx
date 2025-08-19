import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import Cards from './components/Cards'
import {filterData , apiUrl} from './data'
import { toast } from 'react-toastify'
import Spinner from './components/Spinner'


function App() {
  
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);
    try{
      let request = await fetch(apiUrl);
      let response = await request.json();
        // console.log(response);
      console.log(response.data)
      setCourses(response.data);
    }catch(error){
      toast.error('somthing went wrong :');
    }
    setLoading(false);
  }

  useEffect(()=>{
    
    fetchData();

  },[])

  return (
    <>
    <div>
      <Navbar/>
    </div>

    <div>
      <Filter
        filterData= {filterData}
        category = {category}
        setCategory = {setCategory}
      />
    </div>

    <div>
      {
        loading ? 
          (
            <Spinner/>
          ) : (
            <Cards
            courses = {courses}
            category ={category}
            />
          )
      }
    </div>

      
    </>
  )
}

export default App
