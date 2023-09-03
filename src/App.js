import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';
import MainContainer from "./components/MainContainer";
import Watchpage from "./components/WatchPage";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body />,
    children:[
      {
        path:"/",
        element:<MainContainer />
      },
      {
        path:"/watch",
        element:<Watchpage />
      }
    ]
  }
])




function App() {
  return (
    <div>
      <Provider store={store}>
       <Header/>
       <RouterProvider router = {appRouter}/>
       <Body/>
       </Provider>
    </div>
  );
};

export default App;
