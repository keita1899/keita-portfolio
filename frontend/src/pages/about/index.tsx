import { Box, Container } from '@mui/material'
import axios from 'axios'
import camelcaseKeys from 'camelcase-keys'
import Head from 'next/head'
import { PageTitle } from '@/components/utility/PageTitle'
import { CareerTable } from '@/features/about/components/CareerTable'
import { CertificationList } from '@/features/about/components/CertificationList'
import { HobbyList } from '@/features/about/components/HobbyList'
import { ProfileInfo } from '@/features/about/components/ProfileInfo'
import { Section } from '@/features/about/components/Section'
import { Career } from '@/types/career'
import { Certification } from '@/types/certification'
import { Hobby } from '@/types/hobby'
import { Profile } from '@/types/profile'

export type AboutProps = {
  profile: Profile
  careers: Career[]
  certifications: Certification[]
  hobbies: Hobby[]
}

const About = ({ profile, careers, certifications, hobbies }: AboutProps) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="濱崎慶太の自己紹介ページです。これまでの経歴、取得した資格、趣味などをご紹介します。"
        />
        <title>keita-portfoilo | About</title>
      </Head>
      <Container maxWidth="sm" sx={{ paddingY: 10 }}>
        <PageTitle title="About" />
        <Box sx={{ marginTop: 4 }}>
          <Section title="自己紹介">
            <ProfileInfo profile={profile} />
          </Section>
          <Section title="経歴">
            <CareerTable careers={careers} />
          </Section>
          <Section title="資格">
            <CertificationList certifications={certifications} />
          </Section>
          <Section title="趣味">
            <HobbyList hobbies={hobbies} />
          </Section>
        </Box>
      </Container>
    </>
  )
}

export const getStaticProps = async () => {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'https://backend:3000'
    const response = await axios.get(`${backendUrl}/api/about`)
    const { profile, careers, certifications, hobbies } = camelcaseKeys(
      response.data,
      { deep: true },
    )

    return {
      props: {
        profile,
        careers,
        certifications,
        hobbies,
      },
    }
  } catch (error) {
    console.error('Failed to fetch profile:', error)
    return {
      notFound: true,
    }
  }
}
export default About
