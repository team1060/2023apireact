import { useParams } from 'react-router-dom'

function ViewPort({listData}) {
    let {id} = useParams();

    // let item = listData.find(function (item) {
    //     return item.id == id
    // })

    let item = listData.find((item) => item.id == id)
    
    if (listData.length == 0) {
        return "자료없음"
    }
   
   
    return (
        <>
            {item.title} / {item.content}
            <div><a href="/">홈으로</a></div>
        </>
    )
}

export default ViewPort;