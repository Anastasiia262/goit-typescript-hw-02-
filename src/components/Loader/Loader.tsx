import { Hearts } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Hearts
      height="80"
      width="80"
      color="#ffc12f"
      ariaLabel="hearts-loading"
      wrapperStyle={{
        justifyContent: 'center',
      }}
      wrapperClass="wrapper-loader"
      visible={true}
    />
  );
};

export default Loader;