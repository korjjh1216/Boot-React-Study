import React, {  useEffect } from 'react'
import { useDispatch,useSelector  } from 'react-redux'
import { Link } from 'react-router-dom'
import {getUserList} from '../reduser/user.reducer'
import 'user/style/UserList.css'

const UserList = () => {
    const list = useSelector(state => {
        console.log("콘솔: " + JSON.stringify(state.userReducer))
        return state.userReducer
    });
    const dispatch = useDispatch()
    useEffect(()=>{
        //alert(`1. useEffect `)
        dispatch(getUserList())
    }, [])
    return (<>
        <form>
            <div className="table_width" align="center">
                <h1 align="center">회원 목록</h1>

                <table border="1" align="center">
                    <thead>
                        <tr>
                            <th className="table_ttl">유저 고유 번호 </th>
                            <th className="table_ttl">이 름</th>
                            <th className="table_ttl">유저 id</th>
                            <th className="table_ttl">비밀번호</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map((user, id) => {
                        return (
                            <tr key={id}>
                                <th className="table_ttl">{user.userNo}</th>
                                <th className="table_ttl">{user.name}</th>
                                <th className="table_ttl">{user.username}</th>
                                <th className="table_ttl">{user.password}</th>
                            </tr>)
                        })}
                    </tbody>
                </table>
            </div>
            { <Link to={`/`}>
                <button>홈으로</button>
            </Link> }
        </form>
    </>)
}
export default UserList
