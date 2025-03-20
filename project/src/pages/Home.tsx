import { Search } from 'lucide-react';
import { BookCard } from '../components/BookCard';

const featuredBooks = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 9.99,
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    description: 'A classic novel about the American Dream.',
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 12.99,
    coverUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800',
    description: 'A powerful story of racial injustice and childhood innocence.',
  },
  {
    id: '3',
    title: '1984',
    author: 'George Orwell',
    price: 11.99,
    coverUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800',
    description: 'A dystopian novel about surveillance and control.',
  },
];

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 h-full flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
            Discover Your Next Great Read
          </h1>
          <div className="w-full max-w-2xl relative">
            <input
              type="text"
              placeholder="Search for books..."
              className="w-full px-6 py-4 rounded-full text-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2">
              <Search className="h-6 w-6 text-gray-400" />
            </button>
          </div>
        </div>
      </div>

      {/* Featured Books Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}