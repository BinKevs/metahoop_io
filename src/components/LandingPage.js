import React from "react";
import { Link } from "react-scroll";
import Navbar from "../static/Navbar.png";
import discord from "../static/discord.png";
import twitter from "../static/twitter.png";
import mobile_nav_close from "../static/mobile_nav_close-white.png";

import LandingLogo from "../static/Landing-Logo.png";

import Kobe from "../static/KOBE.png";
import { Animated } from "react-animated-css";
import Typewriter from "typewriter-effect";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ShowNav: false };
  }
  setShowNav = (event) => {
    event.preventDefault();
    this.setState({
      ShowNav: !this.state.ShowNav,
    });
  };

  render() {
    const { ShowNav } = this.state;
    return (
      <>
        <div className="bg-landing-image bg-cover bg-center bg-no-repeat h-screen flex flex-col ">
          {ShowNav ? (
            <Animated
              animationIn="fadeInRight"
              animationOut="fadeOutUp"
              animationInDuration={500}
              animationOutDuration={500}
              isVisible={ShowNav}
              id="LandingPage"
              className="md:hidden fixed w-full h-full flex flex-col bg-black z-30"
            >
              <div className="flex justify-between px-5 pt-10">
                <img src={LandingLogo} alt="" class="w-32" />
                <img
                  onClick={this.setShowNav}
                  src={mobile_nav_close}
                  alt=""
                  class="h-10"
                />
              </div>
              <div className="font-Oswald font-bold text-white flex flex-col items-center text-xl space-y-8 m-auto cursor-pointer">
                <Link
                  onClick={this.setShowNav}
                  to="IntroPage"
                  smooth={true}
                  spy={true}
                >
                  INTRO
                </Link>

                <Link
                  onClick={this.setShowNav}
                  to="ShowcasePage"
                  smooth={true}
                  spy={true}
                >
                  SHOWCASE
                </Link>

                <Link
                  onClick={this.setShowNav}
                  to="RoadmapPage"
                  smooth={true}
                  spy={true}
                >
                  ROADMAP
                </Link>
                <Link
                  onClick={this.setShowNav}
                  to="FAQPage"
                  smooth={true}
                  spy={true}
                >
                  FAQ
                </Link>
                <Link
                  onClick={this.setShowNav}
                  to="TeamPage"
                  smooth={true}
                  spy={true}
                >
                  TEAM
                </Link>
              </div>
            </Animated>
          ) : (
            ""
          )}

          <header class="text-white z-20">
            <div class="flex items-center lg:justify-center justify-between md:pt-10 pt-5">
              <a class="flex md:-mt-4">
                <img
                  src={LandingLogo}
                  alt=""
                  class="md:h-24 h-auto md:w-full w-40 min-h-0 mx-5"
                />
              </a>
              <div
                onClick={this.setShowNav}
                className="lg:hidden flex p-5 mb-4"
              >
                <img src={Navbar} alt="" class="h-8 w-10" />
              </div>
              <nav class="items-center text-lg justify-center font-Oswald font-bold hidden lg:flex space-x-10 pb-8">
                <Link
                  to="IntroPage"
                  smooth={true}
                  spy={true}
                  className="cursor-pointer hover:text-orange-400 hover:text-2xl hover:tracking-widest"
                >
                  INTRO
                </Link>

                <Link
                  to="ShowcasePage"
                  smooth={true}
                  spy={true}
                  className="cursor-pointer hover:text-orange-400 hover:text-2xl hover:tracking-widest"
                >
                  SHOWCASE
                </Link>

                <Link
                  to="RoadmapPage"
                  smooth={true}
                  spy={true}
                  className="cursor-pointer hover:text-orange-400 hover:text-2xl hover:tracking-widest"
                >
                  ROADMAP
                </Link>
                <Link
                  to="FAQPage"
                  smooth={true}
                  spy={true}
                  className="cursor-pointer hover:text-orange-400 hover:text-2xl hover:tracking-widest"
                >
                  FAQ
                </Link>
                <Link
                  to="TeamPage"
                  smooth={true}
                  spy={true}
                  className="cursor-pointer hover:text-orange-400 hover:text-2xl hover:tracking-widest"
                >
                  TEAM
                </Link>
                <a href="" target="_blank" class="mr-5 cursor-pointer">
                  <img className="h-8" src={twitter} alt="" />
                </a>
                <a href="" target="_blank" class="cursor-pointer">
                  <img className="h-8" src={discord} alt="" />
                </a>
              </nav>
            </div>
          </header>
          <div className="m-auto">
            <div className="flex flex-col justify-center w-full">
              <img
                src={Kobe}
                alt=""
                className="mx-auto xl:w-1/4 md:w-96 w-60 md:mb-4 mb-0"
              />
              <div className="flex text-white justify-center">
                <div className="text-center my-auto md:space-y-4 space-y-0">
                  <div className="font-Oswald font-bold  md:text-2xl text-lg text-white inline">
                    WELCOME TO{" "}
                    <span className="md:text-5xl text-3xl ">
                      <Typewriter
                        options={{
                          strings: [
                            "<span class='text-orange-400'>META</span>",
                            "HOOPS",
                            "META<span class='text-orange-400'>HOOPS!</span>",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </div>
                  <div className="font-Oswald md:text-lg text-sm w-1/2 mx-auto">
                    <div className="">
                      Here at METAHOOPS we combine the worlds of basketball,
                      paint , and crypto. We are creating a digital art
                      collection connected to building our first very own Dream
                      Basketball Court Center that helps give sneakers to the
                      poor, food to hungry, and free paint to Hoop communities
                      worldwide.
                    </div>{" "}
                  </div>
                  <div>
                    <button
                      class={
                        "p-4  hover:text-2xl text-md md:text-xl font-Oswald font-bold w-72 md:hover:w-96 d:mb-0 mb-10 bg-black hover:bg-white text-orange-400"
                      }
                    >
                      MINT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LandingPage;
