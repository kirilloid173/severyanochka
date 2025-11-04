import Search from '@/app/components/searchBlock/Search';
import BreadCrumbs from '@/app/components/breadcrumbs/BreadCrumbs';
import ProductsBlock from '@/app/components/productsBlock';
import './index.scss';

export default function ProductsPage({ searchByIdCategory }) {
    const resultSearch = searchByIdCategory ? searchByIdCategory : undefined;
    return (
        <div className='content'>
            <BreadCrumbs />
            <Search />
            <ProductsBlock searchByIdCategory={resultSearch} />
        </div>
    );
}
