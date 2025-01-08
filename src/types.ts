export interface IArea {
  id: string;
  name: string;
  x: number;
  y: number;
  width: number;
  length: number;
  user_id: string;
  del: boolean;
}

export interface IObject {
  id: string;
  name: string;
  type: string;
  x: number;
  y: number;
  width: number;
  length: number;
  user_id: string;
  area_id: number;
  del: boolean;
}

export interface IUser {
  id: string;
  email: string | undefined;
  name: string;
}

//про запас
//export type TFnVoid = () => void;
