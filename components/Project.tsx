import React, { useEffect, useRef } from 'react';

import style from '../styles/components/Project.module.scss'

interface ProjectInterface {
  title: string;
  description: string;
  imagePosition: string;
  alternative: string;
  src: string;
}

export default function Project(props: ProjectInterface) {
  const classes: string = props.imagePosition;
  const modal = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    if (modal.current != null) {
      const modalNode = modal.current;


      modalNode.style.display = 'none';
    }
  };

  const openModal = () => {
    if (modal.current != null) {
      const modalNode = modal.current;

      modalNode.style.display = 'block';
    }
  };

  return (
    <div className={[style.wrapper, style[classes]].join(' ')} >
      <img
        src={props.src}
        alt={props.alternative}
        className={[style.image, style.pointer].join(' ')}
        onClick={openModal}
      />

      <div className={style.modal} ref={modal}>
        <span className={style.close} onClick={closeModal}>&times;</span>

        <div className={style.modalContent}>
          <img
            src={props.src}
            alt={props.alternative}
            className={style.modalImage}
          />
        </div>
      </div>

      <div className={style.wrapperText}>
        <h3>{props.title}</h3>

        <span>
          {props.description}
        </span>
      </div>
    </div>
  );
}
