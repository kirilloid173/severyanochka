import Search from '@/app/components/search/Search';
import './style.scss';
import BreadCrumbs from '@/app/components/breadcrumbs/BreadCrumbs';
import ProductsBlock from '@/app/components/products-block';

export default function ProductsPage() {
    return (
        <div className='content'>
            <BreadCrumbs />
            <Search />
            <ProductsBlock />
        </div>
    );
}
