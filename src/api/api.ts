import axios from 'axios';

type GeoObjectType = {
  metaDataProperty: {
    GeocoderMetaData: {
      kind: string;
      text: string;
      precision: string;
      Address: {
        country_code: string;
        postal_code: string;
        formatted: string;
        Components: [
          {
            kind: string;
            name: string;
          },
        ];
      };
      AddressDetails: {
        Country: {
          AddressLine: string;
          CountryNameCode: string;
          CountryName: string;
          AdministrativeArea: {
            AdministrativeAreaName: string;
            Locality: {
              LocalityName: string;
              Thoroughfare: {
                ThoroughfareName: string;
                Premise: {
                  PremiseNumber: string;
                  PostalCode: {
                    PostalCodeNumber: string;
                  };
                };
              };
            };
          };
        };
      };
    };
  };
  description: string;
  name: string;
  boundedBy: {
    Envelope: {
      lowerCorner: string;
      upperCorner: string;
    };
  };
  Point: {
    pos: string;
  };
};
type ObjectType = {
  GeoObject: GeoObjectType;
};
type GeoResponseType = {
  response: {
    GeoObjectCollection: {
      metaDataProperty: {
        GeocoderResponseMetaData: {
          request: string;
          found: string;
          results: string;
        };
      };
      featureMember: Array<ObjectType>;
    };
  };
};

const instance = axios.create({
  baseURL: 'https://geocode-maps.yandex.ru/1.x/',
});

const indexCoordsOfPoint = 0;

export const locationAPI = {
  getLocation(city: string) {
    return instance
      .get<GeoResponseType>(
        `?apikey=a2d959e2-cb89-4c70-af57-a45894f23a48&geocode=${city}&results=1&format=json`,
      )
      .then(
        res =>
          res.data.response.GeoObjectCollection.featureMember[indexCoordsOfPoint]
            .GeoObject.Point,
      )
      .then(res => {
        console.log(res.pos);
        return res.pos;
      })
      .catch(err => console.log(err));
  },

  getCoordinatesOfLocation(coords: string[]) {
    return instance
      .get<GeoResponseType>(
        `?apikey=a2d959e2-cb89-4c70-af57-a45894f23a48&geocode=${coords}&results=1&format=json`,
      )
      .then(
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        res =>
          res.data.response.GeoObjectCollection.featureMember[indexCoordsOfPoint]
            .GeoObject.Point,
      )
      .then(res => res.pos)
      .catch(err => console.log(err));
  },
};
