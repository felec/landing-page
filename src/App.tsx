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
} from 'react-icons/hi';
import Setup from './components/setup';
import Filing from './components/filing';
import Decide from './components/decide';
import Dashboard from './components/dashboard';
import Notes from './assets/undraw_notes_anim.svg';
import Team from './assets/undraw_team_anim.svg';

export default function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <main>
        <svg
          className='absolute top-0 right-0 z-0'
          viewBox='-150 -50 300 300'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill='#FF0066'
            d='M43.6,-53.8C57.6,-49.8,70.8,-38.6,73.6,-25.1C76.4,-11.6,68.8,4.1,60.9,17.2C53.1,30.2,45,40.6,34.9,50.7C24.7,60.8,12.3,70.7,-0.4,71.2C-13.1,71.7,-26.2,62.9,-32.7,51.6C-39.2,40.3,-39.2,26.5,-47.2,12.7C-55.2,-1,-71.3,-14.7,-73.5,-28.7C-75.6,-42.8,-63.8,-57.2,-49.2,-61C-34.7,-64.9,-17.3,-58.2,-1.3,-56.4C14.8,-54.7,29.6,-57.9,43.6,-53.8Z'
            transform='translate(100 0)'
          />
        </svg>
        <div className='flex py-4 pl-16'>
          <HiCurrencyDollar size='2rem' color='#FF0066' />
          <h2 className='text-2xl ml-2 font-extrabold'> Lorem Ipsum</h2>
        </div>
        <div className='absolute top-0 left-0 w-full z-20'>
          <NavBar />
          <BodyHead />
          <HeaderBreak />
          <div data-aos-once='true' data-aos-delay='200' data-aos='fade-down'>
            <AboutBody />
          </div>
          <div data-aos-once='true' data-aos='fade-down'>
            <FeaturesTab />
          </div>
          <CardCarousel />
        </div>
      </main>

      <footer>
        {/* <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a> */}
      </footer>
    </div>
  );
}

