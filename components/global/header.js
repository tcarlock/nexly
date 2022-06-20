import Logo from '../global/logo';
import Link from 'next/link';

export default function Header({ children, home }) {
  return (
    <header>
      <nav className='flex items-center justify-between flex-wrap bg-slate-700 p-6'>
        <div className='flex items-center flex-shrink-0 text-white mr-6'>
          <Logo />
        </div>
        <div className='block lg:hidden'>
          <button className='flex items-center px-3 py-2 border rounded text-slate-50 border-teal-400 hover:text-slate-400 hover:border-white'>
            <svg className='fill-current h-3 w-3' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'><title>Menu</title><path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'/></svg>
          </button>
        </div>
        <div className='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
          <div className='text-sm lg:flex-grow'>
            <Link href='/'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-slate-50 hover:text-slate-400 mr-4'>Home</a>
            </Link>
            <Link href='/my-profile'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-slate-50 hover:text-slate-400 mr-4'>My Profile</a>
            </Link>
            <Link href='/talent/profile'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-slate-50 hover:text-slate-400 mr-4'>Browse Jobs</a>
            </Link>
            <Link href='/recruiter/share-posting'>
              <a className='block mt-4 lg:inline-block lg:mt-0 text-slate-50 hover:text-slate-400 mr-4'>Connect with Talent</a>
            </Link>
          </div>
          <div>
            <a href='#' className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-slate-700 hover:bg-white mt-4 lg:mt-0'>Download</a>
          </div>
        </div>
      </nav>
    </header>
  );
}