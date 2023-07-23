import{Component} from "react";
import PropTypes from 'prop-types';
import {Input,Label} from './Filter.styled'

export class Filter extends Component{
    static propTypes = {
        onFilter: PropTypes.func.isRequired,
        filter: PropTypes.string,
      };


  render(){
    const { filter, onFilter } = this.props;
    return(<><Label>Find contacts by name
        <Input type="text" 
        name="filter"
        value={filter}
        onChange={onFilter}
        /></Label></>
    )}
}