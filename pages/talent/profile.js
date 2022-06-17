import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../../styles/utils.module.css';
import rpc from '../../utils/rpc';

export default function TalentProfilePage({ profile }) {
  const [userProfile, setUserProfile] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    rpc.call('get-user-profile').then(({ data }) => {
      setUserProfile(data)
      setLoading(false)
    })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!userProfile) return <p>No profile data</p>

  console.log(userProfile);

  return (
    <main>
      <Link href="/">
        <a>
          <Image
            priority
            src={`/images/${userProfile.avatar}`}
            className={utilStyles.borderCircle}
            height={108}
            width={108}
            alt={'test'}
          />
        </a>
      </Link>
      <h2 className={utilStyles.headingLg}>
        <Link href="/">
          <a className={utilStyles.colorInherit}>{userProfile.name}</a>
        </Link>
      </h2>
    </main>
  )
}