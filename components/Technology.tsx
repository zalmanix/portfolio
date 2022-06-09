import React from 'react';

import style from '../styles/components/Technology.module.scss';


export default function Technology() {
  const JS:string = '/svg/javascript-svgrepo-com.svg';
  const TS:string = '/svg/typescript-svgrepo-com.svg';
  const VUE:string = '/svg/vue-svgrepo-com.svg';
  const REACT:string = '/svg/react-svgrepo-com.svg';
  const NEXT:string = '/svg/nextjs-svgrepo-com.svg';
  const NUXT:string = '/svg/nuxtjs-svgrepo-com.svg';
  const SCSS:string = '/svg/scss-svgrepo-com.svg';
  const WEBPACK:string = '/svg/webpack-svgrepo-com.svg';

  return(
    <div className={style.wrapper}>
      <div className={style.stackWrapper} data-gallery="wrapper">
        <img src={JS} alt="JS icon" className={style.stackIcon} />

        <img src={TS} alt="TS icon" className={style.stackIcon} />

        <img src={REACT} alt="react icon" className={style.stackIcon} />

        <img src={VUE} alt="vue icon" className={style.stackIcon} />

        <img src={NEXT} alt="next icon" className={style.stackIcon} />

        <img src={NUXT} alt="nuxt icon" className={style.stackIcon} />

        <img src={SCSS} alt="scss icon" className={style.stackIcon} />

        <img src={WEBPACK} alt="webpack icon" className={style.stackIcon} />
      </div>
    </div>
  );
}
