import React from 'react';
import Navbar from './components/Navbar';
import BadgeHeader from './components/BadgeHeader';
import BadgeContent from './components/BadgeContent';
import RelatedBadges from './components/RelatedBadges';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <BadgeHeader />
      <BadgeContent />
      <RelatedBadges />
      <Footer />
    </div>
  );
}

export default App;