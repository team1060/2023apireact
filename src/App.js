import { Route, Routes } from 'react-router-dom';
import MainListView from './components/MainListViews';
import ViewPort from './components/ViewPost';
import NewPost from './components/NewPost';

function App() {

  return (
    <div className="App">
      <ul>
        <li><a href="/">list</a></li>
        <li><a href="/articles/2">view</a></li>
        <li><a href="/articles">글작성</a></li>
      </ul>
      <Routes>
        <Route path="/" element={<MainListView />}></Route>
        <Route path="/articles/:id" element={<ViewPort />}></Route>
        <Route path="/articles" element={<NewPost />}></Route>
      </Routes>
    </div>
  );
  //   <div className="App">
  //     <Routes>
  //       <Route path='/' element={<MainListView listData={articleData} />}></Route>
  //       <Route path='/article/:id' element={<ViewPort listData={articleData} />} ></Route>
  //     </Routes>
  //   </div>
  // );
}

export default App;
