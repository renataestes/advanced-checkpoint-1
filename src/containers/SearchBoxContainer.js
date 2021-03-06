import { connect } from 'react-redux';
import {loadSearch} from "../actions";
import SearchBox from "../components/SearchBox";


function mapDispatchToProps(dispatch) {
  return {
    loadSearch: function(searchTerm) {
      dispatch(loadSearch(searchTerm));
    }
  };
}

export default connect(null, mapDispatchToProps)(SearchBox);
