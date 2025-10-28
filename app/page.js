import styles from './page.module.css';
import Navbar from './components/navbar/Navbar';
import SearchPage from './pages/search';

export default function Home() {
    return (
        <>
            <Navbar />
            <SearchPage />
        </>
    );
}
