import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import React, { Suspense } from "react";
import 'react-toastify/dist/ReactToastify.css'
import { NotFound, Loader, ScrollToTop, Navbar, PrivateRoute } from "./components";
import Home from './pages/Home'
import Event from "./pages/Event";
import Contact from "./pages/Contact";
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NewTicket from './pages/NewTicket';
import Tickets from './pages/Tickets';
import Ticket from './pages/Ticket';

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/event" element={<Event />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route
              path='/dashboard'
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path='/new-ticket'
              element={
                <PrivateRoute>
                  <NewTicket />
                </PrivateRoute>
              }
            />
            <Route
              path='/tickets'
              element={
                <PrivateRoute>
                  <Tickets />
                </PrivateRoute>
              }
            />
            <Route
              path='/ticket/:ticketId'
              element={
                <PrivateRoute>
                  <Ticket />
                </PrivateRoute>
              }
            />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />}></Route>
          </Routes>
        </Suspense>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
