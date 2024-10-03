import './HomeScreen.scss';

export const HomeScreen = () => {
  return (
    <>
      <header className="header">
        <nav className="header__navigation--mobile"> {/* only mobile */}
          <img src="/shelter-service/images/home__logo.svg" alt="Home" width='28px' height='28px'/>
          <button className='header__navigation--mobile--translate'>EN</button>
          <button className='header__navigation--mobile--account'>
            <img src="/shelter-service/images/exit__logo.svg" alt="Exit" className='header__navigation--mobile--account--image'/>
          </button>
        </nav>

        <nav className='header__navigation'>
          <div className='header__home'>
            <img src="/shelter-service/images/home__logo.svg" alt="Home" />
            <p className='header__home--text'>Притулок житло для переселенців</p>
          </div>

          <div className='header__actions'>
            <ul className='header__list'>
              <li className='header__item'>Підтримати проєкт</li>
              <li className='header__item'>Надати житло</li>
            </ul>
          </div>

          <div className='header__account'>
            <div className='header__language'>
              <h4 className='header__language--text'>Мова</h4>
              <button className='header__language--button'>EN</button>
            </div>

            <button className='header__account--button'>
              <img src="/shelter-service/images/exit__logo.svg" alt="Home" />
              Увійти
            </button>
          </div>
        </nav>

        <div className="header__actions--mobile"> {/* only mobile */}
          <button className="header__button header__button--support">Підтримати проєкт</button>
          <button className="header__button header__button--give">Надати житло</button>
        </div>

        <div className='header__information'>
          <div className='header__block'>
            <h1 className='header__text'>Безкоштовний та зручний спосіб знайти житло для переселенців</h1>
            <button className='header__button header__button--search'>Знайти житло</button>
          </div>
          <img src="/shelter-service/images/header__image.svg" alt="Picture" className='header__image' />
        </div>
      </header>

      <article className='article'> {/* only mobile */}
        <img src="/shelter-service/images/header__image.svg" alt="Picture" className='article__image'/>
        <button className='article__button'>Знайти житло</button>
      </article>

      <main className='main'>
        <section className='main__statistics'>
          <h2 className='main__statistics--main-text'>Наша робота в цифрах</h2>

          <div className='main__container'>
            <article className='main__card'>
              <img src="/shelter-service/images/peoples__image.svg" alt="Peoples image" className='main__card--icon'/>
              <p className='main__card--text'>Знайшли тимчасове помешкання</p>
              <h3 className='main__card--number'>18331</h3>
            </article>

            <article className='main__card'>
              <img src="/shelter-service/images/document__image.svg" alt="Document image" className='main__card--icon'/>
              <p className='main__card--text'>Перевірених та активних оголошень</p>
              <h3 className='main__card--number'>987</h3>
            </article>

            <article className='main__card'>
              <img src="/shelter-service/images/bed__image.svg" alt="Bed image" className='main__card--icon'/>
              <p className='main__card--text'>Доступних місць в помешканнях</p>
              <h3 className='main__card--number'>5842</h3>
            </article>
          </div>
        </section>

        <section className='main__how-it-works'>
          <h2 className='main__how-it-works--main-text'>Як це працює</h2>

          <div className='main__how-it-works--container'>
            <article className='main__how-it-works--card'>
              <img src="/shelter-service/images/point__image.svg" alt="Point image" className='main__how-it-works--icon' />
              <p className='main__how-it-works--text'>Ви залишаєте вашу контактну інформацію та деталі про помешкання.</p>
            </article>

            <article className='main__how-it-works--card'>
              <img src="/shelter-service/images/phone__image.svg" alt="Point image" className='main__how-it-works--icon' />
              <p className='main__how-it-works--text'>Люди, що потребують тимчасового помешкання, вам телефонують.</p>
            </article>

            <article className='main__how-it-works--card'>
              <img src="/shelter-service/images/choice__image.svg" alt="Choice image" className='main__how-it-works--icon' />
              <p className='main__how-it-works--text'>Отримавши запит на бронювання, ви вирішуєте, чи схвалювати його.</p>
            </article>
          </div>
        </section>

        <section className='main__support'>
          <h4 className='main__support--main-text'>Ваша підтримка рятує життя, станьте спонсором тимчасового притулку</h4>

          <div className='main__support--photos-container'>
            <img src="/shelter-service/images/support--first__image.svg" alt="image" className='main__support--photo' />
            <img src="/shelter-service/images/support--second__image.svg" alt="image" className='main__support--photo'/>
          </div>

          <div className='main__support--block'>
            <h5 className='main__support--text'>Щоб підтримати проект оберіть один із варіантів грошових переказів. Ваша пожертва буде направлена на підтримку сімей переселенців в Україні, а також хостів, що надають своє житло в якості прихистку</h5>

            <div className='main__support--container-dotation'>
              <div className='main__support--donation'>
                <img src="/shelter-service/images/BTC__image.svg" alt="BTC image" className='main__support--donation--photo'/>
                <h4 className='main__support--donation--name'>Мережа біткоїн</h4>
              </div>

              <div className='main__support--donation'>
                <img src="/shelter-service/images/monobank__image.svg" alt="Monobank image" className='main__support--donation--photo'/>
                <h4 className='main__support--donation--name'>Монобанк</h4>
              </div>

              <div className='main__support--donation'>
                <img src="/shelter-service/images/privatbank__image.svg" alt="Privatbank image" className='main__support--donation--photo'/>
                <h4 className='main__support--donation--name'>Приватбанк</h4>
              </div>
            </div>
          </div>
        </section>

        <section className='main__reviews'>
          <h3 className='main__reviews--main-text'>Відгуки</h3>

          <div className='main__reviews--container'>
            <article className='main__reviews--card'>
              <img src="/shelter-service/images/family1__image.svg" alt="Family image" className='main__reviews--card--photo'/>
              <div className='main__reviews--card--stars'>
                <div className='main__reviews--card--star-1'></div>
                <div className='main__reviews--card--star-2'></div>
                <div className='main__reviews--card--star-3'></div>
                <div className='main__reviews--card--star-4'></div>
                <div className='main__reviews--card--star-5'></div>
              </div>
              <h4 className='main__reviews--card--text'>Можна багато писати за організацію хорошого. Напишу коротко та головне. Отримували родиною теплу допомогу, все потрібне, нове,та якісне. Тепер не страшні морози і відключення електрики. Дуже вдячні за підтримку і небайдужість до людських проблем.</h4>
            </article>

            <article className='main__reviews--card'>
              <img src="/shelter-service/images/family2__image.svg" alt="Family image" className='main__reviews--card--photo'/>
              <div className='main__reviews--card--stars'>
                <div className='main__reviews--card--star-1'></div>
                <div className='main__reviews--card--star-2'></div>
                <div className='main__reviews--card--star-3'></div>
                <div className='main__reviews--card--star-4'></div>
                <div className='main__reviews--card--star-5'></div>
              </div>
              <h4 className='main__reviews--card--text'>Дякую за теплу допомогу! Всі речі, які я отримала, дуже мені були знадобилися! Нарешті в мене тепла класна ковдра, та зручний матрац! Я мріяла про них цілий рік! А посуд, фонар та інші речі – це дуже корисна допомога для всех нас- тих, у кого більше немає свого дому. Дякую всім </h4>
            </article>

            <article className='main__reviews--card'>
              <img src="/shelter-service/images/family3__image.svg" alt="Family image" className='main__reviews--card--photo'/>
              <div className='main__reviews--card--stars'>
                <div className='main__reviews--card--star-1'></div>
                <div className='main__reviews--card--star-2'></div>
                <div className='main__reviews--card--star-3'></div>
                <div className='main__reviews--card--star-4'></div>
                <div className='main__reviews--card--star-5'></div>
              </div>
              <h4 className='main__reviews--card--text'>На цьому сайті ми і знайшли пана Михайла. Відразу зателофонували і домовилися про заїзд. Ми дуже вдячні вашому сервісу та волонтерам які щодня чимось допомагають.</h4>
            </article>

            <article className='main__reviews--card'>
              <img src="/shelter-service/images/family4__image.svg" alt="Family image" className='main__reviews--card--photo'/>
              <div className='main__reviews--card--stars'>
                <div className='main__reviews--card--star-1'></div>
                <div className='main__reviews--card--star-2'></div>
                <div className='main__reviews--card--star-3'></div>
                <div className='main__reviews--card--star-4'></div>
                <div className='main__reviews--card--star-5'></div>
              </div>
              <h4 className='main__reviews--card--text'>Ваша організація – це просто порятунок для тих, хто опинився в чужому місті без знайомих, родичів, друзів і взагалі без нічого. Дуже дякую за швидкий сервіс пошуку житла, та волонтерам які підтримують проект.</h4>
            </article>
          </div>
        </section>
      </main>

      <footer className='footer'>
        <div className='footer__informations'>
          <div className='footer__informations--logo'>
            <img src="/shelter-service/images/home__logo.svg" alt="Home" className='footer__informations--photo'/>
            <h3 className='footer__informations--text'></h3>
          </div>

          <p className='footer__informations--rights'>Всі права захищені</p>
        </div>

        <div className='footer__support'>
          <p className='footer__support--text'>Підтримати проект</p>

          <div className='footer__support--social'>
            <img src="/shelter-service/images/instagram__image.svg" alt="Instagram image" className='footer__support--social--photo'/>
            <img src="/shelter-service/images/telegram__image.svg" alt="Telegram image" className='footer__support--social--photo'/>
          </div>
        </div>
      </footer>
    </>
  )
}
