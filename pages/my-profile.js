import Image from 'next/image';
import { useQuery } from 'react-query';
import MyOpportunities from '../components/user-profile/my-opportunities';

export default function MyProfilePage() {
  const { data: myProfile, error, isFetching } = useQuery('users/get-my-profile');

  if (isFetching) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  if (!myProfile) return <p>No profile data</p>

  return (
    <>
      <div className='mb-6'>
        <Image
          priority
          src={`/images/${myProfile.avatar}`}
          className='rounded-full'
          height={150}
          width={150}
          alt={myProfile.name}
        />
      </div>
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
    </>
  )
}