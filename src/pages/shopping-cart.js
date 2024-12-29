'use client';

import Image from "next/image";
import Link from "next/link";

export default function ShoppingCart() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <header className="py-6 px-8 flex justify-between items-center bg-white shadow-md">
        <div className="text-2xl font-bold text-gray-900">NeoTech</div>
        <nav className="flex gap-6 text-gray-700">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <Link href="/" className="hover:text-gray-900">
            Contact
          </Link>
          <Link href="/signup" className="hover:text-gray-900">
            Sign Up
          </Link>
        </nav>
        <div className="relative">
          <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            2
          </span>
          <Link href="/cart" className="text-xl">🛒</Link>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="container mx-auto py-12 px-8 flex flex-col lg:flex-row gap-8">
        {/* Cart Items Section */}
        <div className="">
          <h1 className="text-3xl font-semibold text-gray-800 mb-8">Shopping Cart</h1>

          <div className="space-y-4">
            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src="https://i.pinimg.com/736x/c9/fb/64/c9fb64adf27eba9f2caea391b317abf0.jpg"
                    alt="Product Image"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER,
                      32GB RAM, 1TB SSD, Windows 10 Home, Gaming Keyboard and
                      Mouse 3 Years Warranty
                    </p>
                    <p className="text-lg font-bold text-gray-900">$4,349.00</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <select className="border border-gray-300 rounded px-2 py-1">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <p className="text-lg font-bold text-gray-900">$13,047.00</p>
                  <button className="text-red-600 hover:text-red-800">✖</button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-8">
            <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
              Continue Shopping
            </button>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                Clear Shopping Cart
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                Update Shopping Cart
              </button>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className= " bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Summary</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Estimate Shipping and Tax
              </p>
              <p className="text-xs text-gray-500">
                Enter your destination to get a shipping estimate.
              </p>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-600">Apply Discount Code</p>
            </div>

            <div className="border-t border-gray-300 pt-4">
              <div className="flex justify-between text-sm">
                <p>Subtotal</p>
                <p>$13,047.00</p>
              </div>
              <div className="flex justify-between text-sm">
                <p>Shipping</p>
                <p>$21.00</p>
              </div>
              <div className="flex justify-between text-sm">
                <p>Tax (10%)</p>
                <p>$1.91</p>
              </div>
              <div className="flex justify-between font-bold text-lg mt-2">
                <p>Order Total</p>
                <p>$13,068.00</p>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Proceed to Checkout
            </button>
            <button className="w-full px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">
              Check out with PayPal
            </button>
            <button className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
              Check Out with Multiple Addresses
            </button>
          </div>

          <div className="mt-4 text-sm text-gray-500">
            <p>
              <span className="font-bold">Zip</span> own it now, up to 6 months
              interest free <Link href="/learn-more" className="text-blue-600">learn more</Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
