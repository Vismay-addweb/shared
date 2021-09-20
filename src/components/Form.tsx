import { useState } from "react";
import List from "./List";
import {add,del} from '../store/action'
import * as type from './type'
import {useSelector,useDispatch} from 'react-redux'
const Form = () =>
{
    const d = useSelector((state:any)=>state)
    const dispatch  = useDispatch()
    const [uname, setUname] = useState('')
    const [age, setAge]= useState('0')
    const [error,setError] = useState({for:'',message:''})
    const dummy : type.data[] =[{
        uname:'vismay',
        age:22
      },
      {
        uname:'prakash',
        age:22
      }
      ]
      const [data,setData] = useState(dummy)
    const changeUname =  (e:any) =>
    {
        setUname(e.target.value)
    }
    const dell = (unamer:string) =>{
        // setData(data.filter(data=> data.uname !== unamer))
        dispatch(del(unamer))
    }
    const changeAge = (e:any) =>
    {
        setAge(e.target.value)
    }
    const submitted = (e:any) =>{
        e.preventDefault()
        if(uname==='' || parseInt(age)<=0)
        {
            if(uname === '')
            setError({for:'user name ',message:'missing value'})
            if(parseInt(age)<=0)
            setError({for:'age ',message:'less than 0'})
            if(uname===''&& parseInt(age)<=0)
            setError({for:'user name and age ' ,message:'missing'})
            return}
        const submitted_data : type.data ={
            uname:uname,
            age:parseInt(age)
        }    
        dispatch(add(submitted_data))
        setAge('')
        setUname('')
        setData([...data,submitted_data])    
    }
    return(
        <>
        <form onSubmit={submitted}>
            <label> username<input type='text' name='uname' value={uname} onChange={changeUname} /></label><br></br>
            <label> age<input type='number' name='age' value={age} onChange={changeAge} /></label><br></br>
            <input type='submit' value='submit' />
            {error &&  <p>{error.for}{error.message} </p>}
        </form>
        <List data={d} deletedata={dell} />
        </>
    )
}
export default Form;
