import proptypes from 'prop-types'
import { formatDate } from '../helpers';
const SuggestionList = ({title,technology,desc,created_at}) => {
    return ( 
        <div className="border rounded flex items-center space-x-4">
        <img src={`https://ui-avatars.com/api/?name=${technology}&background=random&color=fff&length=4&font-size=0.22&bold=true`}
            alt={technology} className="w-32 h-32 rounded" />

          <div className="p-5">
            <h3 className="font-semibold text-lg">{title}</h3>
            <div className="text-gray-700 text-sm">{desc}</div>
            <small className="text-xs text-gray-700">{formatDate(created_at)}</small>
            </div>
        </div>
     );
}
 SuggestionList.prototype = {
  title: proptypes.string,
  technology: proptypes.string,
  desc: proptypes.string,
  created_at: proptypes.string,
 }
export default SuggestionList;