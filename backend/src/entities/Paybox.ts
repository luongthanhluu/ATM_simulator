import { ECoin, ICoin } from "./Coin";
import { ENotes, INotes } from "./Notes";

export interface IPaybox {
  name: string;
  contains: (ENotes | ECoin)[];
}

export interface IPayOutbox {
  name: string;
  cashOut: (INotes | ICoin)[];
}
