import React, { useEffect, useState } from 'react'
import Fuse from "fuse.js";
import Nav from '../../share/components/Nav';
import Eventcard from './components/Eventcard';


function Home() {
    const [data,setdata]=useState(null)
    const [searchTerm, setSearchTerm] = useState("");
    const [results, setResults] = useState(data);

    const fetchdata= async(e)=>{
        


        try {
            const resp=await fetch("http://localhost:3000/home")
            const data=await resp.json()
            setdata(data)
            setResults(data)
            
            
        } catch (error) {
            
        }
    }


    useEffect(()=>{
        fetchdata()
    },[])



    useEffect(() => {
        const timer = setTimeout(() => {
    
         
          if (!searchTerm.trim()) {
            setResults(data);
            return;
          }
    
        
          const fuse = new Fuse(data, {
            keys: ["Event", "Category", "Description"],
            threshold: 0.4,
          });
    
          
          const searchResults = fuse
            .search(searchTerm)
            .map((result) => result.item);
            console.log(searchResults);
            

    
          setResults(searchResults);
    
        }, 3);
        return () => clearTimeout(timer);
    
      }, [searchTerm]);


  return (
    <div>
        <Nav></Nav>
        <h1>events</h1>
        <input type="text"placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
      />

      {results?results.map((event) => (
        <div >
          <Eventcard events={event} />
        </div>
      )):<>loding</>}

        
    </div>
  )
}

export default Home