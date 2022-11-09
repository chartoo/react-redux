import React from 'react'

const Capitalize=(str)=>{
    return str.charAt(0).toUpperCase() + str.slice(1);
    }
 
const showDetail=(props) =>{
    let List=Object.entries(props.list).map(([key,value],i)=>{
        var Header=<h2 className='listHeader'><b>{Capitalize(key)}</b></h2>;
        var Detail=Object.entries(value).map(([k,v],index)=>{
            var innerDetail=Object.entries(v).map(([key,val],j)=>(
                <span key={j} className='innerDetail'>
                    <label htmlFor={key}>{Capitalize(key)} - </label>
                    <b>{val}</b>
                </span>
            ))
            return (
                <div key={index} className='detail'>
                    {innerDetail}
                </div>
            )
        })
        return (
            <div key={i}>
                {Header}
                {Detail}
                <hr/>
            </div>
        )
})
  return (
    <div style={{textAlign:"left"}}>{List}</div>
  )
}
export default showDetail;