import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import { Provider, useDispatch } from 'react-redux';
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
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
      },
      ,
      {
        path: "demo",
        element: (
          <>
            <Demo />
            <Demo2 />
          </>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <Provider store={store}>
       <Header/>
       <RouterProvider router = {appRouter}/>
       </Provider>
    </div>
  );
};

export default App;
