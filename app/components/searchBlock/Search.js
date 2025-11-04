import './index.scss';
import Image from 'next/image';

export default function Search() {
    return (
        <div className='search-block'>
            <p>Поиск</p>
            <input type='text' placeholder='Найти товар' />
            <Image
                className='search-block__search-icon'
                src={'/images/svg/search/search_icon.svg'}
                alt='search'
                width={24}
                height={24}
            />
        </div>
    );
}
