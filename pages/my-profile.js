import Image from 'next/image';
import { useQuery } from 'react-query';
import MyOpportunities from '../components/user-profile/my-opportunities';

export default function TalentProfilePage() {
  // const [userProfile, setUserProfile] = useState(null)
  // const [isLoading, setLoading] = useState(false)

  // useEffect(() => {
  //   setLoading(true)
  //   rpc.call('get-user-profile').then(({ data }) => {
  //     setUserProfile(data)
  //     setLoading(false)
  //   })
  // }, [])

  // if (isLoading) return <p>Loading...</p>
  // if (!userProfile) return <p>No profile data</p>

  // const { myProfile, isLoading, isError } = useMyProfile();

  const { data: myProfile, error, isFetching } = useQuery('users/get-my-profile');

  if (isFetching) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  if (!myProfile) return <p>No profile data</p>

  return (
    <main className='mx-auto lg:w-1/2 flex flex-col items-center justify-center px-2 w-full'>
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
    </main>
  )
}