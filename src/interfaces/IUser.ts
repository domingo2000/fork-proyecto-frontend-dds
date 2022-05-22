import {IMeta} from './IMeta';
import {IOrder} from './IOrder';

interface User {
  name: string
  email: string
  nickname: string
  orders: IOrder[]
}

export interface IUser extends User, IMeta {};
