import React from "react";
import './css/start-section.css';

const Lesson1Page = () => (
  <div>
    <div>
      <section className="start-section">
        <header className="header">
          <div className="header-logo">
            <img
              src="/img/start-section/logo.png"
              alt=""
              className="header-image"
            />
          </div>
          <nav className="header-menu">
            <li className="header-menu-item active">
              <a href="">Урок 1</a>
            </li>
            <li className="header-menu-item">
              <a href="">Урок 2</a>
            </li>
            <li className="header-menu-item transparent">
              <a href="">Урок 3</a>
            </li>
            <li className="header-menu-item transparent">
              <a href="">Урок 4</a>
            </li>
            <li className="header-menu-item transparent">
              <a href="">Урок 5</a>
            </li>
            <li className="header-menu-item transparent">
              <a href="">Екоекзамен</a>
            </li>
            <li className="header-menu-item main">
              <a href="">Головна</a>
            </li>
          </nav>
        </header>
        <main className="start__content">
          <h1 className="start__content-title">В якому світі ми живемо?</h1>
          <div className="start__content-wrapper">
            <img
              src="/img/start-section/video.png"
              alt=""
              className="start__content-video"
            />
            <div className="start__content-text">
              <p className="start__content-paragraph">
                Що спільного між кораловими рифами в океані та вирубкою лісів?
                Менше дерев — більше вуглецю, а більше CO2 — океан поглинає
                більше викидів та корали зникають.
              </p>
              <p className="start__content-paragraph">
                От і маємо порушення природного балансу, коли фільтри нашої
                планети вже не справляються з навантаженнями. Щось пішло не так
                ще з 1970 року, коли людство почало жити в екоборг. Небо —
                пташкам, річки — рибам, а океани — кораловим рифам.
              </p>
              <p className="start__content-paragraph">
                Чи зможемо ми повернути цей баланс? Давайте розбиратись разом з
                Голубом Робертом.
              </p>
            </div>
          </div>
        </main>
        <footer className="start__footer">
          <div className="start__footer-block">
            <p className="start__footer-block-text">Екодруг</p>
            <img
              src="/img/start-section/arrow.png"
              alt=""
              className="start__footer-block-image"
            />
          </div>
        </footer>
      </section>
    </div>
  </div>
);

export default Lesson1Page;
