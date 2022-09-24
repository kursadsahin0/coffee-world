import React from 'react'
import '../styles/footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div>
        <h3 className='title'>Kahve</h3>
        <ul>
            <li>Türk Kahvesi</li>
            <li>Filtre Kahve</li>
            <li>Yöresel Kahve</li>
            <li>Espresso</li>
            <li>Hazır Kahveler</li>
            <li>Şuruplar</li>
        </ul>
        </div>
        <div >
        <h3 className='title'>Pastacılık</h3>
        <ul>
            <li>Kuvertür Çikolata</li>
            <li>Pul Çikolata</li>
            <li>Unlu Mamüller</li>
            <li>Kakao</li>
        </ul>
        </div>
        <div >
        <h3 className='title'>About Us</h3>
        <ul>
            <li>Hikayemiz</li>
            <li>Üretim</li>
            <li>Kurumsal Çözümler</li>
            <li>Kariyer</li>
            <li>Atölye</li>
            <li>Tüm Mağazalar</li>
            <li>Blog</li>
        </ul>
        </div>
        <div >
        <h3 className='title'>Help</h3>
        <ul>
            <li>Üyelik</li>
            <li>Sipariş İşlemleri</li>
            <li>Ödeme İşlemleri</li>
            <li>Teslimat Süreci</li>
            <li>İade İşlemleri</li>
            <li>Ürün Gamı</li>
            <li>İletişim</li>
        </ul>
        </div>
    </div>
  )
}

export default Footer;
