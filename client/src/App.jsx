import { useEffect, useState } from "react";
import SuggestionList from "./components/SuggestionList";
function App() {
  const [requestData, setRequestData] = useState([]);
  const fetchApi = async () => {
    const requestApiData = await fetch("http://localhost:3000/requests");
    const requestedData = await requestApiData.json();
    setRequestData(requestedData);
    console.log(requestedData);
  };
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <div className="bg-white p-5 rounded ">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="font-semibold text-xl">
            Requested tutorials around the world
          </h4>
          <p className="mt-1 text-sm text-gray-600">
            People have requested the following tutorials.
          </p>
        </div>
        <div>
          <button onClick={fetchApi} className="px-4 py-2 text-white rounded bg-green-500 hover:bg-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="inline-block pb-1"
            >
              <path
                fill="currentColor"
                d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z"
              />
            </svg>
            Refresh
          </button>
        </div>
      </div>
      {/* list all requests */}
      <section className="my-10 space-y-10">
        {requestData.length == 0 && (
          <div className="text-center px-10">
            <img
              src="../public/images/icon.jpg"
              className="mx-auto"
              alt="icon"
            />
            <h4 className="text-lg font-semibold">No Data Available</h4>
            <p>Be the first person to feed your request!</p>
          </div>
        )}
        {requestData.map((list, index) => {
          return (
            <SuggestionList
              key={index}
              technology={list.technology}
              title={list.title}
              desc={list.desc}
              created_at={list.created_at}
            />
          );
        })}
      </section>
    </div>
  );
}

export default App;
