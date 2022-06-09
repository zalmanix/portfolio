import * as React from 'react';

import style from '../styles/components/Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function LinkIcon() {

  return(
    <div className={style.headerIcons}>
      <a
        href="https://www.linkedin.com/in/maksymilian-sk%C3%B3rn%C3%B3g-b11142219/"
        target="_blank"
        rel="noopener noreferrer"
        title="linkedin"
        className={style.icon}
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>

      <a
        href="https://github.com/zalmanix"
        target="_blank"
        rel="noopener noreferrer"
        title="github"
        className={style.icon}
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
}
