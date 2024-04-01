import { useEffect, useState } from "react";
import SuggestionList from "./components/SuggestionList";
function App() {
  const [requestData,setRequestData] = useState([])
 useEffect(()=>{
 const fetchApi = async() =>{
  const requestApiData = await fetch("http://localhost:3000/requests")
  const requestedData = await requestApiData.json()
  setRequestData(requestedData)
  console.log(requestedData);
 }
 fetchApi()
 },[])
  return (
    <div className="bg-white p-5 rounded ">
      <div>
        <h4 className="font-semibold text-xl">
          Requested tutorials around the world
        </h4>
        <p className="mt-1 text-sm text-gray-600">
          People have requested the following tutorials.
        </p>
      </div>
      {/* list all requests */}
      <section className="my-10 space-y-10">
        {
          requestData.length == 0 &&
          <div className="text-center px-10">
            <img src="../public/images/icon.jpg" className="mx-auto" alt="icon" />
            <h4 className="text-lg font-semibold">No Data Available</h4>
            <p>Be the first person to feed your request!</p>
          </div>
        }
        {
          requestData.map((list,index)=>{
            return <SuggestionList
                    key={index}
                    technology={list.technology}
                    title={list.title}
                    desc={list.desc}
                     created_at={list.created_at}
                                   />
          })
        }
      </section>
    </div>
  );
}

export default App;
