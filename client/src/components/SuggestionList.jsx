const SuggestionList = () => {
    return ( 
        <div className="border rounded flex items-center space-x-4">
        <img src="https://ui-avatars.com/api/?name=Java&background=random&color=fff&length=4&font-size=0.22&bold=true"
            alt="Vignesh" className="w-32 h-32 rounded" />

          <div className="p-5">
            <h3 className="font-semibold text-lg">Java for Beginners</h3>
            <div className="text-gray-700 text-sm">Description</div>
            <small className="text-xs text-gray-700">03:00 PM 4,Mar 2024</small>
            </div>
        </div>
     );
}
 
export default SuggestionList;