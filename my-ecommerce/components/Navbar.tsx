'use client';

import { ShoppingBag, Search, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useCartStore } from '@/store/useCartStore';

export default function Navbar() {
  const cart = useCartStore((state) => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              SuperStore
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-3">
            
            {/* Admin Link */}
            <Link 
              href="/admin" 
              className="flex items-center gap-1 text-xs font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 px-3 py-1.5 rounded-full border border-purple-200 transition-colors"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>অ্যাডমিন</span>
            </Link>

            {/* Cart Link */}
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-blue-600 transition-colors">
              <ShoppingBag className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
