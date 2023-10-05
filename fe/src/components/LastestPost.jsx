import React, { useEffect, useState } from "react";
import posts from "../../../be/routes/posts";

function LastestPost() {
	const [currentPage, setCurrentPage] = useState(1);
	const [post, setPost] = useState([]);

	const getPost = async () => {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_SERVER_BASE_URL}/post`
			);
			const data = await response.json();
			setPost(data);
		} catch (e) {
			console.error(e);
		}
	};

	const handleNextPage = ()=>{
		setCurrentPage((prev)=>{prev+1})
	}

	const handlePreviousPage = ()=>{
		setCurrentPage((prev)=>{prev-1})
	}

	useEffect(() => {
		getPost();
	}, []);

	return (
		<div>
		{posts && posts.posts?.map((post,i)={
			return(
				<li key=(i)>{post.title}</li>
			)
		})}

		<button onClick={handlePreviousPage}></button>
		</div>);
}

export default LastestPost;
