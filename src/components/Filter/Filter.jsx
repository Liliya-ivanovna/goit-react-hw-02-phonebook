import{Component} from "react";
import PropTypes from 'prop-types';


export class Filter extends Component{
    static propTypes = {
        onFilter: PropTypes.func.isRequired,
        filter: PropTypes.string,
      };


  render(){
    const { filter, onFilter } = this.props;
    return(<><label>Find contacts by name
        <input type="text" 
        name="filter"
        value={filter}
        onChange={onFilter}
        /></label></>
    )}
}