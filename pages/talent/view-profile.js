import Image from 'next/image';
import { useQuery } from 'react-query';

export default function TalentProfilePage() {
  const { data: myProfile, error, isFetching } = useQuery('users/get-my-profile');

  if (isFetching) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  if (!myProfile) return <p>No profile data</p>

  return (
    <div className='w-full'>
      <Image
        priority
        src={`/images/${myProfile.avatar}`}
        className='rounded-full mb-8'
        height={150}
        width={150}
        alt={myProfile.name}
      />
      <h2 className='text-3xl mb-8'>{myProfile.name}</h2>
      <div className='shadow overflow-hidden sm:rounded-md mb-6 w-full'>
        <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
          <h3>About Me</h3>
          <p>{myProfile.bio}</p>
        </div>
      </div>
      <div className='shadow overflow-hidden sm:rounded-md mb-6 w-full'>
        <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
          <h3>My Opportunities</h3>
          <MyOpportunities />
        </div>
      </div>
    </ div>
  )
}