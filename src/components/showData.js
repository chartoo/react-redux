import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchData } from "./../actions";
import ShowDetail from './showDetail'

class ShowData extends Component {

componentDidMount(){
 this.props.fetchData();
}


ShowDataInfo=()=>{
    if(this.props.loading){
        return <h2>Loading....</h2>;
    }
    if(this.props.error){
        return (<h3>Error!</h3>)
    }else{
        var listData=this.props.data;
        return Object.values(listData).map((value,index)=>
            <ShowDetail key={index} list={value}/>
        )
    }
}
  render() {
    return (
      <div>{this.ShowDataInfo()}</div>
    )
  }
}
const mapStateToProps = state => ({
    loading: state.loading,
    error: state.error,
    data: state
});

const mapDispatchToProps= {
	fetchData:fetchData
}
export default connect(mapStateToProps, mapDispatchToProps)(ShowData);