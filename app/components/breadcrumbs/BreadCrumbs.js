import './index.scss';
import Image from 'next/image';

export default function BreadCrumbs() {
    return (
        <div className='breadcrumbs'>
            <p>Главная</p>
            <Image
                src={'/images/svg/breadcrumbs/little_arrow_right_icon.svg'}
                alt='arrow_right'
                width={7}
                height={13}
            />
            <p className='breadcrumbs__search-text'>Поиск</p>
        </div>
    );
}