const NavBar = () => {
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
            className='absolute top-12 right-10 h-72 w-7/12 p-2 bg-white shadow-xl rounded-md'
          >
            <div className='flex flex-col h-full justify-evenly'>
              <div className='flex justify-evenly'>
                <div className='flex hover:bg-yellow-100 rounded-md shadow-md h-16 w-40 p-4 cursor-pointer'>
                  <h2 className='text-sm font-bold'>
                    <span className='align-middle text-4xl text-yellow-600'>
                      &middot;
                    </span>{' '}
                    Labore
                  </h2>
                </div>

                <div className='flex hover:bg-gray-100 rounded-md shadow-md h-16 w-40 p-4 cursor-pointer'>
                  <h2 className='text-sm font-bold'>
                    <span className='align-middle text-4xl text-gray-600'>
                      &middot;
                    </span>{' '}
                    Recusandae
                  </h2>
                </div>

                <div className='flex hover:bg-purple-100 rounded-md shadow-md h-16 w-40 p-4 cursor-pointer'>
                  <h2 className='text-sm font-bold'>
                    <span className='align-middle text-4xl text-purple-600'>
                      &middot;
                    </span>{' '}
                    Animi velit
                  </h2>
                </div>

                <div className='flex hover:bg-green-100 rounded-md shadow-md h-16 w-40 p-4 cursor-pointer'>
                  <h2 className='text-sm font-bold'>
                    <span className='align-middle text-4xl text-green-300'>
                      &middot;
                    </span>{' '}
                    Ipsum
                  </h2>
                </div>
              </div>

              <div className='flex justify-evenly'>
                <div className='flex hover:bg-red-100 rounded-md shadow-md h-16 w-40 p-4 cursor-pointer'>
                  <h2 className='text-sm font-bold'>
                    <span className='align-middle text-4xl text-red-600'>
                      &middot;
                    </span>{' '}
                    Deserun
                  </h2>
                </div>

                <div className='flex hover:bg-yellow-100 rounded-md shadow-md h-16 w-40 p-4 cursor-pointer'>
                  <h2 className='text-sm font-bold'>
                    <span className='align-middle text-4xl text-yellow-300'>
                      &middot;
                    </span>{' '}
                    Adipisicing
                  </h2>
                </div>

                <div className='flex hover:bg-green-100 rounded-md shadow-md h-16 w-40 p-4 cursor-pointer'>
                  <h2 className='text-sm font-bold'>
                    <span className='align-middle text-4xl text-green-600'>
                      &middot;
                    </span>{' '}
                    Eveniet
                  </h2>
                </div>

                <div className='flex hover:bg-pink-100 rounded-md shadow-md h-16 w-40 p-4 cursor-pointer'>
                  <h2 className='text-sm font-bold'>
                    <span className='align-middle text-4xl text-pink-900'>
                      &middot;
                    </span>{' '}
                    Molestiae
                  </h2>
                </div>
              </div>

              <div className='flex justify-evenly'>
                <div className='flex hover:bg-indigo-100 rounded-md shadow-md h-16 w-40 p-4 cursor-pointer'>
                  <h2 className='text-sm font-bold'>
                    <span className='align-middle text-4xl text-indigo-500'>
                      &middot;
                    </span>{' '}
                    Ipsa
                  </h2>
                </div>

                <div className='flex hover:bg-pink-100 rounded-md shadow-md h-16 w-40 p-4 cursor-pointer'>
                  <h2 className='text-sm font-bold'>
                    <span className='align-middle text-4xl text-pink-900'>
                      &middot;
                    </span>{' '}
                    Consectetur
                  </h2>
                </div>

                <div className='flex items-center hover:bg-blue-100 rounded-md shadow-md h-16 w-40 p-4 cursor-pointer'>
                  <h2 className='text-sm font-bold'>
                    <span className='align-middle text-4xl text-blue-400'>
                      &middot;
                    </span>{' '}
                    Lorem
                  </h2>
                  <div className='flex items-center justify-center bg-red-400 rounded-md h-6 w-12 ml-4'>
                    <h2 className='text-xs font-bold text-white'>New</h2>
                  </div>
                </div>

                <div className='flex hover:bg-purple-100 rounded-md shadow-md h-16 w-40 p-4 cursor-pointer'>
                  <h2 className='text-sm font-bold'>
                    <span className='align-middle text-4xl text-purple-900'>
                      &middot;
                    </span>{' '}
                    Excepturi
                  </h2>
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
            className='absolute top-12 right-10 h-72 w-7/12 p-2 bg-white shadow-xl rounded-md'
          >
            <div className='flex flex-col h-full justify-between'>
              <div className='flex justify-evenly'>
                <div className='flex flex-col hover:bg-purple-100 rounded-md w-60 px-4 py-2 cursor-pointer'>
                  <div className='flex mb-2 items-center'>
                    <HiOutlineClipboardCheck size='1.5rem' color='#ac33ff' />
                    <h2 className='text-sm font-bold ml-1'>KLmsl Tjka</h2>
                  </div>
                  <p className='text-xs font-extralight text-gray-500'>
                    Lvoluptate provident tenetur, nesciunt nobis aliquam?
                  </p>
                </div>

                <div className='flex flex-col hover:bg-blue-100 rounded-md w-60 px-4 py-2 cursor-pointer'>
                  <div className='flex mb-2 items-center'>
                    <HiOutlineCloudDownload size='1.5rem' color='#3496f0' />
                    <h2 className='text-sm font-bold ml-1'>Usk Xkjgf</h2>
                  </div>
                  <p className='text-xs font-extralight text-gray-500'>
                    Lvoluptate provident tenetur, nesciunt nobis aliquam?
                  </p>
                </div>

                <div className='flex flex-col hover:bg-yellow-100 rounded-md w-60 px-4 py-2 cursor-pointer'>
                  <div className='flex mb-2 items-center'>
                    <HiOutlineTicket size='1.5rem' color='#f0d934' />
                    <h2 className='text-sm font-bold ml-1'>Vero voluptatum</h2>
                  </div>
                  <p className='text-xs font-extralight text-gray-500'>
                    Lvoluptate provident tenetur, nesciunt nobis aliquam?
                  </p>
                </div>
              </div>

              <div className='flex justify-evenly'>
                <div className='flex flex-col hover:bg-red-100 rounded-md w-60 px-4 py-2 cursor-pointer'>
                  <div className='flex mb-2 items-center'>
                    <HiOutlineBriefcase size='1.5rem' color='#ea840a' />
                    <h2 className='text-sm font-bold ml-1'>Quaerat animi</h2>
                  </div>
                  <p className='text-xs font-extralight text-gray-500'>
                    Lvoluptate provident tenetur, nesciunt nobis aliquam?
                  </p>
                </div>

                <div className='flex flex-col hover:bg-green-100 rounded-md w-60 px-4 py-2 cursor-pointer'>
                  <div className='flex mb-2 items-center'>
                    <HiViewBoards size='1.5rem' color='#55ee3d' />
                    <h2 className='text-sm font-bold ml-1'>Laudantium</h2>
                  </div>
                  <p className='text-xs font-extralight text-gray-500'>
                    Lvoluptate provident tenetur, nesciunt nobis aliquam?
                  </p>
                </div>

                <div className='flex flex-col hover:bg-pink-100 rounded-md px-4 py-2 w-60 cursor-pointer'>
                  <div className='flex mb-2 items-center'>
                    <HiOutlineColorSwatch size='1.5rem' color='#ee3d9b' />
                    <h2 className='text-sm font-bold ml-1'>Aliquid minima</h2>
                  </div>
                  <p className='text-xs font-extralight text-gray-500'>
                    Lvoluptate provident tenetur, nesciunt nobis aliquam?
                  </p>
                </div>
              </div>

              <div className='seeAllButton'>
                <h2 className='seeAll'>
                  see all features <span className='arrow'>&rarr;</span>
                </h2>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <>
      <div className='absolute top-0 right-10 py-2 z-10 bg-transparent'>
        <div className='flex items-center'>
          <div className='flex justify-end pr-8 text-white'>
            <div
              onMouseEnter={() => {
                setIsHover(true);
                setHoverType(0);
              }}
              className='hover:bg-white hover:text-red-500 rounded-md'
            >
              <h1 className='text-sm font-bold py-1 px-4'>Lorem</h1>
            </div>

            <div
              onMouseEnter={() => {
                setIsHover(true);
                setHoverType(1);
              }}
              className='hover:bg-white hover:text-red-500 rounded-md'
            >
              <h1 className='text-sm font-bold py-1 px-4'>Ipsum</h1>
            </div>

            <div
              onMouseEnter={() => {
                setIsHover(true);
                setHoverType(2);
              }}
              className='hover:bg-white hover:text-red-500 rounded-md cursor-pointer'
            >
              <h1 className='text-sm font-bold py-1 px-4'>Dolor</h1>
            </div>
          </div>

          <div className='flex justify-end text-white'>
            <div className='rounded-md mr-2 cursor-pointer'>
              <h1 className='text-sm font-bold py-1 px-4'>Login</h1>
            </div>

            <div className='bg-red-400 hover:bg-pink-600 rounded-sm cursor-pointer'>
              <h1 className='text-sm font-bold py-1 px-4'>Sign Up</h1>
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
    <div className='flex justify-between mx-16'>
      <div className='mt-32'>
        <h1 className='text-5xl text-gray-700 font-bold'>
          Lorem consectetur,
          <br />
          obcaecati ipsum dolor.
        </h1>
        <h2 className='text-xl text-gray-500 mt-4 font-medium'>
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h2>

        <div className='flex items-center h-12 w-2/3 bg-gray-50 my-8 px-4 rounded-l shadow-xl border-l-4 border-pink-500 rounded-sm'>
          <HiOutlineMailOpen size='1.2rem' color='#ee3d9b' />
          <form>
            <input
              className='focus:outline-none focus:border-transparent'
              type='text'
              placeholder='  Enter your email address'
            />
          </form>
        </div>

        <div className='flex items-center'>
          <div className='flex justify-center w-32 py-4 my-4 hover:bg-purple-700 bg-purple-500 rounded-md shadow-xl cursor-pointer'>
            <h3 className='text-sm font-bold text-white'>Get Started</h3>
          </div>
          <h3 className='text-sm font-semibold ml-4 text-gray-400'>
            Lorem ipsum dolor <br /> sit amet consectetur.
          </h3>
        </div>

        <div className='flex items-center'>
          <HiStar size='1.2rem' color='#f0d934' />
          <HiStar size='1.2rem' color='#f0d934' />
          <HiStar size='1.2rem' color='#f0d934' />
          <HiStar size='1.2rem' color='#f0d934' />
          <HiStar size='1.2rem' color='#f0d934' />
          <h2 className='text-xs text-gray-400 font-semibold my-8 ml-2'>
            Based on 10,000+ reviews
          </h2>
        </div>
      </div>
      <object
        className='self-center h-2/6 w-2/6'
        data={Team}
        type='image/svg+xml'
        aria-label='team svg'
      ></object>
    </div>
  );
};

