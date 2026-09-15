import Navbar from '@/components/Navbar';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';

const dummyProducts: Product[] = [
  { id: '1', title: 'ওয়্যারলেস নয়েজ ক্যানসেলিং হেডফোন', price: 4500, category: 'ইলেকট্রনিক্স', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500', rating: 4.8 },
  { id: '2', title: 'স্মার্ট মেটাল ওয়াচ ৭ম জেনারেশন', price: 3200, category: 'গ্যাজেট', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500', rating: 4.5 },
  { id: '3', title: 'ক্যাজুয়াল স্পোর্টস রানিং শু', price: 2800, category: 'ফ্যাশন', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500', rating: 4.7 },
  { id: '4', title: 'মিনিমালিস্ট লেদার ব্যাকপ্যাক', price: 3500, category: 'লাইফস্টাইল', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500', rating: 4.6 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white mb-10 shadow-md">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4">
            সুপারফাস্ট ই-কমার্স এক্সপেরিয়েন্স
          </h1>
          <p className="text-blue-100 text-lg mb-6 max-w-xl">
            কোনো লোডিং টাইম ছাড়াই সেরা দামে কেনাকাটা করুন অতি দ্রুত ও সহজে।
          </p>
          <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-xl shadow hover:bg-blue-50 transition-colors">
            শপ করুন
          </button>
        </div>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">ট্রেন্ডিং প্রোডাক্টস</h2>
            <a href="#" className="text-sm font-semibold text-blue-600 hover:underline">সবগুলো দেখুন →</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {dummyProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
