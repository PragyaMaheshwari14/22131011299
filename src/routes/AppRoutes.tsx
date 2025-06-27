import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Stats from '../pages/Stats';
import RedirectHandler from '../pages/RedirectHandler';
import NotFound from '../pages/NotFound';

export const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/:code" element={<RedirectHandler />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
);
