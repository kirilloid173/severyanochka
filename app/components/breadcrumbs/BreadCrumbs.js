import './index.scss';
import Image from 'next/image';

export default function BreadCrumbs({
    first_link,
    second_link,
    three_link,
    four_link,
    five_link,
}) {
    return (
        <div className='breadcrumbs'>
            {first_link ? (
                <p className={!second_link ? 'breadcrumbs__last-item' : ''}>
                    Главная
                </p>
            ) : null}

            {second_link ? (
                <>
                    <Image
                        src={
                            '/images/svg/breadcrumbs/little_arrow_right_icon.svg'
                        }
                        alt='arrow_right'
                        width={7}
                        height={13}
                    />
                    <p className={!three_link ? 'breadcrumbs__last-item' : ''}>
                        {second_link}
                    </p>
                </>
            ) : null}

            {three_link ? (
                <>
                    <Image
                        src={
                            '/images/svg/breadcrumbs/little_arrow_right_icon.svg'
                        }
                        alt='arrow_right'
                        width={7}
                        height={13}
                    />
                    <p className={!four_link ? 'breadcrumbs__last-item' : ''}>
                        {three_link}
                    </p>
                </>
            ) : null}

            {four_link ? (
                <>
                    <Image
                        src={
                            '/images/svg/breadcrumbs/little_arrow_right_icon.svg'
                        }
                        alt='arrow_right'
                        width={7}
                        height={13}
                    />
                    <p className={!five_link ? 'breadcrumbs__last-item' : ''}>
                        {four_link}
                    </p>
                </>
            ) : null}

            {five_link ? (
                <>
                    <Image
                        src={
                            '/images/svg/breadcrumbs/little_arrow_right_icon.svg'
                        }
                        alt='arrow_right'
                        width={7}
                        height={13}
                    />
                    <p className='breadcrumbs__last-item'>{five_link}</p>
                </>
            ) : null}
        </div>
    );
}
