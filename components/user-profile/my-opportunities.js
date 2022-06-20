import { useQuery } from 'react-query';
import Link from 'next/link';
import { BeakerIcon } from '@heroicons/react/solid';

export default function MyOpportunities() {
  const { data: myOpportunities, error, isFetching } = useQuery('postings/get-my-opportunities');

  if (isFetching) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  if (!myOpportunities) return <p>No opportunities</p>

  return (
    <table className='border-collapse table-auto w-full text-sm'>
      <tbody className=''>
        {
          myOpportunities.jobs.map((job) => {
            return (
              <tr className='no-border p-8 text-slate-500 even:bg-white odd:bg-slate-100'>
                <td className='px-1 py-2'>
                  <Link href='/'>
                    <a>
                      {job.title}
                    </a>
                  </Link>
                </td>
                <td className='px-1 py-2'>
                  <BeakerIcon className='h-5 w-5 invisible hover:visible' />
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  )
}