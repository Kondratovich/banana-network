import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={s.img}
          src="https://mocah.org/uploads/posts/507653-landscape-village.jpg"
          alt="nature"
        ></img>
      </div>
      <div className={s.description}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
