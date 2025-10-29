import Search from '@/app/components/searchBlock/Search';
import BreadCrumbs from '@/app/components/breadcrumbs/BreadCrumbs';
import ProductsBlock from '@/app/components/productsBlock';
import './index.scss';

export default function ProductsPage() {
    return (
        <div className='content'>
            <BreadCrumbs />
            <Search />
            <ProductsBlock />
        </div>
    );
}
