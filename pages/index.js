// pages/index.js
import Header from '../components/Header';
import Banner from '../components/Banner';
import CategoryList from '../components/CategoryList';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <CategoryList />
      <Footer />
    </div>
  );
}
