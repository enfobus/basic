// pages/index.js
import { fetchServices } from '../lib/contentful';
import Header from '../components/Header';
import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import Footer from '../components/Footer';

export async function getStaticProps() {
  const services = await fetchServices();
  return {
    props: {
      services,
    },
  };
}

export default function Home({ services }) {
  return (
    <div>
        <Header />
        <Banner />
      <h1>Our Services</h1>
      <div className="service-list grid grid-cols-3 gap-4 p-4">
        {services.map((service) => (
          <div key={service.id} className="service-item border p-4 rounded">
            <h2 className="text-xl font-bold">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
            <p className="text-red-500 font-semibold">{service.urgency}</p>
            {service.imageUrl && (
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-48 object-cover mt-4"
              />
            )}
          </div>
        ))}
      </div>
      <CategoryList />
      <Footer />
    </div>
  );
}
