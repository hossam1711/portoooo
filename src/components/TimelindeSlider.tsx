"use client";

import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/TimelindeSlider.css";
export default function TimelineSlider() {
  useEffect(() => {
    const mainSlider = new Swiper(".mySwiper2", {
      parallax: true,
      speed: 1200,
      effect: 'slide',
      direction: "vertical",
      autoplay: true,
      navigation: {
        nextEl: '.upk-button-next',
        prevEl: '.upk-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(_index, className) {
          return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="28" height="28" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="10" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="2" stroke-width="3"></circle></svg></span>';
        },
      },
    });

    return () => mainSlider.destroy(true, true);
  }, []);

  return (
    <div className="timeline-slider">
      <div className="bdt-timeline-container">
      <div className="upk-salf-slider-wrapper">
        <div className="swiper mySwiper2">
          <div className="swiper-wrapper">

            {/* Slide 1 */}
            <div className="upk-salf-item swiper-slide">
              <div className="upk-salf-image-wrap">
                <img className="upk-xanc-img" src="https://picsum.photos/id/1011/1200/800" />
              </div>
              <div className="upk-salf-content-wrap">
                <h3 className="upk-salf-title" data-swiper-parallax-y="-150">we help you make modern interior</h3>
                <div className="upk-salf-desc" data-swiper-parallax-y="-200">
                  we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer.
                </div>
                <div className="upk-salf-button" data-swiper-parallax-y="-300">
                  <a className="link link--arrowed" href="#">read more</a>
                </div>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="upk-salf-item swiper-slide">
              <div className="upk-salf-image-wrap">
                <img className="upk-xanc-img" src="https://picsum.photos/id/1026/1200/800" />
              </div>
              <div className="upk-salf-content-wrap">
                <h3 className="upk-salf-title" data-swiper-parallax-y="-150">we help you make modern interior</h3>
                <div className="upk-salf-desc" data-swiper-parallax-y="-200">
                  we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer.
                </div>
                <div className="upk-salf-button" data-swiper-parallax-y="-300">
                  <a className="link link--arrowed" href="#">read more</a>
                </div>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="upk-salf-item swiper-slide">
              <div className="upk-salf-image-wrap">
                <img className="upk-xanc-img" src="https://picsum.photos/id/201/1200/800" />
              </div>
              <div className="upk-salf-content-wrap">
                <h3 className="upk-salf-title" data-swiper-parallax-y="-150">we help you make modern interior</h3>
                <div className="upk-salf-desc" data-swiper-parallax-y="-200">
                  we will help you to make an elegant and luxurius interrior designed by porfessional interrior designer.
                </div>
                <div className="upk-salf-button" data-swiper-parallax-y="-300">
                  <a className="link link--arrowed" href="#">read more</a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Navigation */}
        <div className="upk-salf-navigation">
          <div className="upk-button-prev"><a href="#">Prev</a></div>
          <div className="upk-button-next"><a href="#">Next</a></div>
        </div>

        {/* Pagination */}
        <div className="swiper-pagination" />
      </div>
    </div>
    </div>
  );
}
