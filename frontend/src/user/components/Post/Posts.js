/* eslint-disable jsx-a11y/alt-text */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getPosts } from "../../../redux/actions/postAction";
import AddPost from "./AddPost";
import PostItem from "./PostItem";

/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Posts() {
  /* const [posts, setposts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/pi/postRoute/post").then((res) => setposts(res.data.posts));
  }, []);
  console.log(posts);*/

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  const posts = useSelector((state) => state.postReducer.posts);

  return (
    <body>
      <div class="main_content">
        <div class="mcontainer">
          <div class="lg:flex lg:space-x-10">
            <div class="lg:w-3/4 lg:px-20 space-y-7">
              <AddPost></AddPost>
              {posts.map((post, index) => {
                return <PostItem post={post} key={post._id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}
