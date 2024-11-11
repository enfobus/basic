// components/Header.js
import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-black text-white">
      <div className="logo">
        <Link href="/">
          <img src="/logo.jpg" alt="Logo" className="w-32 h-auto" />
        </Link>
      </div>
      <div className="search-bar flex-grow mx-4">
        <input
          type="text"
          placeholder="Tìm sản phẩm"
          className="p-2 w-full border rounded"
        />
      </div>
      <button className="bg-yellow-500 text-black py-2 px-4 rounded">Tìm kiếm</button>
    </header>
  );
}
