import React from 'react'

const Comment = ({data}) => {
  const authorName = data?.snippet?.topLevelComment?.snippet?.authorDisplayName;
  return (
    <article className='flex shadow-sm bg-gray-100 p-2 rounded-lg m-2'>
      <img
        className='w-12 h-12 rounded-full'
        alt={authorName ? `${authorName} avatar` : ""}
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className='px-3'>
        <p className='font-bold'>{authorName}</p>
        <p>{data?.snippet?.topLevelComment?.snippet?.textDisplay}</p>
      </div>
    </article>
  )
}

export default Comment 