import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Auth } from './pages/Auth';
import { BookDetails } from './pages/BookDetails';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </main>
        <footer className="bg-white mt-16">
          <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-600">
                We're passionate about bringing the best books to our readers.
                Discover your next favorite book with us.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-gray-600">
                Email: support@bookstore.com<br />
                Phone: (555) 123-4567<br />
                Address: 123 Book Street, Reading City
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Privacy Policy</h3>
              <p className="text-gray-600">
                We take your privacy seriously. Read our privacy policy to learn
                how we protect your data.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;