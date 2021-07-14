import './App.css';
import background_image from '../src/img/top-block/top-block-background.jpg';
import food from '../src/img/top-block/food.png';
import first from '../src/img/main-block/first-spaghetti.png';
import second from '../src/img/main-block/second-spaghetti.png';
import third from '../src/img/main-block/third-spaghetti.png';
import big from '../src/img/main-block/big-spaghetti.png';
import secondbig from '../src/img/main-block/second_big-spaghetti.png';
import facebook from '../src/img/footer/facebook.png';
import twitter from '../src/img/footer/twitter.png';
import instagramm from '../src/img/footer/instagramm.png';
import whatsapp from '../src/img/footer/whatsup.png';
import '../src/css/style.css';
import '../src/fonts/Reey-Regular.otf'
function App() {
  return (
    <div>
      <style>@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
      </style>
      <div className="main">
        <div className="wrap">
          <header>
            <nav className="top-menu">
              <a className="top-menu__home-button" href="#home">
                HOME
                    </a>
              <a className="top-menu__menu-button" href="#menu">
                MENU
                    </a>
              <a className="top-menu__our-story-button" href="#ourstory">
                OUR STORY
                    </a>
              <a className="top-menu__contact-us-button" href="contactus">
                CONTUCT US
                    </a>
            </nav>
          </header>

          <div className="top-block">
            <div className="top-block__content">
              <h1 className="top-block-text">Italian Food
                        <p className="top-block-text-author">LOREMIPSUM DOLOR</p>
                <a className="top-block-text-button" href="#readmore">READ MORE</a>
                <p className="top-block-text-author__quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do iusmod tempor incididunt ut labore et dolore magna. </p>
              </h1>
            </div>
          </div>
          <div className="mid-block">
            <h2 className="mid-block-text">Lorem Ipsum Dolor
                    <p className="mid-block-text-author">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                        lacinia odio vitae vestibulum vestibulum. </p>
            </h2>
          </div>
          <div className="review">
            <div className="review-block">
              <img className="review-block__photo" src={first} alt="" title="" />
              <div className="review-block__name">Lorem Ipsum</div>
              <p className="review-block__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
            </div>
            <div className="review-block">
              <img className="review-block__photo" src={second} alt="" title="" />
              <div className="review-block__name">Lorem Ipsum</div>
              <p className="review-block__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
            </div>
            <div className="review-block">
              <img className="review-block__photo" src={third} alt="" title="" />
              <div className="review-block__name">Lorem Ipsum</div>
              <p className="review-block__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </p>
            </div>
          </div>
          <div className="mid-menu_button">
            <a className="mid-menu__show-more" href="#showmore">
              S H O W&ensp;&ensp;M O R E
                </a>
          </div>
          <div className="mid-block__bottom">
            <h3 className="bottom-text">Lorem Ipsum Dolor</h3>
            <div className="bottom-text__quote">
              <p className="quote__autor">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex quia voluptas sit aspernatur</p>
              <p className="quote__autor">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip.</p>
            </div>
            <div className="bottom-button">
              <a className="button-info" href="#moreinfo">MORE INFO</a>
            </div>
          </div>
          <div className="bottom-block">
            <div className="bottom-block__container">
              <img className="bottom-container__img" src={big} alt="" />
              <div className="bottom-container__content">
                <p className="bottom-container__name">Discount up to
                            50% All Excursions</p>
                <p className="bottom-container__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                <div className="bottom-container__button">
                  <a className="button__more" href="">R E A D&ensp;&ensp;M O R E</a>
                </div>
              </div>
            </div>
            <div className="bottom-block__box">
              <img className="bottom-box__img" src={secondbig} alt="" />
              <div className="bottom-box__content">
                <p className="bottom-box__name">January’s Promo:
                            Buy 1 Get 1 Free!</p>
                <p className="bottom-box__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat.</p>
                <div className="bottom-box__button">
                  <a className="button__more" href="">R E A D&ensp;&ensp;M O R E</a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <div className="footer__title">
              <h4 className="title">Title Here
                         <p className="title__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at dignissim nunc, id maximus ex. Etiam nec dignissim elit, at dignissim enim. </p>
                <a className="instagramm" href="https://www.instagram.com/">&ensp;&ensp;&ensp;
                        </a>
                <a className="facebook" href="https://www.facebook.com/">
                  &ensp;&ensp;&ensp;
                        </a>
                <a className="twitter" href="https://twitter.com/">
                  &ensp;&ensp;&ensp;
                        </a>
                <a className="whatsup" href="https://www.whatsapp.com/">
                  &ensp;&ensp;&ensp;
                        </a>
              </h4>
            </div>
            <div className="footer__about">
              <h4 className="about">About
                        <a className="about-button" href="#showmore">
                  History
                        </a>
                <a className="about-button" href="#showmore">
                  Our Team
                        </a>
                <a className="about-button" href="#showmore">
                  Brand Guidelines
                        </a>
                <a className="about-button" href="#showmore">
                  Terms&Condition
                        </a>
                <a className="about-button" href="#showmore">
                  Privacy Policy
                        </a>
              </h4>
            </div>
            <div className="footer__services">
              <h4 className="services">Services
                        <a className="services-button" href="#showmore">How to Order</a>
                <a className="services-button" href="#showmore">Our Product</a>
                <a className="services-button" href="#showmore">Order Statusr</a>
                <a className="services-button" href="#showmore">Promo</a>
                <a className="services-button" href="#showmore">Payment Method</a>
              </h4>
            </div>
            <div className="footer__other">
              <h4 className="other">Other
                        <a className="other-button" href="">Contact Us</a>
                <a className="other-button" href="">Help</a>
                <a className="other-button" href="">Privacy</a>
              </h4>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
