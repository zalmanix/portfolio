import * as React from 'react';

import style from '../styles/components/Footer.module.scss';

export default function Footer() {
  const mail:string = '/svg/mail-svgrepo-com.svg';
  return(
    <div className={style.wrapper}>
      <div className={style.mail}>
        <span>
          Contact me: zalmanix@gmail.com
        </span>

        <a href="mailto:zalmanix@gmail.com">
          <img src={mail} alt="mail icon" className={style.mailIcon} />
        </a>
      </div>
    </div>
  );
}
