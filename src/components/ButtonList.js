import React from 'react'
import Button from './Button'

const ButtonList = () => {
 const names = ["All", "Music", "Sports", "Gaming", "Movies", "News", "Live", "Fashion", "Learning", "Spotlight", "Comedy", "Beauty", "Podcast", "Cooking"];
  return (
    <div className='flex'> 
    {names.map (value => <Button key={value} name={value}/>)}
    </div>
  )
}
export default ButtonList