import { ICoin } from "./Coin";
import { INotes } from "./Notes";

export interface IPayOutbox {
  name: string;
  cashOut: (INotes | ICoin)[];
}
