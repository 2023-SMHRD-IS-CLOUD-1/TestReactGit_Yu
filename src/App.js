import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect } from 'react';
// axios 이용해서 네이버 검색 api (뉴스) 데이터 가져와보기
function App() {
// http://localhost:3000

// ENV 변수 가져오기
const client_id = process.env.REACT_APP_CLIENT_ID
const secret = process.env.REACT_APP_SECRET
  useEffect(()=>{
    axios({
      url:"/v1/search/news.json",
     params:{query:"냉면"},
      headers :{
        'X-Naver-Client-Id' : client_id,
        'X-Naver-Client-Secret': secret
      }
    }).then((result)=>{
      console.log(result)
    })
  })

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
