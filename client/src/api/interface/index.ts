export interface typeProps {
  id: number;
  name: string;
  price: number;
  description: string;
  imageURL: string;
  facility_name: string;
}

export interface typeDetail {
  type: {
    name: string;
    price: number;
    description: string;
    imageURL: string;
  };
  facility: [{ facilityName: string }];
}

export interface userProps {
  id: number;
  name: string;
  email: string;
  contact: number;
}

export interface registerUserProps {
  name: string;
  email: string;
  contact: number;
  password: string;
  passwordConf: string;
}

export interface loginUserProps {
  email: string;
  password: string;
}

export interface postDataRegister {
  name: string;
  email: string;
  contact: number;
  password: string;
}
