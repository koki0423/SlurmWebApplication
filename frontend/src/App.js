//src/App.js

import React from 'react';
import {ThemeProvider} from '@mui/material/styles';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import theme from './theme/theme';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import NextcloudService from "./pages/nextcloud/NextcloudService";
import ComputeResourceService from "./pages/compute/ComputeResourceService";
import SystemDetailAndMonitor from "./pages/system/SystemDetailAndMonitor";
import AddJob from "./pages/compute/AddJob";

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
                  <Route path={"/add-job"} element={<AddJob/>}/>
              </Routes>
          </Router>
      </ThemeProvider>
  )
}
export default App;