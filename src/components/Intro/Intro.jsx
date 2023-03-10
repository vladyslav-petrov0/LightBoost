import React, { useState, useRef } from 'react';
import { useService, useFetch, useLooped, useOnScreen } from '../../hooks';

import Container from '../ui/Container';

import IntroDetails from './Details';
import IntroImage from './Image';
import IntroButtons from './Buttons';
import IntroLoader from './Loader';
import IntroError from './Error';

import styles from './Intro.module.scss';

const Intro = () => {
  const service = useService();
  const { data: items = [], loading, error, refetch } = useFetch(service.getIntroItems);
  const [currentItemId, setCurrentItemId] = useState(0);

  const ref = useRef();
  const isOnScreen = useOnScreen(ref);

  const toNext = () =>
    setCurrentItemId((prev) => {
      const newId = prev + 1;
      return newId < items.length ? newId : 0;
    });

  const toPrev = () =>
    setCurrentItemId((prev) => {
      const newId = prev - 1;
      return newId < 0 ? items.length - 1 : newId;
    });

  useLooped({
    action: toNext,
    timeoutMs: 5000,
    isPaused: !isOnScreen,
    refreshArr: [items.length, currentItemId]
  });

  const item = items[currentItemId];

  return (
    <div className={styles.Intro} ref={ref}>
      {loading ? (
        <IntroLoader />
      ) : error ? (
        <IntroError refresh={refetch} />
      ) : (
        <Container className={styles.Container}>
          <IntroDetails title={item.title} text={item.text} linkTo={item.linkTo} />

          <div className={styles.RightSection}>
            <IntroImage src={item.img} />
            <IntroButtons toNext={toNext} toPrev={toPrev} />
          </div>
        </Container>
      )}
    </div>
  );
};

export default Intro;
