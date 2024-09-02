//src/App.js

import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import theme from './theme/theme';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import NextcloudService from "./pages/NextcloudService";
import ComputeResourceService from "./pages/ComputeResourceService";
import SystemDetailAndMonitor from "./pages/SystemDetailAndMonitor";

function App(){
  return (
      <ThemeProvider theme={theme}>
          <Router>
              <Routes>
                  <Route path="/" element={<MainPage />} />
                  <Route path="/login" element={<Login />} />
                    <Route path="/mypage" element={<MyPage />} />
                  <Route path={"/service1"} element={<NextcloudService/>}/>
                  <Route path={"/service2"} element={<ComputeResourceService/>}/>
                  <Route path={"/service3"} element={<SystemDetailAndMonitor/>}/>
              </Routes>
          </Router>
      </ThemeProvider>
  )
}
export default App;