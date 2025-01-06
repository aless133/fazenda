export interface IArea {
  id: string;
  name: string;
  x:number;
  y:number;
  width: number;
  length: number;
  user_id: string;
}

export interface IUser {
  id: string;
  email: string | undefined;
  name: string
};

//про запас
//export type TFnVoid = () => void;