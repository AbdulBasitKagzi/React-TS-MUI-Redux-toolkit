import MainRoutes from './routes/Routes';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const { User } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const [save, setSave] = useState<string>(localStorage.getItem('isAuth') || '');
  useEffect(() => {
    setSave(localStorage.getItem('isAuth') || '');
  }, [User]);
  useEffect(() => {
    // to protect routes
    if (save === 'true') {
      if (location.pathname === '/login') {
        navigate('/');
      } else {
        navigate(location.pathname);
      }
    }
  }, [save, navigate, location.pathname]);
  return (
    <div className="App">
      <MainRoutes />
    </div>
  );
}

export default App;
