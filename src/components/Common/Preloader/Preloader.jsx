import preloader from "./../../../assets/images/preloader.png";

let Preloader = (props) => {
  return props.isFetching ? <img src={preloader} alt="preloader" /> : null;
};

export default Preloader;