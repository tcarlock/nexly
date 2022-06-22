import { useRouter } from'next/router';
import { useQuery } from'react-query';
import { Fragment } from'react'
import {
  BriefcaseIcon,
  XIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  BookmarkIcon,
  LocationMarkerIcon,
  HeartIcon,
  OfficeBuildingIcon
} from'@heroicons/react/outline';
import { Menu, Transition } from'@headlessui/react';

export default function JobDetailsPage() {
  const router = useRouter()
  const { jobId } = router.query;

  const { data: job, error, isFetching, isPlaceholderData } = useQuery(`postings/${jobId}`, { enabled: Boolean(jobId) });

  if (error) return <p>Error...</p>
  // if (!job) return <p>This job can't be found</p>

  if(isFetching || !job) {
    return (
      <article className='prose max-w-none w-full'>
        <div class='mb-8 bg-gray-300 h-6 rounded-md' />
        <div className='shadow overflow-hidden sm:rounded-md mb-6 w-full'>
          <div className='px-4 py-5 bg-white sm:p-6'>
            <h4>About this Role</h4>
            <p class='bg-gray-300 mx-2 h-6 rounded-sm' />
            <p class='bg-gray-300 mx-2 h-6 rounded-sm' />
            <p class='bg-gray-300 mx-2 h-6 rounded-sm' />
          </div>
        </div>
        <div className='shadow overflow-hidden sm:rounded-md mb-6 w-full'>
          <div className='px-4 py-5 bg-white sm:p-6'>
            <h4>Responsibilities</h4>
            <p class='bg-gray-300 mx-2 h-6 rounded-sm' />
          </div>
        </div>
        <div className='shadow overflow-hidden sm:rounded-md mb-6 w-full'>
          <div className='px-4 py-5 bg-white sm:p-6'>
            <h4>Qualifications</h4>
            <p class='bg-gray-300 mx-2 h-6 rounded-sm' />
          </div>
        </div>
        <div className='shadow overflow-hidden sm:rounded-md mb-6 w-full'>
          <div className='px-4 py-5 bg-white sm:p-6'>
            <h4>Locations</h4>
            <p class='bg-gray-300 mx-2 h-6 rounded-sm' />
          </div>
        </div>
      </article>
    )
  }

  return (
    <article className='prose max-w-none w-full'>
      <div className='shadow overflow-hidden sm:rounded-md mb-6 w-full'>
        <div className='bg-white p-6'>
          <div className='lg:flex lg:items-center lg:justify-between'>
            <div className='flex-1 min-w-0'>
              <h2 className='text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate'>
                {job.title}
              </h2>
              <div className='mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6'>
                <div className='mt-2 flex items-center text-sm text-gray-500'>
                  <BriefcaseIcon className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400' aria-hidden='true' />
                  Full-time
                </div>
                <div className='mt-2 flex items-center text-sm text-gray-500'>
                  <LocationMarkerIcon className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400' aria-hidden='true' />
                  Remote
                </div>
                <div className='mt-2 flex items-center text-sm text-gray-500'>
                  <CurrencyDollarIcon className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400' aria-hidden='true' />
                  $142k &ndash; $153k
                </div>
                <div className='mt-2 flex items-center text-sm text-gray-500'>
                  <OfficeBuildingIcon className='flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400' aria-hidden='true' />
                  {job.company_name}
                </div>
              </div>
            </div>
            <div className='mt-5 flex lg:mt-0 lg:ml-4'>
              <span className='hidden sm:block'>
                <button
                  type='button'
                  className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <HeartIcon className='-ml-1 mr-2 h-5 w-5 text-gray-500' aria-hidden='true' />
                  I&apos;m Interested
                </button>
              </span>

              <span className='hidden sm:block ml-3'>
                <button
                  type='button'
                  className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <BookmarkIcon className='-ml-1 mr-2 h-5 w-5 text-gray-500' aria-hidden='true' />
                  Review Later
                </button>
              </span>

              <span className='sm:ml-3'>
                <button
                  type='button'
                  className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                >
                  <XIcon className='-ml-1 mr-2 h-5 w-5' aria-hidden='true' />
                  Not Interested
                </button>
              </span>

              {/* Dropdown */}
              <Menu as='div' className='ml-3 relative sm:hidden'>
                <Menu.Button className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                  More
                  <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5 text-gray-500' aria-hidden='true' />
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter='transition ease-out duration-200'
                  enterFrom='transform opacity-0 scale-95'
                  enterTo='transform opacity-100 scale-100'
                  leave='transition ease-in duration-75'
                  leaveFrom='transform opacity-100 scale-100'
                  leaveTo='transform opacity-0 scale-95'
                >
                  <Menu.Items className='origin-top-right absolute right-0 mt-2 -mr-1 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(active ?'bg-gray-100' :'','block px-4 py-2 text-sm text-gray-700')}
                        >
                          Edit
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href='#'
                          className={classNames(active ?'bg-gray-100' :'','block px-4 py-2 text-sm text-gray-700')}
                        >
                          View
                        </a>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
        </div>
      </div>
      <div className='shadow overflow-hidden sm:rounded-md mb-6 w-full'>
        <div className='bg-white p-6'>
          <h4>Responsibilities</h4>
          <div dangerouslySetInnerHTML={{ __html: job.responsibilities }} />
        </div>
      </div>
      <div className='shadow overflow-hidden sm:rounded-md mb-6 w-full'>
        <div className='bg-white p-6'>
          <h4>Qualifications</h4>
          <div dangerouslySetInnerHTML={{ __html: job.qualifications }} />
        </div>
      </div>
      <div className='shadow overflow-hidden sm:rounded-md mb-6 w-full'>
        <div className='bg-white p-6'>
          <h4>Locations</h4>
          <p>{job.locations.map((location) => `${location.display} `)}</p>
        </div>
      </div>
    </article>
  )
}