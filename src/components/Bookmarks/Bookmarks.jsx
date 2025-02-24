
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks,readingTime}) => {
  return (
    <div className='md:w-1/3 bg-gray-300 ml-4 mt-2 rounded-md pt-4'>
        <div>
            <h3 className='text-3xl text-center font-semibold bg-purple-400 rounded-xl'>Reading Time: {readingTime}</h3>
        </div>
    <h2 className="text-3xl text-center font-bold">bookmarked Blogs:{bookmarks.length}</h2>
    {bookmarks.map((bookmark) => (
      <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
    ))}
   
</div>
  )
}

Bookmarks.propTypes = {
bookmarks: PropTypes.array.isRequired,
readingTime: PropTypes.number.isRequired
}

export default Bookmarks
