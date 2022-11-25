import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes/Routes';

function App() {

  return (
    <div className='bg-gradient-to-r from-[#075985] to-[#536c7a]  font-medium'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
