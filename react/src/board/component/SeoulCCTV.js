import React, { useState, useEffect } from 'react'
import 'common/style/Common.css'
import 'board/style/SeoulCCTV.css'
import axios from 'axios'
import getAllCctvs from 'board/service/SeoulCCTV.service'

const SeoulCCTV = () => {
    const [cctvs, setCctvs] = useState([])

    const getAllCctvs = () => {
        axios
            .get(`/data/SeoulCCTV.json`)
            .then((res) => {
                setCctvs(res.data.DATA)
            })
            .catch((err) => {})
    }

    useEffect(() => {
        getAllCctvs()
    }, [])
    return (
        <>
            <h2>서울 유동 인구</h2>
            <div className="table_width">
                <table>
                    <tr>
                        <th className="table_ttl">No.</th>
                        <th className="table_ttl">기준날짜</th>
                        <th className="table_ttl">카메라코드</th>
                        <th className="table_ttl">카메라명칭</th>
                        <th className="table_ttl">설명</th>
                    </tr>
                    {cctvs.map((cctv, id) => {
                        return (
                            <tr key={id}>
                                <td>{id + 1}</td>
                                <td>{cctv.checktime}</td>
                                <td>{cctv.deviceid}</td>
                                <td>{cctv.devicename}</td>
                                <td>{cctv.description}</td>
                            </tr>
                        )
                    })}
                </table>
            </div>
        </>
    )
}
export default SeoulCCTV
