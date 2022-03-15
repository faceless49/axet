import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { GeoObject, Map, Placemark, YMaps } from 'react-yandex-maps';

import { getCoords } from '../../helpers/getCoords';
import { useAppSelector } from '../../hooks/useAppSelector';
import { requestLocation } from '../../redux/thunks/location';
import { ReturnComponentType } from '../../types';
import { About } from '../ExampleCode/About';
import { Portfolio } from '../Portfolio/Portfolio';

import styles from './styles/Main.module.scss';

export const Main = (): ReturnComponentType => {
  const dispatch = useDispatch();
  const userLocation = useAppSelector<string>(state => state.profile.city);
  const coords = useAppSelector<string>(state => state.profile.coords);

  const arrayOfNumberCoords = getCoords(coords);

  useEffect(() => {
    dispatch(requestLocation(userLocation));
  }, [userLocation]);
  console.log(coords);

  return (
    <div className="container">
      <div className={styles.main}>
        <div className={styles.main_info}>
          <Portfolio />
        </div>

        <About>
          <YMaps query={{ load: 'Map', lang: 'en_RU' }} width="100%">
            <Map
              state={{ center: arrayOfNumberCoords, zoom: 10 }}
              onLoad={ymaps => ymaps.load()}
              width="100%"
              height="200px"
            >
              <Placemark geometry={arrayOfNumberCoords} />
              <GeoObject />
            </Map>
          </YMaps>
        </About>
      </div>
    </div>
  );
};
