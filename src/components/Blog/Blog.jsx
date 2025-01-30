import profile from '../../assets/images/profile.png'
import { FaBookmark } from 'react-icons/fa';
import PropTypes from 'prop-types';
const Blog = ({blog,handleAddBookmark}) => {
    const {title,author,reading_time,post_date,hashtag} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8 mt-5' src='https://i.postimg.cc/ZY7zhd7Q/high-angle-plant-notebook-frame.jpg' alt="" />
            <div className='flex justify-between'>
                <div className='flex '>
                    <img className='w-12' src={profile} alt="" />
                    <div className='ml-3'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{post_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddBookmark()} 
                    className='ml-2 text-2xl'>
                        <FaBookmark /></button>
                       
                </div>
            </div>
            <h2 className='text-4xl mt-3'>{title}</h2>
            <p>{
                hashtag.map((hash,idx)=><span key={idx} style={{ marginRight: '10px' }}>
                    <a href={`#${hash}`} style={{ color: '#007bff', textDecoration: 'none' }}>
                      #{hash}
                    </a>
                  </span>)
                }</p>
            
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;