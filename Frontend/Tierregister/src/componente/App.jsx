import './App.css'
import PetList from './PetList'
import PetForm from './PetForm';
import PetBreed from './PetBreed';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PetList />} />
        <Route path="/edit/:id" element={<PetBreed />} />
        <Route path="/new" element={<PetForm />} />
      </Routes>
    </BrowserRouter>
    
    </>
  )
}

export default App
