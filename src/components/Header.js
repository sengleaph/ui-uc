import Link from "next/link";
import React from "react";

export default function NavBar() {

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold">
          <Link href="/">NeoTech</Link>
        </h1>
        <nav className="flex space-x-6">
          <Link href="/contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </Link>
          <Link href="/login" className="text-gray-600 hover:text-blue-600">
            Sign Up
          </Link>
          <Link href="/cart" className="text-gray-600 hover:text-blue-600">
            Cart
          </Link>
        </nav>
        <input
          type="text"
          placeholder="What are you looking for?"
          className="border border-gray-300 rounded px-4 py-2"
        />
      </div>
    </header>
  );
}