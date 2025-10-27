import React from 'react';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />

      {/* 🧱 Main content section */}
      <main style={{ marginTop: '80px' }}>
        <div className="container text-center py-5">
          <h1>Welcome to Rhyno EV</h1>
          <p>Experience the next generation of electric vehicles.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
