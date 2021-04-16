import React from 'react'
import 'common/style/Common.css'
import 'board/style/SeoulCCTV.css'
import axios from 'axios'

const SeoulCCTV = () => {
  axios.get()


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
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
  </tr>
</table>
</div>
        </>
    )
}
export default SeoulCCTV