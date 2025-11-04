import Image from 'next/image';
import './index.scss';
import './mobile.scss';
import './smallMobile.scss';

export default function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer__left-side'>
                    <p className='footer__title'>Магазин</p>
                    <p>О компании</p>
                    <p>Контакты</p>
                    <p>Вакансии</p>
                    <p>Статьи</p>
                    <p>Политика обработки персональных данных</p>
                </div>
                <div className='footer__right-side'>
                    <div className='right-side__icons'>
                        <Image
                            src={'/images/svg/footer/vk_logo_icon.svg'}
                            alt='vk_logo'
                            width={24}
                            height={24}
                        />
                        <Image
                            src={'/images/svg/footer/classmates_logo_icon.svg'}
                            alt='classmates'
                            width={20}
                            height={20}
                        />
                    </div>
                    <div className='right-side__phone'>
                        <Image
                            src={'/images/svg/footer/phone_icon.svg'}
                            alt='phone'
                            width={24}
                            height={24}
                        />
                        <p>8 800 777 33 33</p>
                    </div>
                </div>
            </div>

            {/*  */}

            <div className='footer-mobile'>
                <p className='footer-mobile__title'>Магазин</p>
                <div className='footer-mobile__left-side'>
                    <div className='left-side__row'>
                        <p>О компании</p>
                        <p>Контакты</p>
                        <p>Вакансии</p>
                    </div>
                    <div className='left-side__row'>
                        <p>Статьи</p>
                        <p>Политика обработки персональных данных</p>
                    </div>
                </div>
                <div className='footer-mobile__right-side'>
                    <div className='right-side__phone'>
                        <Image
                            src={'/images/svg/footer/phone_icon.svg'}
                            alt='phone'
                            width={24}
                            height={24}
                        />
                        <p>8 800 777 33 33</p>
                    </div>
                    <div className='right-side__social-media'>
                        <Image
                            src={'/images/svg/footer/vk_logo_icon.svg'}
                            alt='vk_logo'
                            width={24}
                            height={24}
                        />
                        <Image
                            src={'/images/svg/footer/classmates_logo_icon.svg'}
                            alt='classmates'
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
            </div>

            {/*  */}

            <div className='footer-small-mobile'>
                <div className='footer-small-mobile__title-block'>
                    <p className='title-block__title'>Магазин</p>
                    <div className='title-block__phone'>
                        <Image
                            src={'images/svg/footer/phone_icon.svg'}
                            alt='phone_icon'
                            width={24}
                            height={24}
                        />
                        <p>8 800 777 33 33</p>
                    </div>
                </div>
                <div className='footer-small-mobile__links-pages'>
                    <p>О компании</p>
                    <p>Контакты</p>
                    <p>Вакансии</p>
                    <p>Статьи</p>
                    <p>Политика обработки персональных данных</p>
                </div>
                <div className='footer-small-mobile__social-media'>
                    <Image
                        src={'/images/svg/footer/vk_logo_icon.svg'}
                        alt='vk_logo'
                        width={24}
                        height={24}
                    />
                    <Image
                        src={'/images/svg/footer/classmates_logo_icon.svg'}
                        alt='classmates'
                        width={20}
                        height={20}
                    />
                </div>
            </div>
        </>
    );
}
