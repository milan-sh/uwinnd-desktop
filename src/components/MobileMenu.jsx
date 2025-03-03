import React from 'react'
import home from "../assets/home.svg"
import groups from "../assets/groups.svg"
import emoji_objects from "../assets/emoji_objects.svg"
import event_available from "../assets/event_available.svg"
import notification from "../assets/notifications.svg"

const MobileMenu = () => {
  return (
    <footer className='flex justify-between items-center p-4 gap-x-2.5'>
      <button className='flex flex-col justify-center items-center gap-y-1'>
        <img className='h-6 object-contain' src={home} alt="" />
        <h3 className='text-gray-500 text-sm font-semibold'>Home</h3>
      </button>
      <button className='flex flex-col justify-center items-center gap-y-1 bg-gray-100 py-2 px-3 rounded-lg'>
        <img className='h-6' src={groups} alt="" />
        <h3 className='text-[#7948BB] text-sm font-semibold'>Community</h3>
      </button>
      <button className='flex flex-col justify-center items-center gap-y-1'>
        <img className='h-6' src={emoji_objects} alt="" />
        <h3 className='text-gray-500 text-sm font-semibold'>Explore</h3>
      </button>
      <button className='flex flex-col justify-center items-center gap-y-1'>
        <img className='h-6' src={event_available} alt="" />
        <h3 className='text-gray-500 text-sm font-semibold'>Booking</h3>
      </button>
      <button className='flex flex-col justify-center items-center gap-y-1'>
        <img className='h-6' src={notification} alt="" />
        <h3 className='text-gray-500 text-sm font-semibold'>Notification</h3>
      </button>
    </footer>
  )
}

export default MobileMenu
