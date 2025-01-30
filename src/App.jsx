import { useState } from "react";

import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";

function App() {
  const [bookmarks,setBookmarks]=useState([])
  const[readingTime,setReadingTime]=useState(0)
  
 
 
  const handleAddBookmark=blog=>{
    const newBookmarks=[...bookmarks,blog]
  setBookmarks(newBookmarks)
    
  }
  const handleReadingMarkasRead=(time,id)=>{
    console.log(time)
    setReadingTime(readingTime+time);
    //removing the blog from bookmarks
    const remainnigBookmark=bookmarks.filter(bookmark=>bookmark.id!==id)
    setBookmarks(remainnigBookmark)

  }
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddBookmark={handleAddBookmark} handleReadingMarkasRead={handleReadingMarkasRead}></Blogs>
        <Bookmarks bookmarks={bookmarks}readingTime={readingTime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
