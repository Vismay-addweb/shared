import {put,takeEvery} from 'redux-saga/effects'
import * as type from './type'

function* add(data:any){
    yield put({type:'ADD',data:data})
}
function* del(data:any)
{
    yield put({type:'DEL',name:data})
}
function* rootsaga(){
    yield takeEvery(type.ADD,add)
    yield takeEvery(type.DEL,del)
}
export default rootsaga
