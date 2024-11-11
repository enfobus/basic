// pages/index.js
import { getEntriesByContentType } from '../lib/contentful';
import Header from '../components/Header';
import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import Footer from '../components/Footer';

export async function getServerSideProps() {
  const nhanvienEntries = await getEntriesByContentType('nhanvien');
  const serviceEntries = await getEntriesByContentType('service');

  return {
    props: {
      nhanvienEntries,
      serviceEntries,
    },
  };
}

export default function Home({ nhanvienEntries, serviceEntries }) {
  return (
    <div>
        <Header />
        <Banner />
        <h1>Nhân viên</h1>
      <div className="card-container">
        {nhanvienEntries.map((entry) => (
          <div key={entry.sys.id} className="card">
            <img src={entry.fields.hinh.fields.file.url} alt={entry.fields.ten} className="card-image" />
            <h2>{entry.fields.ten}</h2>
            <p>Chức vụ: {entry.fields.chucvu}</p>
          </div>
        ))}
      </div>

      <h1>Dịch vụ</h1>
      <div className="card-container">
        {serviceEntries.map((entry) => (
          <div key={entry.sys.id} className="card">
            <img src={entry.fields.image.fields.file.url} alt={entry.fields.title} className="card-image" />
            <h2>{entry.fields.title}</h2>
            <p>{entry.fields.description}</p>
            <p>Mức độ khẩn cấp: {entry.fields.urgency}</p>
          </div>
        ))}
      </div>
      <CategoryList />
      <Footer />
      <style jsx>{`
        .card-container {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }
        .card {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          max-width: 300px;
          text-align: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .card-image {
          width: 100%;
          height: auto;
          border-radius: 4px;
          margin-bottom: 8px;
        }
        h2 {
          font-size: 1.25rem;
          margin: 0.5rem 0;
        }
        p {
          font-size: 1rem;
          color: #666;
        }
      `}</style>
    </div>
  );
}
