
import './App.css';
import './styles/style.scss'
import { Route, Routes } from 'react-router-dom';
import SubPage from './routes/subpage.jsx';
import Home from './routes/home.jsx';
import NotFound from './routes/notFound.jsx';
import { useEffect, useState } from 'react';
import { collection, getDocs, orderBy } from 'firebase/firestore';
import { db } from './firebase.jsx';
import firebase from 'firebase/compat/app'; // 수정된 부분
import 'firebase/compat/database'; // 수정된 부분
import { firebaseConfig } from './firebase'; 

firebase.initializeApp(firebaseConfig)
function App() {
  const [data, setData] = useState([]);
  // const [realtime, setRealtime] = useState([]);

  useEffect(() => {
      const fetchData1 = async () => {
          // 파이어베이스 클라우드 데이터베이스
          const usersCollectionRef = collection(db, 'database'); // 참조

          const userSnap = await getDocs(usersCollectionRef, orderBy('data', 'desc')); // 데이터 스냅 받아오기 - 비동기처리
          const data = userSnap.docs.map(doc => ({
              ...doc.data(),
              id: doc.id
          }));
          setData(data);
          return data;
      }
      // 파이어베이스 리얼타임 데이터베이스
      // const fetchData2 = async () => {

      //   try {
      //     const databaseRef = firebase.database().refFromURL("https://portfolio-eun-default-rtdb.asia-southeast1.firebasedatabase.app"); // YOUR_DATABASE_URL 수정
      //     const snapshot = await databaseRef.once("value");
      //     const data = snapshot.val();
      //     setRealtime(data);
      //   } catch (error) {
      //     console.log("Error getting data:", error);
      //   }
      // };
  
      fetchData1();
      // fetchData2();
  }, []);

  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/pages/:id" element={<SubPage data={data} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
