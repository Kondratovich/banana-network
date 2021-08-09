import s from "./Post.module.css"

const Post = (props) => {
    return (
      <div>
        <img
          className={s.img}
          src="https://yt3.ggpht.com/ytc/AAUvwnhlHV0dtJCabiw8H9rkr36K7TLPkBRIgXpD4try5g=s900-c-k-c0x00ffffff-no-rj"
          alt="ava"
        ></img>
        {props.message}
        <div>
          <span>{props.likesCount}</span>
        </div>
      </div>
    );
}

export default Post;