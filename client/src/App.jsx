import SuggestionList from "./components/SuggestionList";

function App() {
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
       <SuggestionList/>
      </section>
    </div>
  );
}

export default App;
