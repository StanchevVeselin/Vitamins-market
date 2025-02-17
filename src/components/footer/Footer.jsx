// Footer.js
import './footer.css'; // Импорт на CSS стиловете

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-2">
            <h3>Информация</h3>
            <ul>
              <li><span >За мен - Независим дистрибутор </span></li>
              <li><span >Доставка</span></li>
              <li><span >Декларация за поверителност</span></li>
              <li><span >Условия за ползване</span></li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h3>Полезни връзки</h3>
            <ul>
              <li><span >Контакти</span></li>
              <li><span >Карта на сайта</span></li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h3>Профил</h3>
            <ul>
              <li><span >Профил</span></li>
              <li><span >История на поръчките</span></li>
              <li><span >Бюлетин</span></li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h3>Свържи се с нас</h3>
            <div className="foot-phone">
              <div className="fleft">
                <i className="fa fa-phone"></i>
              </div>
              <div className="extra-wrap">
                <div>0999 222 237</div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div style={{ paddingLeft: '14px' }}>
            Този сайт е собственост на независимия дистрибутор на компания VISION International People Group Тонка Трендафилова. Информацията е получена от официалните сайтове: www.visionbulgaria.com, www.visionbalkan.com, и друга рекламна продукция на компания "Vision International People Group".
          </div>
        </div> */}
      </div>
      <div id="powered">
        <div className="container">
        </div>
      </div>
    </footer>
  );
}

export default Footer;
