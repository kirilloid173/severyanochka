import Search from '@/app/components/search/Search';
import './style.scss';
import BreadCrumbs from '@/app/components/breadcrumbs/BreadCrumbs';

export default function SearchPage() {
    return (
        <div className='content'>
            <BreadCrumbs />
            <Search />
        </div>
    );
}
