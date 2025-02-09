import './App.css';
import { Routes, Route } from 'react-router-dom';
import { UserProfilePage } from './pages/UserProfilePage';
import { NotFound } from './components/NotFound';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Footer />} />
        <Route path="/profile/:userId" element={<UserProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;