import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'user/style/UserList.css'

const UserList = () => {
    const [List, setList] = useState([])
    const fetchList = () => {
        axios
            .get('http://localhost:8080/user/list')
            .then((res) => {
                console.log(res)
                setList(res.data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchList()
    }, [])

    return (
        <form>
            <div className="table_width" align="center">
                <h1 align="center">회원 목록</h1>

                <table border="1" align="center">
                    <thead>
                        <tr>
                            <th className="table_ttl">유저 고유 번호 </th>
                            <th className="table_ttl">유저 id</th>
                            <th className="table_ttl">비밀번호</th>
                            <th className="table_ttl">이 름</th>
                        </tr>
                    </thead>
                    {List.map((user) => [
                        <tbody>
                            <tr key={user.userNo}>
                                <th className="table_ttl">{user.userNo}</th>
                                <th className="table_ttl">{user.username}</th>
                                <th className="table_ttl">{user.password}</th>
                                <th className="table_ttl">{user.name}</th>
                            </tr>
                        </tbody>,
                    ])}
                </table>
            </div>
            <Link to={`/`}>
                <button>홈으로</button>
            </Link>
        </form>
    )
}
export default UserList
