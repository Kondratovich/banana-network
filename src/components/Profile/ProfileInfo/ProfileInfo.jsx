import Preloader from "../../Common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "./../../../assets/images/photo.jpg";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader isFetching={props.isFetching}/>;
  }
  return (
    <div>
      <div className={s.description}>
        <img
          class={s.userPhoto}
          src={
            props.profile.photos.large != null
              ? props.profile.photos.large
              : userPhoto
          }
          alt="ava"
        ></img>
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <div>
          <b>{props.profile.fullName}</b>
        </div>
        <ul>
          <li>Facebook: {props.profile.contacts.facebook}</li>
          <li>Vk: {props.profile.contacts.vk}</li>
          <li>Twitter: {props.profile.contacts.twitter}</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileInfo;
