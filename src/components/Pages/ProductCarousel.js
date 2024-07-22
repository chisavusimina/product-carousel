import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import data from './ProductData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export const ProductCarousel = () => {
  return (
    <>
      <div className="page-title">
        <h2>Related Products</h2>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          1200: {
            slidesPerView: 2,
            centeredSlides: false,
            centeredSlidesBounds: false,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        loop={true}
        allowSlideNext={true}
        allowSlidePrev={true}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div class="featured-products d-flex justify-content-between">
              <div className="image">
                <figure className="image-box">
                  <img src={item.image} alt={item.name} />
                </figure>
              </div>
              <div className="product-info d-flex column justify-content-center">
                <div className="product-title">
                  <h4>{item.name}</h4>
                </div>
                <div className="product-price">
                  <p className="original-price">&euro; {item.original_price}</p>
                  <p className="discounted-price">&euro; {item.discounted_price}</p>
                  <p className="availability d-flex justify-content-end">Delivery in 1 - 3 days</p>
                </div>
                <form action="" method="post">
                  <div className="product-quantity d-flex column align-items-center">
                    <div className="quantity-box d-flex justify-content-center align-items-center rounded-5">
                      <FontAwesomeIcon icon={solid('minus')} />
                      <input type="number" value="1" />
                      <FontAwesomeIcon icon={solid('plus')} />
                    </div>
                  </div>
                  <div className="product-btn d-flex column align-items-center">
                    <button type="submit" className="d-flex justify-content-center align-items-center rounded-5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" className="shopping-cart">
                        <g id="icon-cart" transform="translate(-1543 -353.5)">
                          <rect id="Rectangle_11" data-name="Rectangle 11" width="45" height="45" transform="translate(1543 353.5)" fill="none" />
                          <path
                            id="Icon_material-shopping-cart"
                            data-name="Icon material-shopping-cart"
                            d="M8.464,21.57a2.321,2.321,0,1,0,2.321,2.321A2.318,2.318,0,0,0,8.464,21.57ZM1.5,3V5.321H3.821L8,14.13,6.433,16.974a2.244,2.244,0,0,0-.29,1.114,2.328,2.328,0,0,0,2.321,2.321H22.391V18.088H8.951a.287.287,0,0,1-.29-.29l.035-.139L9.74,15.767h8.647a2.31,2.31,0,0,0,2.031-1.2l4.155-7.532a1.134,1.134,0,0,0,.139-.557,1.164,1.164,0,0,0-1.161-1.161H6.386L5.3,3ZM20.07,21.57a2.321,2.321,0,1,0,2.321,2.321A2.318,2.318,0,0,0,20.07,21.57Z"
                            transform="translate(1552.394 361.394)"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                      <span>Add to cart</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="icon-box d-flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="45.8" height="45.8" viewBox="0 0 45.8 45.8" className="compare-btn">
                  <g id="icon-favorite" transform="translate(-1597.6 -95.6)">
                    <rect id="Rectangle_10" data-name="Rectangle 10" width="45" height="45" transform="translate(1598 96)" fill="none" />
                    <path
                      id="Icon_material-compare-arrows"
                      data-name="Icon material-compare-arrows"
                      d="M15.649,23.74H3v3.609H15.649v5.413l7.2-7.218-7.2-7.218Zm10.791-1.8V16.522H39.089V12.913H26.44V7.5l-7.2,7.218Z"
                      transform="translate(1591.384 119.146) rotate(-45)"
                      fill="none"
                      stroke="#000"
                      stroke-width="1"
                    />
                  </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" width="800px" height="800px" viewBox="0 0 256 256" id="Flat" className="heart">
                  <path d="M128.00586,220a3.993,3.993,0,0,1-1.9541-.51,312.79378,312.79378,0,0,1-50.72168-37.01685C41.27344,151.82263,24.00586,121.38306,24.00586,92a56.013,56.013,0,0,1,104-28.87823A56.013,56.013,0,0,1,232.00586,92c0,29.38306-17.26758,59.82263-51.32422,90.47314A312.79378,312.79378,0,0,1,129.96,219.49,3.993,3.993,0,0,1,128.00586,220Zm-48-176a48.054,48.054,0,0,0-48,48c0,59.701,82.17578,111.14148,96,119.36853,13.82422-8.227,96-59.66754,96-119.36853a48.00892,48.00892,0,0,0-92.30957-18.49268,3.99954,3.99954,0,0,1-7.38086,0A47.90343,47.90343,0,0,0,80.00586,44Z" />
                </svg>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
