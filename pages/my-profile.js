import Image from 'next/image';
import PageSection from '../components/global/page-section';
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
      <PageSection>
        <h3>About Me</h3>
        <p>{myProfile.bio}</p>
      </PageSection>
      <PageSection>
        <h3>My Opportunities</h3>
        <MyOpportunities />
      </PageSection>
    </>
  )
}