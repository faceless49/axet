import axios from 'axios';

import { GeoResponseType } from './types/type';

const instance = axios.create({
  baseURL: 'https://geocode-maps.yandex.ru/1.x/',
});

const indexCoordsOfPoint = 0;

export const locationAPI = {
  getLocation(city: string) {
    return instance
      .get<GeoResponseType>(
        `?apikey=${process.env.REACT_APP_API_KEY}&geocode=${city}&results=1&format=json`,
      )
      .then(
        res =>
          res.data.response.GeoObjectCollection.featureMember[indexCoordsOfPoint]
            .GeoObject.Point,
      )
      .then(res => res.pos)
      .catch(err => console.log(err));
  },
};
