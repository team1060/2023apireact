function MainListView({listData}) {
    return (
        <>
            {
                listData.map((item, i) => {
                    return (
                        <li key={i}><a href={`/article/${item.id}`}>{item.title}</a></li>
                    )
                })
            }
        </>
    )
}

export default MainListView;