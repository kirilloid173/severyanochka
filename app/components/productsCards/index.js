import Search from '../searchBlock/Search';
import BreadCrumbs from '../breadcrumbs/BreadCrumbs';
import ProductsBlock from '../productsBlock';
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
