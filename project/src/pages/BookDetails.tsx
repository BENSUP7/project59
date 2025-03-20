import { useParams } from 'react-router-dom';
import { Heart } from 'lucide-react';

export function BookDetails() {
  const { id } = useParams();

  // This would normally come from an API
  const book = {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 9.99,
    coverUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    description: `The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.`,
    reviews: [
      { id: 1, user: 'John Doe', rating: 5, comment: 'A masterpiece of American literature.' },
      { id: 2, user: 'Jane Smith', rating: 4, comment: 'Beautifully written and engaging story.' },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={book.coverUrl} alt={book.title} className="w-full rounded-lg shadow-lg" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{book.title}</h1>
          <p className="text-xl text-gray-600 mb-4">{book.author}</p>
          <p className="text-2xl font-bold text-indigo-600 mb-6">${book.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-8">{book.description}</p>
          
          <div className="flex space-x-4">
            <button className="flex-1 bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors">
              Buy Now
            </button>
            <button className="p-3 border border-gray-300 rounded-md hover:border-indigo-600 hover:text-indigo-600 transition-colors">
              <Heart className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Reviews</h2>
        <div className="space-y-6">
          {book.reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">{review.user}</h3>
                <div className="flex items-center">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}