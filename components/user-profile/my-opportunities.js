import { useQuery } from 'react-query';
import Link from 'next/link';
import { ArchiveIcon } from '@heroicons/react/outline';
import { BookmarkIcon } from '@heroicons/react/outline';

export default function MyOpportunities() {
  const { data: myOpportunities, opportunitiesError, isFetchingOpportunities } = useQuery('postings/get-my-opportunities');
  const { data: recruiters, recruitersError, isFetchingRecruiters } = useQuery('users/get-recruiters');

  if (isFetchingOpportunities || isFetchingRecruiters) return <p>Loading...</p>
  if (opportunitiesError) return <p>Error...</p>
  if (!myOpportunities) return <p>No opportunities</p>

  return (
    <table className='border-collapse table-auto w-full text-sm'>
      <tbody className=''>
        {
          myOpportunities.jobs.slice(0, 7).map((job, index) => {
            return (
              <tr key={job.id} className='group no-border p-8 text-slate-500 even:bg-white odd:bg-slate-100'>
                <td className='px-1 py-2'>
                  <Link href={`/postings/${job.id}`}>
                    <a>
                      {`${job.title} @ ${job.company_name}`}
                    </a>
                  </Link>
                </td>
                <td className='px-1 py-2'>
                  <Link href={`/postings/${job.id}`}>
                    <a>
                      {`${recruiters[index].name.first} ${recruiters[index].name.last}`}
                    </a>
                  </Link>
                </td>
                <td className='px-1 py-2'>
                  <Link href={`/postings/${job.id}`}>
                    <a>
                      {index % 2 ? 'Interviewing' : 'Pending Review'}
                    </a>
                  </Link>
                </td>
                <td className='px-1 py-2'>
                  <div className='flex flex-row'>
                    <BookmarkIcon className='h-5 w-5 mx-1 invisible group-hover:visible delay-75 ease-in-out' />
                    <ArchiveIcon className='h-5 w-5 mx-1 invisible group-hover:visible delay-75 ease-in-out' />
                  </div>
                </td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  )
}