import {
  IconBriefcase,
  IconCertificate,
  IconHome,
  IconKeyboard,
  IconUser,
} from '@tabler/icons'

function Navigasi() {
  return (
    <nav>
      <div
        id='NavDesktop'
        className='bg-zinc-900  text-zinc-100 sm:block hidden sticky top-0'
      >
        <div className='container mx-auto'>
          <div className='flex justify-between h-12'>
            <div className='flex place-items-center'>
              <a
                href='#'
                className='flex px-2 py-2 hover:bg-zinc-700 text-blue-300 font-bold'
              >
                Sejutaimpian
              </a>
              <a href='/' className='flex px-2 py-2 hover:bg-zinc-700'>
                About Me
              </a>
              <a href='/' className='flex px-2 py-2 hover:bg-zinc-700'>
                My Skills
              </a>
              <a href='/' className='flex px-2 py-2 hover:bg-zinc-700'>
                Projects
              </a>
              <a href='/' className='flex px-2 py-2 hover:bg-zinc-700'>
                Sertificates
              </a>
            </div>
            <button className='mx-2 rounded-sm border border-blue-800 bg-blue-500 hover:bg-blue-600 hover:border-zinc-100 my-2 px-4'>
              Hire Me
            </button>
          </div>
        </div>
      </div>
      <div
        id='NavMobile'
        className='bg-zinc-900 text-zinc-100 sm:hidden block fixed bottom-0 left-0 right-0 z-[999] h-auto'
      >
        <div className='flex place-items-center justify-around'>
          <a
            href='#'
            className='flex justify-center flex-col items-center px-2 py-2 hover:bg-zinc-700 relative'
          >
            <IconHome />
            <div className='text-sm'>Home</div>
          </a>
          <a
            href='#'
            className='flex justify-center flex-col items-center px-2 py-2 hover:bg-zinc-700 relative'
          >
            <IconUser />
            <div className='text-sm'>About Me</div>
          </a>
          <a
            href='#'
            className='flex justify-center flex-col items-center px-2 py-2 hover:bg-zinc-700 relative'
          >
            <IconKeyboard />
            <div className='text-sm'>Skills</div>
          </a>
          <a
            href='#'
            className='flex justify-center flex-col items-center px-2 py-2 hover:bg-zinc-700 relative'
          >
            <IconBriefcase />
            <div className='text-sm'>Projects</div>
          </a>
          <a
            href='#'
            className='flex justify-center flex-col items-center px-2 py-2 hover:bg-zinc-700 relative'
          >
            <IconCertificate />
            <div className='text-sm'>Certificates</div>
          </a>
        </div>
      </div>
      <div className='my-96 bg-slate-800'>contoh kosong</div>
    </nav>
  )
}

export default Navigasi
