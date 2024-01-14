import Aside from '@/components/Aside'
import Post from '@/components/Post'
import Sidebar from '@/components/Sidebar'
import Image from 'next/image'
import { Key } from 'react'

export default function Home() {
  const data = [
    {
      username: "hania_amir",
      image: "/hania.jpg",
      location: "USA",
    },
    {
      username: "_tony_",
      image: "/tony.jpg",
      location: "USA",
    },
    {
      username: "scarlet_s",
      image: "/scarlet.jpeg",
      location: "",
    },

  ]
  return (
    <>
      <div className='w-full flex h-[100vh] overflow-y-scroll pt-10 transition-all duration-400 ease-in-out'>
        <div className='px-2 pb-10 sm:px-0 m-auto'>
          {
            data.map((data: any, index: Key | null | undefined) => (
              <Post key={index} username={data.username} location={data.location} image={data.image} />
            ))
          }
        </div>
        <Aside />
      </div>
    </>
  )
}
