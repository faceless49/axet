export type GeoObjectType = {
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
export type GeoResponseType = {
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
