import Image from 'next/image';
import Link from 'next/link';
import useMyProfile from '../hooks/use-my-profile';

export default function TalentProfilePage({ profile }) {
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

  const { myProfile, isLoading, isError } = useMyProfile();

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error...</p>
  if (!myProfile) return <p>No profile data</p>

  return (
    <main className='container mx-auto lg:w-1/2 flex flex-col items-center justify-center px-2 w-full'>
      <Image
        priority
        src={`/images/${myProfile.avatar}`}
        className='rounded-full mb-8'
        height={150}
        width={150}
        alt={myProfile.name}
      />
      <h2 className='text-3xl mb-8'>{myProfile.name}</h2>
      <p>{myProfile.bio}</p>
    </main>
  )
}