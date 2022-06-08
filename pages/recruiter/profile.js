import useSWR from 'swr';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import utilStyles from '../../styles/utils.module.css';

export async function getServerSideProps(context) {
  // const { data, error } = useSWR('/api/user', fetch);

  const profileData = {
    name: 'Tim Carlock',
    outreachFields: ['Role Type', 'Seniority', 'Role Details'],
    avatar: 'profile.jpg'
  };

  return {
    props: {
      profile: profileData
    }
  };
}

export default function TalentProfile({ profile }) {
  return (
    <main className={styles.main}>
      <Link href="/">
        <a>
          <Image
            priority
            src={`/images/${profile.avatar}`}
            className={utilStyles.borderCircle}
            height={108}
            width={108}
            alt={'test'}
          />
        </a>
      </Link>
      <h2 className={utilStyles.headingLg}>
        <Link href="/">
          <a className={utilStyles.colorInherit}>{profile.name}</a>
        </Link>
      </h2>
    </main>
  )
}