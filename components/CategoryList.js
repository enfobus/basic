// components/CategoryList.js
const categories = [
    { name: 'Danh Thiếp', image: '/images/danhthiep.jpg' },
    { name: 'Vé', image: '/images/ve.jpg' },
    { name: 'Poster', image: '/images/poster.jpg' },
    { name: 'Hộp Giấy', image: '/images/hopgiay.jpg' },
    // Thêm các danh mục khác nếu cần
  ];
  
  export default function CategoryList() {
    return (
      <section className="category-list grid grid-cols-4 gap-4 p-4">
        {categories.map((category, index) => (
          <div key={index} className="category-item text-center p-4 border rounded">
            <img src={category.image} alt={category.name} className="w-16 h-16 mx-auto" />
            <p className="mt-2">{category.name}</p>
          </div>
        ))}
      </section>
    );
  }
  