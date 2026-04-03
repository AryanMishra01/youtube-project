import React from 'react'

const Comment = ({data}) => {
  return (
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg m-2'>
        <img
          className='w-12 h-12'
          alt='user'
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
        <div className='px-3'> 
        <p className='font-bold'>{data?.snippet?.topLevelComment?.snippet?.authorDisplayName}</p>
        <p>{data?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
        </div>
    </div>
  )
}

export default Comment