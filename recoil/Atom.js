import { atom } from 'recoil';

const Surahs = atom({
    key: 'surahs', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
  });

  export default Surahs;