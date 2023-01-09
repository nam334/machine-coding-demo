

import { Provider } from 'react-redux';
import BodyComponent from './components/BodyComponent';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { store } from './store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import VideoDetails from './components/VideoDetails';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <BodyComponent/>,
    },
    {
      path: "/video",
      element: <VideoDetails/>,
    },
  ]);

  return (
    <Provider store={store}>
    <div className="App">
     <Navbar/>
     <div className="grid grid-cols-4 gap-4">
      <div><Sidebar/></div>
      <div>
        {/* <BodyComponent/> */}
        <RouterProvider router={router} />
        </div>
      </div>
    </div>
    </Provider>
  );
}

export default App;
