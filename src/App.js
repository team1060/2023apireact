import axios from 'axios'
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import MainListView from './components/MainListViews';
import ViewPort from './components/ViewPost';

function App() {
  const [articleData, setArticleData] = useState([]);
  const callApi = async () => {
    try {
      const request = await axios.get("http://localhost:8081/api/articles")
      console.log(request.data);
      setArticleData(request.data);
    } catch (error) {
      console.log("error : " + error);
    }
  }
  useEffect(() => {
    callApi()
  }, []
  )
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainListView listData={articleData} />}></Route>
        <Route path='/article/:id' element={<ViewPort listData={articleData} />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
