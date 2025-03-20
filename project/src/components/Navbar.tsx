import { BookOpen, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <BookOpen className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">BookStore</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link to="/" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link to="/categories" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                Categories
              </Link>
              <Link to="/bestsellers" className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                Bestsellers
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/cart" className="p-2 text-gray-600 hover:text-indigo-600">
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <Link to="/auth" className="ml-4 p-2 text-gray-600 hover:text-indigo-600">
              <User className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}