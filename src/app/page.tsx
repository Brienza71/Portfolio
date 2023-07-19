"use client" //Como estamos trabalhando em um Server component, para utilizar hooks(que são Client Components, é necessário adicionar essa tag para indicar o uso de Clients Components)
import {BsFillMoonStarsFill, BsFillSunFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import Image from 'next/image';
import perfil from '../../public/perfil.png';
import camadas from '../../public/camadas.png';
import tela from '../../public/tela_azul.png';
import cubinho from '../../public/3d.png';
import proj1 from '../../public/proj1.png';
import proj2 from '../../public/proj2.png';
import proj3 from '../../public/proj3.png';
import {useState} from 'react';


export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ""}> {/* Se a classe darkMode for verdadeira, irá acrescentar dark na classe, se não, irá tira-la */}
      <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className="min-h-screen">
          <nav className='py-10 mb-12 flex justify-between'>
          <h1 className='text-xl font-burtons dark:text-white'>DEVELOPED BY LEONARDO BRIENZA</h1>
            <ul className='flex items-center'>
              <li>
                {darkMode === true ? <BsFillSunFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer h-8 w-8 text-yellow-400'  />
                 : <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer h-8 w-8 text-gray-500' /> }
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>
              Leonardo Brienza Delfino
            </h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white '>
              Desenvolvedor FullStack
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>
              Desenvolvedor FullStack, com conhecimento em NodeJS, ReactJS, NextJS, MySQL, Tailwind
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className='relative mx-auto rounded-full w-80 h-80 mt-20 mb-10 overflow-hidden md:h-96 md:w-96'>
            <Image alt='perfil' src={perfil}  objectFit='cover'/>
          </div>
        </section>
        
        {/* Cards */}
        <section>
          <div >
            <h3 className='text-3xl py-1 dark:text-white'>
              Services I offer
            </h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Since the beginning of my journey as a freel developer, I've done remote work
              <span className='text-teal-500'> agencies</span> consulted for
              <span className='text-teal-500'> startups</span> for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              I offer from a wide range of services, including programming and teaching.
            </p>
          </div>
          <div className='lg:flex gap-10'>
            {/* Primeiro Card */}
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image className='mx-auto' src={camadas} alt='camadas' width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Beautiful Designs
              </h3>
              <p className='py-2'>
                Creating elegant designs suited for your design theory
              </p>
              <h4 className='py-4 text-teal-600'>
                Design tools I use
              </h4>
              <p className='text-gray-800'>Photoshop</p>
              <p className='text-gray-800'>Illustrator</p>
              <p className='text-gray-800'>Figma</p>
            </div>
            {/* Segundo Card */}
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image className='mx-auto' src={cubinho} alt='camadas' width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Beautiful Designs
              </h3>
              <p className='py-2'>
                Creating elegant designs suited for your design theory
              </p>
              <h4 className='py-4 text-teal-600'>
                Design tools I use
              </h4>
              <p className='text-gray-800'>Photoshop</p>
              <p className='text-gray-800'>Illustrator</p>
              <p className='text-gray-800'>Figma</p>
            </div>
            {/* Terceiro Card */}
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image className='mx-auto' src={tela} alt='camadas' width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Beautiful Designs
              </h3>
              <p className='py-2'>
                Creating elegant designs suited for your needs following core design theory
              </p>
              <h4 className='py-4 text-teal-600'>Design tools I use</h4>
              <p className='text-gray-800'>Photoshop</p>
              <p className='text-gray-800'>Illustrator</p>
              <p className='text-gray-800'>Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>
              Portforio
            </h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Since the beginning of my journey as a freel developer, I've done remote work
              <span className='text-teal-500'> agencies</span> consulted for
              <span className='text-teal-500'> startups</span> for both business and consumer use.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              I offer from a wide range of services, including programming and teaching.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/3 flex-1'>
              <Image alt='projeto1' src={proj1} className='rounded-lg object-cover' style={{height: '100%', width: '100%'}} layout='resposive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image alt='projeto2' src={proj2} className='rounded-lg object-cover' style={{height: '100%', width: '100%'}} layout='resposive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image alt='projeto3' src={proj3} className='rounded-lg object-cover' style={{height: '100%', width: '100%'}} layout='resposive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image alt='projeto3' src={proj3} className='rounded-lg object-cover' style={{height: '100%', width: '100%'}} layout='resposive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image alt='projeto3' src={proj3} className='rounded-lg object-cover' style={{height: '100%', width: '100%'}} layout='resposive'/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image alt='projeto3' src={proj3} className='rounded-lg object-cover' style={{height: '100%', width: '100%'}} layout='resposive'/>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}