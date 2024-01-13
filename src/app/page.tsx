import Aside from '@/components/Aside'
import Card from '@/components/Card'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full h-full flex'>
      <Sidebar />
      <div className='content w-full h-[100vh] overflow-y-scroll flex pt-10'>
        <div className='px-2 pb-10 sm:px-0 m-auto'>
          <Card />
          <Card />
        </div>
        <Aside />
      </div>
    </div>
  )
}
