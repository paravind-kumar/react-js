import withData from "./hoc/withData";
import PostList from "./PostList";

const PostListWithData = withData({
  WrapComponent: PostList,
  url: "https://jsonplaceholder.typicode.com/posts"
})

export default PostListWithData