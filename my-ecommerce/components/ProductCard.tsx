'use client';

import { Product } from '@/types/product';
import { ShoppingBag, Check } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useState } from 'react';
import Link from 'next/link';

export default function ProductCard({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between">
      <Link href={`/product/${product.id}`} className="block relative aspect-square w-full bg-gray-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </Link>

      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <span className="text-xs font-medium text-blue-600 uppercase tracking-wider">
            {product.category}
          </span>
          <Link href={`/product/${product.id}`} className="block">
            <h3 className="text-sm font-semibold text-gray-800 line-clamp-2 mt-1 hover:text-blue-600 transition-colors">
              {product.title}
            </h3>
          </Link>
        </div>
        
        <div className="mt-3 flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-gray-900">
            ৳{product.price.toLocaleString('bn-BD')}
          </span>
          <button 
            onClick={handleAddToCart}
            className={`p-2 rounded-lg transition-colors duration-200 ${
              added ? 'bg-green-600 text-white' : 'bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white'
            }`}
          >
            {added ? <Check className="w-5 h-5" /> : <ShoppingBag className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
}
