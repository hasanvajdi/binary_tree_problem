
//  style
import pointerStyle from '../styles/components/pointer.module.scss';

const Pointer = () => {
  return (
    <div className={`${pointerStyle.pointerContainer} animate__animated animate__fadeIn animate__slow`}>

      <div></div>
      <div></div>
    </div>
  );
};

export default Pointer;