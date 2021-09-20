import * as type from './type'

export function add(data:any)
{
    return{
        type:type.ADD,
        data:data
    }
}

export function del(data:string)
{
    return{
        type:type.DEL,
        data:data
    }
}
