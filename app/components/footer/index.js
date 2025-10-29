import './index.scss';
import Image from 'next/image';
export default function Footer() {
    return (
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
    );
}
