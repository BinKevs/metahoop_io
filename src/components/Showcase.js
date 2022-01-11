import React from "react";
import Carousel, {
  Dots,
  slidesToShowPlugin,
  arrowsPlugin,
} from "@brainhubeu/react-carousel";

import "@brainhubeu/react-carousel/lib/style.css";

import curry from "../static/CURRY.png";
import garnet from "../static/GARNET.png";
import jwall from "../static/JWALL.png";
import iguodala from "../static/IGUODALA.png";
import thompson from "../static/THOMPSON.png";
import wade from "../static/WADE.png";
import westbrook from "../static/WESTBROOK.png";

import ring_left from "../static/B_HOOP_C.png";
import ring_right from "../static/B_HOOP_D.png";

import arrow_left from "../static/left.png";
import arrow_right from "../static/right.png";

class Showcase extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 3,
      slides: [
        <div className="md:p-14 p-3 mb-5">
          <img class={"md:w-96 w-full rounded-xl"} src={curry} />
          <div className="font-Oswald space-y-5">
            <span className="text-4xl font-bold">Lorem</span>

            <div className="flex justify-between text-lg">
              <span>Price</span>
              <span>2ETH ($3012)</span>
            </div>
            <div className="text-2xl">Ipsum</div>
            <button
              class={
                "p-4 text-md ont-Oswald font-bold w-full  bg-black hover:bg-white text-orange-400"
              }
            >
              MINT
            </button>
          </div>
        </div>,
        <div className="md:p-14 p-3  mb-5">
          <img class={"md:w-96 w-full rounded-xl"} src={garnet} />
          <div className="font-Oswald space-y-5">
            <span className="text-4xl font-bold">Lorem</span>

            <div className="flex justify-between text-lg">
              <span>Price</span>
              <span>2ETH ($3012)</span>
            </div>
            <div className="text-2xl">Ipsum</div>
            <button
              class={
                "p-4 text-md ont-Oswald font-bold w-full  bg-black hover:bg-white text-orange-400"
              }
            >
              MINT
            </button>
          </div>
        </div>,
        <div className="md:p-14 p-3  mb-5">
          <img class={"md:w-96 w-full rounded-xl"} src={jwall} />
          <div className="font-Oswald space-y-5">
            <span className="text-4xl font-bold">Lorem</span>

            <div className="flex justify-between text-lg">
              <span>Price</span>
              <span>2ETH ($3012)</span>
            </div>
            <div className="text-2xl">Ipsum</div>
            <button
              class={
                "p-4 text-md ont-Oswald font-bold w-full  bg-black hover:bg-white text-orange-400"
              }
            >
              MINT
            </button>
          </div>
        </div>,
        <div className="md:p-14 p-3  mb-5">
          <img class={"md:w-96 w-full rounded-xl"} src={iguodala} />
          <div className="font-Oswald space-y-5">
            <span className="text-4xl font-bold">Lorem</span>

            <div className="flex justify-between text-lg">
              <span>Price</span>
              <span>2ETH ($3012)</span>
            </div>
            <div className="text-2xl">Ipsum</div>
            <button
              class={
                "p-4 text-md ont-Oswald font-bold w-full  bg-black hover:bg-white text-orange-400"
              }
            >
              MINT
            </button>
          </div>
        </div>,
        <div className="md:p-14 p-3  mb-5">
          <img class={"md:w-96 w-full rounded-xl"} src={thompson} />
          <div className="font-Oswald space-y-5">
            <span className="text-4xl font-bold">Lorem</span>

            <div className="flex justify-between text-lg">
              <span>Price</span>
              <span>2ETH ($3012)</span>
            </div>
            <div className="text-2xl">Ipsum</div>
            <button
              class={
                "p-4 text-md ont-Oswald font-bold w-full  bg-black hover:bg-white text-orange-400"
              }
            >
              MINT
            </button>
          </div>
        </div>,
        <div className="md:p-14 p-3  mb-5">
          <img class={"md:w-96 w-full rounded-xl"} src={wade} />
          <div className="font-Oswald space-y-5">
            <span className="text-4xl font-bold">Lorem</span>

            <div className="flex justify-between text-lg">
              <span>Price</span>
              <span>2ETH ($3012)</span>
            </div>
            <div className="text-2xl">Ipsum</div>
            <button
              class={
                "p-4 text-md ont-Oswald font-bold w-full  bg-black hover:bg-white text-orange-400"
              }
            >
              MINT
            </button>
          </div>
        </div>,
      ],
    };
    this.onchange = this.onchange.bind(this);
  }

  handleChangeCenterOnClick(Position) {
    return (event) => {
      event.preventDefault();
      this.setState({ value: Position });
    };
  }
  onchange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div
        id="ShowcasePage"
        className="bg-half-court bg-cover bg-no-repeat bg-center h-screen relative"
      >
        <div className="flex h-full">
          <div className="w-full m-auto">
            <div className="font-Oswald font-bold md:text-5xl text-3xl text-showcase-text-color text-center my-8 md:mt-20 mt-0 text-white">
              SHOWCASE
            </div>
            <Carousel
              value={this.state.value}
              slides={this.state.slides}
              onChange={this.onchange}
              plugins={[
                // "fastSwipe",
                // "clickToChange",
                // "infinite",
                // "arrows",
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 3,
                  },
                },
                {
                  resolve: arrowsPlugin,
                  options: {
                    arrowLeft: (
                      <button>
                        <img src={arrow_left} className="md:w-20 w-14" />
                      </button>
                    ),

                    arrowRight: (
                      <button>
                        <img src={arrow_right} className="md:w-20 w-14" />
                      </button>
                    ),

                    addArrowClickHandler: true,
                  },
                },
              ]}
              breakpoints={{
                1280: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 2,
                      },
                    },
                    {
                      resolve: arrowsPlugin,
                      options: {
                        arrowLeft: (
                          <button>
                            <img src={arrow_left} className="w-20" />
                          </button>
                        ),

                        arrowRight: (
                          <button>
                            <img src={arrow_right} className="w-20" />
                          </button>
                        ),

                        addArrowClickHandler: true,
                      },
                    },
                  ],
                },
                768: {
                  plugins: [
                    {
                      resolve: slidesToShowPlugin,
                      options: {
                        numberOfSlides: 1,
                      },
                    },
                    {
                      resolve: arrowsPlugin,
                      options: {
                        arrowLeft: (
                          <button>
                            <img src={arrow_left} className="w-20" />
                          </button>
                        ),

                        arrowRight: (
                          <button>
                            <img src={arrow_right} className="w-20" />
                          </button>
                        ),

                        addArrowClickHandler: true,
                      },
                    },
                  ],
                },
              }}
            />
            {/* <div className="w-full sm:mx-auto overflow-hidden hidden">
              <Dots
                value={this.state.value}
                onChange={this.onchange}
                number={this.state.slides.length}
              />
            </div> */}
          </div>
        </div>
        <img
          src={ring_left}
          className="absolute top-0 left-0 xl:w-80 md:w-64 w-1/3 md:block hidden"
          alt=""
        />
        <img
          src={ring_right}
          className="absolute bottom-0 right-0 xl:w-80 md:w-64 w-1/3 md:block hidden"
          alt=""
        />
      </div>
    );
  }
}
export default Showcase;
