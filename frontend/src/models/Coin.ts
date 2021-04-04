export enum ECoin {
  COIN_20 = 20,
  COIN_10 = 10,
  COIN_5 = 5,
  COIN_2 = 2,
  COIN_1 = 1,
}

export interface ICoin {
  value: ECoin;
  quantily?: number;
}
