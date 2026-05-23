import Button from '../button/Button'
import { useNavigate } from 'react-router'

export default function HeroBanner () {
  const navigate = useNavigate()

  return (
    <div className='bg-linear-to-r from-blue-500 to-purple-600 py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-white mb-4'>
            I Tried Building a Palace and Somehow Built a Hut
          </h1>
          <p className='text-xl text-blue-100 mb-8'>
            Welcome, random internet traveler. As of 24 May 2025, my frontend
            skills are still under construction. I started this project with
            huge ambitions and somehow ended up building a digital jhopdi
            instead.
          </p>
          <p className='text-xl text-blue-100 mb-8'>
            At first, it was discouraging. Now I just think it’s funny enough to
            keep online as proof that every developer starts somewhere.
          </p>
          <p className='text-xl text-blue-100 mb-8'>
            Also, the website runs surprisingly fast… although that might only
            be because it currently has just 3 sections.
          </p>

          <Button
            className='btn__secondary'
            onClick={() => navigate('/project')}
          >
            Go to Project
          </Button>
        </div>
      </div>
    </div>
  )
}
