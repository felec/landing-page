import { useState, useEffect } from 'react';
import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import {
  HiOutlineClipboardCheck,
  HiOutlineCloudDownload,
  HiOutlineTicket,
  HiStar,
  HiViewBoards,
  HiOutlineBriefcase,
  HiOutlineColorSwatch,
  HiOutlineMailOpen,
  HiCurrencyDollar,
  HiMenu,
} from 'react-icons/hi';
import Setup from './components/setup';
import Filing from './components/filing';
import Decide from './components/decide';
import Dashboard from './components/dashboard';
import Team from './assets/undraw_team_anim.svg';
import server from './assets/server.png';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  document.addEventListener('scroll', (e) => {
    const scrolled = document?.scrollingElement?.scrollTop;

    if (scrolled && scrolled >= 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <>
      <body>
        <svg
          className='svgScrolled z-0'
          viewBox='-145 -45 300 300'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill='#115796'
            d='M43.6,-53.8C57.6,-49.8,70.8,-38.6,73.6,-25.1C76.4,-11.6,68.8,4.1,60.9,17.2C53.1,30.2,45,40.6,34.9,50.7C24.7,60.8,12.3,70.7,-0.4,71.2C-13.1,71.7,-26.2,62.9,-32.7,51.6C-39.2,40.3,-39.2,26.5,-47.2,12.7C-55.2,-1,-71.3,-14.7,-73.5,-28.7C-75.6,-42.8,-63.8,-57.2,-49.2,-61C-34.7,-64.9,-17.3,-58.2,-1.3,-56.4C14.8,-54.7,29.6,-57.9,43.6,-53.8Z'
            transform='translate(100 0)'
          />
        </svg>

        <div className='absolute top-0 left-0 w-full z-20'>
          <NavBar isScrolled={isScrolled} />
          <BodyHead />
          <HeaderBreak />
          <div data-aos-once='true' data-aos='fade-down'>
            <AboutBody />
          </div>
          <div>
            <FeaturesTab />
          </div>
          <CardCarousel />
          <Parallax />
          <Footer />
        </div>
      </body>
    </>
  );
}

const NavBar = ({ isScrolled }: { isScrolled: boolean }) => {
  const [isHover, setIsHover] = useState(false);
  const [hoverType, setHoverType] = useState(0);

  const showModalNav = (hoverType: number) => {
    switch (hoverType) {
      case 1:
        return (
          <div
            onMouseLeave={() => {
              setIsHover(false);
            }}
            className='fixed top-10 lg:top-14 right-4 md:right-10 z-50 w-11/12 lg:w-7/12 p-2 sm:py-4 border bg-white shadow-xl rounded-md'
          >
            <div className='flex md:flex-col justify-evenly'>
              <div className='flex flex-col md:flex-row justify-evenly'>
                <div className='flex justify-center items-center hover:bg-yellow-100 rounded-md shadow-md sm:h-16 sm:w-40 px-1 py-3 m-2 border-t cursor-pointer'>
                  <div className='h-1 sm:h-2 w-1 sm:w-2 mr-1 rounded-lg bg-yellow-600'></div>
                  <h2 className=' text-xs sm:text-sm font-bold'>Labore</h2>
                </div>

                <div className='flex justify-center items-center hover:bg-gray-100 rounded-md shadow-md sm:h-16 sm:w-40 px-1 py-3 m-2 border-t cursor-pointer'>
                  <div className='h-1 sm:h-2 w-1 sm:w-2 mr-1 rounded-lg bg-gray-600'></div>
                  <h2 className=' text-xs sm:text-sm font-bold'>Recusandae</h2>
                </div>

                <div className='flex justify-center items-center hover:bg-blue-100 rounded-md shadow-md sm:h-16 sm:w-40 px-1 py-3 m-2 border-t cursor-pointer'>
                  <div className='h-1 sm:h-2 w-1 sm:w-2 mr-1 rounded-lg bg-blue-800'></div>
                  <h2 className=' text-xs sm:text-sm font-bold'>Animi velit</h2>
                </div>

                <div className='flex justify-center items-center hover:bg-green-100 rounded-md shadow-md sm:h-16 sm:w-40 px-1 py-3 m-2 border-t cursor-pointer'>
                  <div className='h-1 sm:h-2 w-1 sm:w-2 mr-1 rounded-lg bg-green-300'></div>
                  <h2 className=' text-xs sm:text-sm font-bold'>Ipsum</h2>
                </div>
              </div>

              <div className='flex flex-col md:flex-row justify-evenly'>
                <div className='flex justify-center items-center hover:bg-red-100 rounded-md shadow-md sm:h-16 sm:w-40 px-1 py-3 m-2 border-t cursor-pointer'>
                  <div className='h-1 sm:h-2 w-1 sm:w-2 mr-1 rounded-lg bg-red-600'></div>
                  <h2 className=' text-xs sm:text-sm font-bold'>Deserun</h2>
                </div>

                <div className='flex justify-center items-center hover:bg-yellow-100 rounded-md shadow-md sm:h-16 sm:w-40 px-1 py-3 m-2 border-t cursor-pointer'>
                  <div className='h-1 sm:h-2 w-1 sm:w-2 mr-1 rounded-lg bg-yellow-300'></div>
                  <h2 className=' text-xs sm:text-sm font-bold'>Adipisicing</h2>
                </div>

                <div className='flex justify-center items-center hover:bg-green-100 rounded-md shadow-md sm:h-16 sm:w-40 px-1 py-3 m-2 border-t cursor-pointer'>
                  <div className='h-1 sm:h-2 w-1 sm:w-2 mr-1 rounded-lg bg-green-600'></div>
                  <h2 className=' text-xs sm:text-sm font-bold'>Eveniet</h2>
                </div>

                <div className='flex justify-center items-center hover:bg-pink-100 rounded-md shadow-md sm:h-16 sm:w-40 px-1 py-3 m-2 border-t cursor-pointer'>
                  <div className='h-1 sm:h-2 w-1 sm:w-2 mr-1 rounded-lg bg-pink-900'></div>
                  <h2 className=' text-xs sm:text-sm font-bold'>Molestiae</h2>
                </div>
              </div>

              <div className='flex flex-col md:flex-row justify-evenly'>
                <div className='flex justify-center items-center hover:bg-indigo-100 rounded-md shadow-md sm:h-16 sm:w-40 px-1 py-3 m-2 border-t cursor-pointer'>
                  <div className='h-1 sm:h-2 w-1 sm:w-2 mr-1 rounded-lg bg-indigo-500'></div>
                  <h2 className=' text-xs sm:text-sm font-bold'>Ipsa</h2>
                </div>

                <div className='flex justify-center items-center hover:bg-pink-100 rounded-md shadow-md sm:h-16 sm:w-40 px-1 py-3 m-2 border-t cursor-pointer'>
                  <div className='h-1 sm:h-2 w-1 sm:w-2 mr-1 rounded-lg bg-pink-900'></div>
                  <h2 className=' text-xs sm:text-sm font-bold'>Consectetur</h2>
                </div>

                <div className='flex justify-center items-center hover:bg-blue-100 rounded-md shadow-md sm:h-16 sm:w-40 px-1 py-3 m-2 border-t cursor-pointer'>
                  <div className='h-1 sm:h-2 w-1 sm:w-2 mr-1 rounded-lg bg-blue-400'></div>
                  <h2 className=' text-xs sm:text-sm font-bold'>Lorem</h2>
                  <div className='flex items-center justify-center bg-red-400 rounded-md h-4 sm:h-6 w-8 sm:w-12 ml-1 sm:ml-4'>
                    <h2 className='text-xs font-bold text-white lowercase'>
                      New
                    </h2>
                  </div>
                </div>

                <div className='flex justify-center items-center hover:bg-purple-100 rounded-md shadow-md sm:h-16 sm:w-40 px-1 py-3 m-2 border-t cursor-pointer'>
                  <div className='h-1 sm:h-2 w-1 sm:w-2 mr-1 rounded-lg bg-purple-400'></div>
                  <h2 className=' text-xs sm:text-sm font-bold'>Excepturi</h2>
                </div>
              </div>
            </div>
          </div>
        );

      case 2:
        return <></>;

      default:
        return (
          <div
            onMouseLeave={() => {
              setIsHover(false);
            }}
            className='fixed top-10 lg:top-14 right-4 md:right-10 z-50 w-11/12 md:h-72 md:w-11/12 lg:w-7/12 p-2 border bg-white shadow-xl rounded-md'
          >
            <div className='flex flex-col h-full md:justify-between'>
              <div className='flex justify-evenly'>
                <div className='flex flex-col hover:bg-purple-100 rounded-md w-60 px-4 py-2 cursor-pointer'>
                  <div className='flex flex-col sm:flex-row items-center mb-2'>
                    <HiOutlineClipboardCheck size='1.5rem' color='#ac33ff' />
                    <h2 className='text-sm md:text-sm text-center md:text-left font-bold ml-1'>
                      KLmsl Tjka
                    </h2>
                  </div>
                  <p className='text-xs font-extralight text-center sm:text-left text-gray-500'>
                    Lvoluptate provident tenetur, nesciunt nobis aliquam?
                  </p>
                </div>

                <div className='flex flex-col hover:bg-blue-100 rounded-md w-60 px-4 py-2 cursor-pointer'>
                  <div className='flex flex-col sm:flex-row items-center mb-2'>
                    <HiOutlineCloudDownload size='1.5rem' color='#3496f0' />
                    <h2 className='text-sm md:text-sm text-center md:text-left font-bold ml-1'>
                      Usk Xkjgf
                    </h2>
                  </div>
                  <p className='text-xs font-extralight text-center sm:text-left text-gray-500'>
                    Lvoluptate provident tenetur, nesciunt nobis aliquam?
                  </p>
                </div>

                <div className='flex flex-col hover:bg-yellow-100 rounded-md w-60 px-4 py-2 cursor-pointer'>
                  <div className='flex flex-col sm:flex-row items-center mb-2'>
                    <HiOutlineTicket size='1.5rem' color='#f0d934' />
                    <h2 className='text-sm md:text-sm text-center md:text-left font-bold ml-1'>
                      Vero voluptatum
                    </h2>
                  </div>
                  <p className='text-xs font-extralight text-center sm:text-left text-gray-500'>
                    Lvoluptate provident tenetur, nesciunt nobis aliquam?
                  </p>
                </div>
              </div>

              <div className='flex justify-evenly'>
                <div className='flex flex-col hover:bg-red-100 rounded-md w-60 px-4 py-2 cursor-pointer'>
                  <div className='flex flex-col sm:flex-row items-center mb-2'>
                    <HiOutlineBriefcase size='1.5rem' color='#ea840a' />
                    <h2 className='text-sm md:text-sm text-center md:text-left font-bold ml-1'>
                      Quaerat animi
                    </h2>
                  </div>
                  <p className='text-xs font-extralight text-center sm:text-left text-gray-500'>
                    Lvoluptate provident tenetur, nesciunt nobis aliquam?
                  </p>
                </div>

                <div className='flex flex-col hover:bg-green-100 rounded-md w-60 px-4 py-2 cursor-pointer'>
                  <div className='flex flex-col sm:flex-row items-center mb-2'>
                    <HiViewBoards size='1.5rem' color='#55ee3d' />
                    <h2 className='text-sm md:text-sm text-center md:text-left font-bold ml-1'>
                      Laudantium
                    </h2>
                  </div>
                  <p className='text-xs font-extralight text-center sm:text-left text-gray-500'>
                    Lvoluptate provident tenetur, nesciunt nobis aliquam?
                  </p>
                </div>

                <div className='flex flex-col hover:bg-pink-100 rounded-md px-4 py-2 w-60 cursor-pointer'>
                  <div className='flex flex-col sm:flex-row items-center mb-2'>
                    <HiOutlineColorSwatch size='1.5rem' color='#ee3d9b' />
                    <h2 className='text-sm md:text-sm text-center md:text-left font-bold ml-1'>
                      Aliquid minima
                    </h2>
                  </div>
                  <p className='text-xs font-extralight text-center sm:text-left text-gray-500'>
                    Lvoluptate provident tenetur, nesciunt nobis aliquam?
                  </p>
                </div>
              </div>

              <div className='seeAllButton mt-2'>
                <h2 className='seeAll'>
                  see all features <span className='arrow'>&rarr;</span>
                </h2>
              </div>
            </div>
          </div>
        );
    }
  };

  const navBarClass = isScrolled
    ? 'hidden'
    : 'flex flex-col lg:flex-row items-center';
  const navItemClass = isScrolled ? 'scrolledNavItem' : 'unScrolledNavItem';
  const burgerColor = isScrolled ? '#FF0066' : '#FFF';

  return (
    <>
      <div className='navNotScrolled'>
        {!isScrolled && (
          <div className='flex'>
            <HiCurrencyDollar size='2rem' color='#FF0066' />
            <h2 className='text-lg sm:text-2xl font-extrabold'> Lorem Ipsum</h2>
          </div>
        )}
        <div className='opacity-0'>_</div>
        {isScrolled && (
          <button className='cursor-pointer mr-4 opacity-50'>
            <HiMenu size='1.5rem' color={burgerColor} />
          </button>
        )}
        <div className={navBarClass}>
          <div className='flex flex-col lg:flex-row justify-end text-white'>
            <div
              onMouseEnter={() => {
                setIsHover(true);
                setHoverType(0);
              }}
              className={navItemClass}
            >
              <h1>Lorem</h1>
            </div>

            <div
              onMouseEnter={() => {
                setIsHover(true);
                setHoverType(1);
              }}
              className={navItemClass}
            >
              <h1>Ipsum</h1>
            </div>

            <div
              onMouseEnter={() => {
                setIsHover(true);
                setHoverType(2);
              }}
              className={navItemClass}
            >
              <h1>Dolor</h1>
            </div>
          </div>

          <div className='flex flex-col lg:flex-row justify-end'>
            <div className='self-center rounded-md my-2 lg:ml-2 lg:mr-2 bg-pink-200 opacity-80 hover:bg-pink-300 text-red-900 cursor-pointer'>
              <h1 className='text-xs sm:text-sm font-bold py-1 px-5 sm:px-6 lg:px-4'>
                Login
              </h1>
            </div>

            <div className='self-center bg-pink-700 hover:bg-pink-600 rounded-md cursor-pointer'>
              <h1 className='text-white text-xs sm:text-sm font-bold py-1 px-3 sm:px-4 lg:px-2'>
                Sign Up
              </h1>
            </div>
          </div>
        </div>
      </div>
      {isHover && showModalNav(hoverType)}
    </>
  );
};

const BodyHead = () => {
  return (
    <div className='flex flex-col-reverse sm:flex-row justify-between mx-4 sm:mx-16'>
      <div className='mt-8 sm:mt-32'>
        <h1 className='text-xl lg:text-5xl text-gray-700 font-bold'>
          Lorem consectetur,
          <br />
          obcaecati ipsum dolor.
        </h1>
        <h2 className='text-lg lg:text-xl text-gray-500 mt-4 font-medium'>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h2>

        <div className='flex items-center h-12 w-56 my-8 rounded-md shadow-lg border-t overflow-hidden border-gray-200'>
          <div className='justify-self-start h-full w-1 mr-1 bg-blue-800'></div>
          <HiOutlineMailOpen size='1.2rem' color='#115796' />

          <form className='z-0'>
            <input
              className='focus:outline-none focus:border-transparent z-0 ml-2'
              type='text'
              placeholder='Enter email address'
            />
          </form>
        </div>

        <div className='flex items-center'>
          <div className='flex justify-center w-24 lg:w-32 py-2 lg:py-4 my-4 hover:bg-blue-700 bg-blue-800 rounded-md shadow-lg cursor-pointer'>
            <h3 className='text-xs lg:text-sm font-bold text-white'>
              Get Started
            </h3>
          </div>
          <h3 className='text-sm font-semibold ml-4 text-gray-400'>
            Lorem ipsum dolor <br /> sit amet consectetur lorem.
          </h3>
        </div>

        <div className='flex items-center'>
          <HiStar size='1.2rem' color='#f0d934' />
          <HiStar size='1.2rem' color='#f0d934' />
          <HiStar size='1.2rem' color='#f0d934' />
          <HiStar size='1.2rem' color='#f0d934' />
          <HiStar size='1.2rem' color='#f0d934' />
          <h2 className='text-xs text-gray-400 font-semibold my-8 ml-1 sm:ml-2'>
            Based on 10,000+ reviews
          </h2>
        </div>
      </div>
      <img
        className='sm:self-end lg:self-center mt-20 ml-8 sm:mt-0 h-3/6 w-3/6 md:h-2/6 md:w-2/6'
        src={server}
        alt='server'
      />
    </div>
  );
};

const HeaderBreak = () => {
  return (
    <div className='hidden lg:flex join'>
      <h3 className='flex justify-center w-full my-24 text-sm font-bold text-gray-400'>
        Join 50,000+ Highly Productive Teams
      </h3>
    </div>
  );
};

const AboutBody = () => {
  return (
    <div className='flex flex-col lg:flex-row my-24 lg:my-0 justify-center items-center px-4 md:px-10 lg:px-32'>
      <div className='flex flex-col'>
        <h1 className='text-sm font-semibold text-blue-800 ml-8 md:ml-0 mb-8'>
          collaborate
        </h1>
        <p className='text-sm font-semibold text-gray-500'>
          Nostrum necessitatibus dolorem corrupti exercitationem eius? Iste
          reiciendis soluta vero, laboriosam nobis eos quaerat, expedita illum
          odit impedit alias voluptatum quo? Recusandae odit dolorem quibusdam.
          Dignissimos quam placeat culpa in ducimus, delectus nam incidunt aut
          sit repellat voluptatibus? Repellat quos tempora quo aperiam
          voluptates asperiores odio repellendus ab alias officiis praesentium
          minima quasi totam quod harum, officia ipsum possimus tempore veniam
          eum, delectus amet ipsa illo distinctio? Pariatur iste adipisci nobis
          quidem aliquid consectetur assumenda consequuntur possimus dolore
          minus neque soluta eos a totam quisquam corrupti magni fuga optio esse
          impedit eum nihil, porro vitae excepturi. Labore recusandae nostrum ut
          eum.
        </p>
      </div>

      <object
        className='h-96 w-96'
        data={Team}
        type='image/svg+xml'
        aria-label='notes'
      ></object>
    </div>
  );
};

const FeaturesTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className='flex flex-col tabBackground'>
      <h2 className='text-sm ml-4 lg:ml-24 font-semibold text-blue-800 my-8'>
        design
      </h2>
      <div className='flex justify-evenly'>
        <div
          onClick={() => {
            setSelectedTab(0);
          }}
          className='flex flex-col mb-8'
        >
          <div className='flex items-center mr-2'>
            <div className='h-4 md:h-12 w-1 mr-1 md:mx-2 bg-white opacity-30 rounded-md'></div>
            <h1
              className={
                selectedTab === 0
                  ? 'tabSelected text-sm sm:text-lg md:text-2xl'
                  : 'tabTitle text-sm sm:text-lg md:text-2xl'
              }
            >
              Dignissimos
            </h1>
          </div>

          {selectedTab === 0 && (
            <div className='h-1 w-8 md:w-24 ml-2 md:ml-6 mt-2 md:mt-8 bg-blue-800 rounded-md'></div>
          )}
        </div>

        <div
          onClick={() => {
            setSelectedTab(1);
          }}
          className='flex flex-col mb-8'
        >
          <div className='flex items-center mr-1 md:mr-0'>
            <div className='h-4 md:h-12 w-1 mr-1 md:mx-2 bg-white opacity-30 rounded-md'></div>
            <h1
              className={
                selectedTab === 1
                  ? 'tabSelected text-sm sm:text-lg md:text-2xl'
                  : 'tabTitle text-sm sm:text-lg md:text-2xl'
              }
            >
              Voluptate
            </h1>
          </div>

          {selectedTab === 1 && (
            <div className='h-1 w-8 md:w-24 ml-2 md:ml-6 mt-2 md:mt-8 bg-blue-800 rounded-md'></div>
          )}
        </div>

        <div
          onClick={() => {
            setSelectedTab(2);
          }}
          className='flex flex-col mb-8'
        >
          <div className='flex items-center mr-1 lg:mr-0'>
            <div className='h-4 md:h-12 w-1 mr-1 md:mx-2 bg-white opacity-30 rounded-md'></div>
            <h1
              className={
                selectedTab === 2
                  ? 'tabSelected text-sm sm:text-lg md:text-2xl'
                  : 'tabTitle text-sm sm:text-lg md:text-2xl'
              }
            >
              Perspiciatis
            </h1>
          </div>

          {selectedTab === 2 && (
            <div className='h-1 w-8 lg:w-24 ml-2 md:ml-6 mt-2 md:mt-8 bg-blue-800 rounded-md'></div>
          )}
        </div>

        <div
          onClick={() => {
            setSelectedTab(3);
          }}
          className='flex flex-col mb-8'
        >
          <div className='flex items-center mr-1 lg:mr-0'>
            <div className='h-4 md:h-12 w-1 mr-1 md:mx-2 bg-white opacity-30 rounded-md'></div>
            <h1
              className={
                selectedTab === 3
                  ? 'tabSelected text-sm sm:text-lg md:text-2xl'
                  : 'tabTitle text-sm sm:text-lg md:text-2xl'
              }
            >
              Rationale
            </h1>
          </div>

          {selectedTab === 3 && (
            <div className='h-1 w-8 lg:w-24 ml-2 md:ml-6 mt-2 md:mt-8 bg-blue-800 rounded-md'></div>
          )}
        </div>
      </div>

      {selectedTab === 0 && (
        <div className='flex flex-col lg:flex-row items-start'>
          <Dashboard />
          <div className='w-full lg:w-1/3 flex flex-col mx-2 mt-4 lg:mt-0 lg:ml-8'>
            <h3 className='text-lg text-white font-bold mb-2 opacity-70'>
              Description
            </h3>
            <p className='backBlur p-4 text-sm font-semibold text-white'>
              In similique dolore aliquam esse tempora illum fugiat, iusto quam
              asperiores harum iure pariatur beatae. Consectetur totam sequi non
              culpa error minus, blanditiis vitae optio assumenda obcaecati?
              Magnam velit consectetur sunt accusantium vero accusamus
              consequuntur aliquam dolor unde quod sapiente beatae cupiditate
              tempora eligendi praesentium, doloremque nemo expedita iusto esse
              inventore libero a. Doloremque aliquam accusamus labore vel, sint
              esse. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Iusto est, distinctio soluta quae libero officiis culpa corrupti
              adipisci quia quisquam. Pariatur consequuntur fugit totam suscipit
              sed inventore quibusdam amet iste sit fuga, aspernatur odit quas
              minima ad dolore molestiae neque in beatae a praesentium facere
              voluptatibus maiores? Repudiandae, suscipit consequatur. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Doloribus rerum
              aliquam necessitatibus qui illo nobis reiciendis libero tenetur
              ipsum dicta, sit mollitia fugit eaque repellat nostrum veniam
              saepe, neque dolor. Tenetur, ipsam qui!
            </p>
          </div>
        </div>
      )}
      {selectedTab === 1 && (
        <div className='flex flex-col lg:flex-row items-start'>
          <Decide />
          <div className='w-full lg:w-1/3 flex flex-col mx-2 mt-4 lg:mt-0 lg:ml-8'>
            <h3 className='text-lg text-white font-bold mb-2 opacity-70'>
              Description
            </h3>
            <p className='backBlur p-4 text-sm font-semibold text-white'>
              Facilis accusamus fugiat alias dolorum voluptates adipisci velit
              quisquam, beatae temporibus, autem obcaecati dignissimos fuga
              voluptatum laudantium ducimus cupiditate facere aliquam cum ut,
              sunt inventore illum. Vero nihil voluptatibus fuga quidem
              temporibus aliquid quod similique exercitationem fugiat cupiditate
              dolores harum nostrum distinctio sunt, provident reprehenderit
              officia nisi quaerat iusto quibusdam tenetur beatae! Cupiditate,
              inventore temporibus rem fuga eos aut perspiciatis illo vero quo
              debitis quia odit, consequatur quidem amet nostrum aliquid minus,
              voluptatem similique facere nobis voluptatum labore unde. Totam
              eius accusantium in cumque est veniam ad recusandae, similique
              commodi excepturi beatae autem culpa deleniti dignissimos amet
              eligendi quo at distinctio repellat ducimus expedita odio illo
              quidem. Reprehenderit, cum? Ipsam dicta fugiat debitis facilis
              corrupti ullam quod a suscipit iure eveniet! Sint voluptates porro
              odio totam assumenda? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Adipisci suscipit reiciendis itaque veniam totam
              at, et, officiis molestias dignissimos, quas iure nostrum
              provident. Eos, ipsa voluptas voluptate dignissimos, dolores
              tempora pariatur a reprehenderit numquam unde ex cumque
              perferendis accusantium omnis. Aperiam, at tenetur. Odio sed,
              nulla porro quod deserunt atque reiciendis voluptatum molestias
              dolorum eius quidem! Distinctio ab mollitia necessitatibus
              consectetur odio pariatur quasi iste fuga tenetur praesentium sit,
              corporis dignissimos illum labore omnis sunt expedita reiciendis
              quae ipsum optio porro libero. Molestiae voluptatem cupiditate
              quas rem ex delectus eum facilis minima! Autem, quam suscipit!
            </p>
          </div>
        </div>
      )}

      {selectedTab === 2 && (
        <div className='flex flex-col lg:flex-row items-start'>
          <Filing />
          <div className='w-full lg:w-1/3 flex flex-col mx-2 mt-4 lg:mt-0 lg:ml-8'>
            <h3 className='text-lg text-white font-bold mb-2 opacity-70'>
              Description
            </h3>
            <p className='backBlur p-4 text-sm font-semibold text-white'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              eaque quo possimus dolorem iste, debitis aut autem id fugiat totam
              explicabo ipsam obcaecati veritatis? Unde harum debitis autem
              nihil repellat similique laudantium et perspiciatis sed? Earum in
              repellendus impedit error eos facilis aspernatur mollitia repellat
              quam explicabo, ex, consequatur exercitationem excepturi cumque
              eius assumenda nam? Iusto blanditiis dignissimos consectetur
              expedita eligendi? Amet mollitia fugit cupiditate soluta, ea,
              tempore est eaque, eius nobis necessitatibus dolorem repellendus
              illo dignissimos quae quo quasi sed sapiente iure. Facilis dicta.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              illo aliquid delectus, dolores debitis praesentium quae doloremque
              architecto sunt natus rerum nobis enim eius, explicabo officiis
              eaque dolore sit quis quia eligendi ipsam. Explicabo sunt eveniet
              repellendus et voluptas, quia ullam aliquid, vel necessitatibus
              dolorem ad, consectetur vitae asperiores! Culpa doloribus harum
              consequuntur! Qui, excepturi cumque dolorum error illum fugit ad
              architecto soluta quo saepe esse facere ab obcaecati.
            </p>
          </div>
        </div>
      )}

      {selectedTab === 3 && (
        <div className='flex flex-col lg:flex-row items-start'>
          <Setup />
          <div className='w-full lg:w-1/3 flex flex-col mx-2 mt-4 lg:mt-0 lg:ml-8'>
            <h3 className='text-lg text-white font-bold mb-2 opacity-70'>
              Description
            </h3>
            <p className='backBlur p-4 text-sm font-semibold text-white'>
              Reiciendis quo alias libero! Voluptates soluta vitae, itaque vel
              aperiam, inventore aut ipsa quas ab earum quos error dignissimos
              provident totam officiis? Unde sunt aliquid quo. Lorem, ipsum
              dolor sit amet consectetur adipisicing elit. Tenetur eaque quo
              possimus dolorem iste, debitis aut autem id fugiat totam explicabo
              ipsam obcaecati veritatis? Unde harum debitis autem nihil repellat
              similique. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Quia excepturi quisquam laboriosam necessitatibus,
              laudantium soluta? Maiores, doloribus tenetur! Quae corporis
              itaque veritatis magnam ipsum beatae quam! Corporis quos nesciunt,
              voluptate tempora, rem unde sit aspernatur cum ullam nemo atque
              dicta ipsa in et recusandae?. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Expedita illo laborum ducimus quo
              aut quam explicabo provident similique dolor aliquam. Ipsum ipsa
              veniam neque dolore vel totam necessitatibus dolorem quibusdam,
              provident consequuntur saepe. Totam ad nobis inventore officiis
              aliquam? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Odio optio sequi eligendi, sed possimus error qui?
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const CardCarousel = () => {
  return (
    <div className='flex flex-col mx-2 lg:mx-16 my-20 p-4'>
      <h3 className='text-xs font-bold mb-8 ml-12 text-blue-800 uppercase'>
        problems
      </h3>

      <div className='flex flex-col md:flex-row items-center justify-evenly'>
        <div className='flip-card m-4'>
          <div className='flip-card-inner'>
            <div className='flex flip-card-front shadow-xl'>
              <div className='flex items-center flex-col'>
                <div className='h-16 w-1 bg-pink-400 rounded-b-md'></div>
                <p className='transform -rotate-90 text-xs font-bold my-7 text-pink-400 uppercase'>
                  problem
                </p>
              </div>
              <div className='h-12 w-2 self-end rounded-t-md mt-1 bg-green-400'></div>
              <p className='text-left text-sm text-gray-600 p-4 font-bold'>
                Totam neque sunt saepe numquam consectetur adipisicing elit
                beatae?
              </p>
            </div>

            <div className='flex flip-card-back shadow-xl'>
              <div className='flex self-end items-center flex-col'>
                <p className='opacity-0'>problem</p>
                <div className='h-16 w-1 bg-pink-400 rounded-t-md'></div>
              </div>
              <div className='flex self-start items-center flex-col'>
                <p className='absolute top-12 transform -rotate-90 text-xs font-bold my-7 text-green-400 uppercase'>
                  solution
                </p>
                <div className='h-12 w-1 end rounded-t-md mb-1 bg-green-400'></div>
              </div>
              <p className='p-4 text-left text-sm font-semibold text-gray-500'>
                Magni inventore veniam eum libero expedita architecto non.
                Fugiat consequatur omnis, odio ad provident maiores impedit
                velit quos nulla officiis.
              </p>
            </div>
          </div>
        </div>

        <div className='flip-card m-4'>
          <div className='flip-card-inner'>
            <div className='flex flip-card-front shadow-xl'>
              <div className='flex items-center flex-col'>
                <div className='h-16 w-1 bg-pink-400 rounded-b-md'></div>
                <p className='transform -rotate-90 text-xs font-bold my-7 text-pink-400 uppercase'>
                  problem
                </p>
              </div>
              <div className='h-12 w-3 self-end rounded-t-md mt-1 bg-green-400'></div>
              <p className='text-left text-sm text-gray-500 p-4 font-bold'>
                Veniam debitis placeat. Hic saepe velit tenetur repudiandae
                magnam pariatur nostrum?
              </p>
            </div>

            <div className='flex flip-card-back shadow-xl'>
              <div className='flex self-end items-center flex-col'>
                <p className='opacity-0'>problem</p>
                <div className='h-16 w-1 bg-pink-400 rounded-t-md'></div>
              </div>
              <div className='flex self-start items-center flex-col'>
                <p className='absolute top-12 transform -rotate-90 text-xs font-bold my-7 text-green-400 uppercase'>
                  solution
                </p>
                <div className='h-12 w-1 end rounded-t-md mb-1 bg-green-400'></div>
              </div>
              <p className='p-4 text-left text-sm font-semibold text-gray-500'>
                Magni inventore veniam eum libero expedita architecto non.
                Fugiat consequatur omnis, odio ad provident maiores impedit
                velit quos nulla officiis.
              </p>
            </div>
          </div>
        </div>

        <div className='flip-card m-4'>
          <div className='flip-card-inner'>
            <div className='flex flip-card-front shadow-xl'>
              <div className='flex items-center flex-col'>
                <div className='h-16 w-1 bg-pink-400 rounded-b-md'></div>
                <p className='transform -rotate-90 text-xs font-bold my-7 text-pink-400 uppercase'>
                  problem
                </p>
              </div>
              <div className='h-12 w-2 self-end rounded-t-md mt-1 bg-green-400'></div>
              <p className='text-left text-sm text-gray-600 p-4 font-bold'>
                Excepturi suscipit optio consequatur soluta magni veniam?
              </p>
            </div>

            <div className='flex flip-card-back shadow-xl'>
              <div className='flex self-end items-center flex-col'>
                <p className='opacity-0'>problem</p>
                <div className='h-16 w-1 bg-pink-400 rounded-t-md'></div>
              </div>
              <div className='flex self-start items-center flex-col'>
                <p className='absolute top-12 transform -rotate-90 text-xs font-bold my-7 text-green-400 uppercase'>
                  solution
                </p>
                <div className='h-12 w-1 end rounded-t-md mb-1 bg-green-400'></div>
              </div>
              <p className='p-4 text-left text-sm font-semibold text-gray-600'>
                Magni inventore veniam eum libero expedita architecto non.
                Fugiat consequatur omnis, odio ad provident maiores impedit
                velit quos naulla officiis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Parallax = () => {
  return (
    <div className='background flex justify-evenly px-8 lg:px-0 items-center h-72'>
      <div>
        <h1 className='text-lg lg:text-3xl text-white font-bold'>
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <h3 className='text-sm lg:text-xl text-white'>
          Reiciendis, magnam sapiente et sit debitis sed eius.
        </h3>
      </div>

      <button className='text-xs lg:text-sm bg-blue-800 hover:bg-blue-700 p-4 ml-4 lg:ml-0 rounded-md text-white font-bold'>
        Get a free Estimate
      </button>
    </div>
  );
};

const Footer = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-evenly mb-16 border-t-2'>
      <div className='flex p-4'>
        <div className='flex flex-col mx-2'>
          <h3 className='text-sm font-bold mb-2 text-blue-800 uppercase'>
            Aperiam Praesentium
          </h3>
          <h3 className='text-sm font-bold mb-2 hover:text-gray-500 text-gray-400 cursor-pointer'>
            Voluptates
          </h3>
          <h4 className='text-sm font-bold mb-2 hover:text-gray-500 text-gray-400 cursor-pointer'>
            Soluta
          </h4>
          <h4 className='text-sm font-bold mb-2 hover:text-gray-500 text-gray-400 cursor-pointer'>
            Pariatur odit
          </h4>
          <h4 className='text-sm font-bold mb-2 hover:text-gray-500 text-gray-400 cursor-pointer'>
            Autem accusamus
          </h4>
          <h4 className='text-sm font-bold mb-2 hover:text-gray-500 text-gray-400 cursor-pointer'>
            Dignissimos quaera
          </h4>
        </div>

        <div className='flex flex-col mx-2'>
          <h3 className='text-sm font-bold mb-2 text-blue-800 uppercase'>
            Repudiandae provident
          </h3>
          <h3 className='text-sm font-bold mb-2 hover:text-gray-500 text-gray-400 cursor-pointer'>
            Voluptates
          </h3>
          <h4 className='text-sm font-bold mb-2 hover:text-gray-500 text-gray-400 cursor-pointer'>
            Soluta
          </h4>
          <h4 className='text-sm font-bold mb-2 hover:text-gray-500 text-gray-400 cursor-pointer'>
            Pariatur odit
          </h4>
          <h4 className='text-sm font-bold mb-2 hover:text-gray-500 text-gray-400 cursor-pointer'>
            Autem accusamus
          </h4>
          <h4 className='text-sm font-bold mb-2 hover:text-gray-500 text-gray-400 cursor-pointer'>
            Lorem
          </h4>
        </div>
      </div>

      <div className='flex border-b-2 sm:border-b-0 p-4'>
        <div className='flex flex-col mr-8 md:mr-4'>
          <h3 className='text-sm font-bold mb-2 text-blue-800 uppercase'>
            Consectetur Dolor
          </h3>
          <h3 className='text-sm font-bold mb-2 hover:text-gray-500 text-gray-400 cursor-pointer'>
            Voluptates
          </h3>
          <h4 className='text-sm font-bold mb-2 hover:text-gray-500 text-gray-400 cursor-pointer'>
            Soluta
          </h4>
          <h4 className='text-sm font-bold mb-2 hover:text-gray-500 text-gray-400 cursor-pointer'>
            Pariatur odit
          </h4>
          <h4 className='text-sm font-bold mb-2 hover:text-gray-500 text-gray-400 cursor-pointer'>
            Autem accusamus
          </h4>
        </div>

        <div className='flex flex-col'>
          <h3 className='text-sm font-bold mb-2 text-blue-800 uppercase'>
            Ullam Facilis
          </h3>
          <h3 className='text-sm font-bold mb-2 hover:text-gray-500 text-gray-400 cursor-pointer'>
            Voluptates
          </h3>
          <h4 className='text-sm font-bold mb-2 hover:text-gray-500 text-gray-400 cursor-pointer'>
            Soluta
          </h4>
          <h4 className='text-sm font-bold mb-2 hover:text-gray-500 text-gray-400 cursor-pointer'>
            Pariatur odit
          </h4>
          <h4 className='text-sm font-bold mb-2 hover:text-gray-500 text-gray-400 cursor-pointer'>
            Autem accusamus
          </h4>
          <h4 className='text-sm font-bold mb-2 hover:text-gray-500 text-gray-400 cursor-pointer'>
            Lorem
          </h4>
        </div>
      </div>
    </div>
  );
};
