import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconFileDownload,
} from '@tabler/icons'
import profile from '../image/profile.jpg'
import bglaptop from '../image/pexels-rahul-pandit-1933900.jpg'
import Badge from './Badge'
import ButtonBar from './ButtonBar'

function Hero() {
  return (
    <section className='min-h-screen bg-bg relative'>
      <div className='relative z-20 md:w-1/2 w-full mx-auto shadow-lg'>
        <div className='bg-zinc-100 py-6'>
          <img
            src={profile}
            alt='Foto profile'
            className='rounded-2xl border border-zinc-600 max-h-[200px] mx-auto'
          />
          <h1 className='md:text-5xl text-4xl text-center my-2 font-semibold'>
            Eris Sulistina
          </h1>
          <h3 className='text-md text-zinc-500 text-center'>Web Developer</h3>
          <div className='flex justify-center align-middle mt-4 mx-4 md:mx-2 gap-2 flex-wrap'>
            <Badge text='Profesional' />
            <Badge text='Berpengalaman' />
            <Badge text='Cakap' />
            <Badge text='Bertanggungjawab' />
            <Badge text='Dapat Dipercaya' />
            <Badge text='Team Work' />
            <Badge text='Learner Forever' />
          </div>
        </div>
      </div>
      <div className='opacity-90 md:opacity-100 relative z-10 w-11/12 mx-auto bg-zinc-100 grid grid-rows-1 grid-cols-3 md:grid-cols-6 justify-center mt-6 md:mt-12 rounded-md'>
        <ButtonBar href='/' text='CV'>
          <IconFileDownload />
        </ButtonBar>
        <ButtonBar href='/' text='Email'>
          <IconBrandGmail />
        </ButtonBar>
        <ButtonBar href='/' text='Whatsapp'>
          <IconBrandWhatsapp />
        </ButtonBar>
        <ButtonBar href='/' text='Instagram'>
          <IconBrandInstagram />
        </ButtonBar>
        <ButtonBar href='/' text='LinkedIn'>
          <IconBrandLinkedin />
        </ButtonBar>
        <ButtonBar href='/' text='Github'>
          <IconBrandGithub />
        </ButtonBar>
      </div>
      <div>
        <img
          src={bglaptop}
          alt='Photo by Rahul Pandit from Pexels: https://www.pexels.com/photo/blue-and-red-light-from-computer-1933900/'
          className='absolute bottom-0 md:hidden'
        />
      </div>
    </section>
  )
}

export default Hero
