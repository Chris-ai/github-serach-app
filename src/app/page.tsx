import Image from 'next/image'
import Container from '@/components/Container'
import GithubProfile from '@/components/GithubProfile'

export default function Home() {
  return (
    <main className='min-h-screen'>
        <Container>
            <GithubProfile />
        </Container>
    </main>
  )
}
