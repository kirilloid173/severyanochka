import Link from 'next/link';
import Image from 'next/image';
import './index.scss';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar__inner-content'>
                <div className='navbar__left-side'>
                    <Link href='/products/'>
                        <h1 className='navbar__title'>Магазин</h1>
                    </Link>
                    <button className='navbar__button-catalog'>
                        <Image
                            src={
                                '/images/svg/navbar_icons/button_menu_icon.svg'
                            }
                            alt='icon'
                            width={24}
                            height={24}
                        />{' '}
                        Каталог
                    </button>
                </div>
                <div className='navbar__right-side'>
                    <div className='right-side__ui-button'>
                        <Image
                            src={
                                '/images/svg/navbar_icons/heart_navbar_icon.svg'
                            }
                            alt='heart'
                            width={24}
                            height={24}
                        />
                        <p>Избранное</p>
                    </div>
                    <div className='right-side__ui-button'>
                        <Image
                            src={'/images/svg/navbar_icons/box_navbar_icon.svg'}
                            alt='heart'
                            width={24}
                            height={24}
                        />
                        <p>Заказы</p>
                    </div>
                    <div className='right-side__ui-button'>
                        <Image
                            src={
                                '/images/svg/navbar_icons/basket_navbar_icon.svg'
                            }
                            alt='heart'
                            width={24}
                            height={24}
                        />
                        <p>Корзина</p>
                    </div>
                    <div className='navbar__submenu'>
                        <Image
                            src={
                                '/images/png/navbar_images/alexandr_small_circle_image.png'
                            }
                            alt='icon_avatar'
                            width={40}
                            height={40}
                        />
                        <p>Алексей</p>
                        <Image
                            src={
                                '/images/svg/navbar_icons/stroke_down_icon.svg'
                            }
                            alt='stroke_down'
                            width={13}
                            height={7}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
