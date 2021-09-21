import React from 'react'
import * as type from '../store/type'
const List: React.FC<{data:type.data,deletedata:(string:string)=>void}>  = (props) =>
{
    return(
        <>
        <table className='table'>
            <thead>
                <tr>
                    <th>name</th>
                    <th>age</th>
                    <th>delete</th>
                </tr>
            </thead>
            <tbody>

            {props.data.data.map(data=> (
            <tr key={Math.random()}>
                <td>{data.uname}</td>
                <td>{data.age} </td>
                <td><button className='btn btn-danger' onClick={()=>props.deletedata(data.uname)}>delete</button></td>
            </tr>
            ))}
            </tbody>
        </table>
        </>
    )
}

export default List;