const HeaderBreak = () => {
  return (
    <div className='join'>
      <h3 className='flex justify-center w-full mt-48 text-sm font-bold text-gray-400'>
        Join 50,000+ Highly Productive Teams
      </h3>
    </div>
  );
};

const AboutBody = () => {
  return (
    <div className='flex justify-center items-center px-32'>
      <div className='flex flex-col'>
        <h1 className='text-md font-semibold text-purple-600 mb-4'>build</h1>
        <p className='text-md font-semibold text-gray-600'>
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
        data={Notes}
        type='image/svg+xml'
        aria-label='notes svg'
      ></object>
    </div>
  );
};

const FeaturesTab = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className='tabBackground'>
      <div className='flex justify-evenly'>
        <div
          onClick={() => {
            setSelectedTab(0);
          }}
          className='flex items-center'
        >
          <div className='flex flex-col mb-8 self-start'>
            <h3 className='text-md font-semibold text-purple-600'>customize</h3>
            <h1 className={selectedTab === 0 ? 'tabSelected' : 'tabTitle'}>
              Dignissimos
            </h1>
            {selectedTab === 0 && (
              <div className='h-1 w-24 mt-14 bg-purple-600 rounded-md'></div>
            )}
          </div>
        </div>

        <div
          onClick={() => {
            setSelectedTab(1);
          }}
          className='flex flex-col mb-8'
        >
          <h3 className='opacity-0'>.</h3>
          <div className='flex items-center'>
            <div className='h-12 w-1 mr-4 bg-white opacity-30 rounded-md'></div>
            <h1 className={selectedTab === 1 ? 'tabSelected' : 'tabTitle'}>
              Voluptate
            </h1>
          </div>

          {selectedTab === 1 && (
            <div className='h-1 w-24 ml-6 mt-8 bg-purple-600 rounded-md'></div>
          )}
        </div>

        <div
          onClick={() => {
            setSelectedTab(2);
          }}
          className='flex flex-col mb-8'
        >
          <h3 className='opacity-0'>.</h3>
          <div className='flex items-center'>
            <div className='h-12 w-1 mr-4 bg-white opacity-30 rounded-md'></div>
            <h1 className={selectedTab === 2 ? 'tabSelected' : 'tabTitle'}>
              Ratione
            </h1>
          </div>

          {selectedTab === 2 && (
            <div className='h-1 w-24 ml-6 mt-8 bg-purple-600 rounded-md'></div>
          )}
        </div>

        <div
          onClick={() => {
            setSelectedTab(3);
          }}
          className='flex flex-col mb-8'
        >
          <h3 className='opacity-0'>.</h3>
          <div className='flex items-center'>
            <div className='h-12 w-1 mr-4 bg-white opacity-30 rounded-md'></div>
            <h1 className={selectedTab === 3 ? 'tabSelected' : 'tabTitle'}>
              Perspiciatis
            </h1>
          </div>

          {selectedTab === 3 && (
            <div className='h-1 w-24 ml-6 mt-8 bg-purple-600 rounded-md'></div>
          )}
        </div>
      </div>

      {selectedTab === 0 && (
        <div className='flex items-start'>
          <Dashboard />
          <div className='w-1/3 flex flex-col ml-8'>
            <h3 className='text-lg text-white font-bold mb-2 opacity-50'>
              Description
            </h3>
            <p className='text-sm font-semibold text-white'>
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
        <div className='flex items-start'>
          <Decide />
          <div className='w-1/3 flex flex-col ml-8'>
            <h3 className='text-lg text-white font-bold mb-2 opacity-50'>
              Description
            </h3>
            <p className='text-sm font-semibold text-white '>
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
        <div className='flex items-start'>
          <Filing />
          <div className='w-1/3 flex flex-col ml-8'>
            <h3 className='text-lg text-white font-bold mb-2 opacity-50'>
              Description
            </h3>
            <p className='text-sm font-semibold text-white '>
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
        <div className='flex items-start'>
          <Setup />
          <div className='w-1/3 flex flex-col ml-8'>
            <h3 className='text-lg text-white font-bold mb-2 opacity-50'>
              Description
            </h3>
            <p className='text-sm font-semibold text-white '>
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
  const [selectedCard, setSelectedCard] = useState(0);

  return (
    <div className='flex flex-col w-full p-8'>
      <h3 className='text-xs font-bold text-pink-400 uppercase'>problems</h3>
      <h1 className='text-4xl font-extrabold my-8 text-black'>Architecto</h1>

      <div className='flex justify-evenly'>
        <div
          onClick={() => {
            setSelectedCard(0);
          }}
          className='flex w-min pr-8 rounded-sm border-gray-200 border shadow-2xl'
        >
          <div className='h-32 w-1 self-start rounded-b-sm bg-pink-400'></div>

          <div className='flex flex-col items-center justify-end'>
            <h3 className='transform -rotate-90 text-xs font-bold my-7 text-green-400 uppercase'>
              solution
            </h3>
            <div className='h-8 w-1 rounded-t-sm bg-green-400'></div>
          </div>

          <div className='flex flex-col'>
            <h2 className='cardTitle'>
              <span className='text-3xl'>1.</span> <br /> Lorem ipsum dolor, sit
              amet consectetur adipisicing elit.
            </h2>

            {selectedCard === 0 && (
              <p className='text-sm w-full my-4 font-semibold text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                rerum beatae reiciendis sint vero commodi totam a officiis,
                nisi, sequi veniam sed.
              </p>
            )}
          </div>
        </div>

        <div
          onClick={() => {
            setSelectedCard(1);
          }}
          className='flex w-min ml-8 pr-8 rounded-sm border-gray-200 border shadow-2xl'
        >
          <div className='h-32 w-1 self-start rounded-b-sm bg-pink-400'></div>

          <div className='flex flex-col items-center justify-end'>
            <h3 className='transform -rotate-90 text-xs font-bold my-7 text-green-400 uppercase'>
              solution
            </h3>
            <div className='h-8 w-1 rounded-t-sm bg-green-400'></div>
          </div>

          <div className='flex flex-col'>
            <h2 className='cardTitle'>
              <span className='text-3xl'>2.</span> <br /> Vel ratione sed nulla
              illo, obcaecati quasi et architecto aut dolor placeat vero quod.
            </h2>

            {selectedCard === 1 && (
              <p className='text-sm w-full my-4 font-semibold text-gray-400'>
                Officiis repellendus unde rem expedita! In incidunt earum
                nostrum consectetur.
              </p>
            )}
          </div>
        </div>

        <div
          onClick={() => {
            setSelectedCard(2);
          }}
          className='flex w-min ml-8 pr-8 rounded-sm border-gray-200 border shadow-2xl'
        >
          <div className='h-32 w-1 self-start rounded-b-sm bg-pink-400'></div>

          <div className='flex flex-col items-center justify-end'>
            <h3 className='transform -rotate-90 text-xs font-bold my-7 text-green-400 uppercase'>
              solution
            </h3>
            <div className='h-8 w-1 rounded-t-sm bg-green-400'></div>
          </div>

          <div className='flex flex-col'>
            <h2 className='cardTitle'>
              <span className='text-3xl'>3.</span> <br /> Itaque, distinctio
              corporis quisquam impedit animi.
            </h2>

            {selectedCard === 2 && (
              <p className='text-sm my-4 font-semibold text-gray-400'>
                Officiis repellendus unde rem. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Officia officiis asperiores ipsum.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
