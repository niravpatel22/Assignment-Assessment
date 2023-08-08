import React,{lazy,Suspense} from 'react';
import {Route, Routes} from 'react-router-dom' 
import './App.css';



const AdminUserModule = lazy(() => import('./Admin-user'));
function App() {
  return (
    <div className="App">
      <div>
      <h1>My App</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/Admin-user" component={AdminUserModule} />
        </Routes>
      </Suspense>
    </div>
    </div>
  );
}

export default App;
