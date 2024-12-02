import { BrowserRouter, Routes, Route } from "react-router-dom";
import Messages from "@/pages/Messages"
import './App.css'
import { Suspense } from "react";


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path="/messages" element={<Suspense fallback={<div>Loading...</div>}><Messages/></Suspense>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
