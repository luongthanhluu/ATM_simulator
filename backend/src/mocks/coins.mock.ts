import { ECoin, ICoin } from "@entities/Coin";

export const CoinsGreaterThan20Mock: ICoin[] = [
  {
    value: ECoin.COIN_20,
    quantily: 100,
  },
];

export const CoinsLessThan20Mock: ICoin[] = [
  {
    value: ECoin.COIN_10,
    quantily: 100,
  },
  {
    value: ECoin.COIN_5,
    quantily: 100,
  },
  {
    value: ECoin.COIN_2,
    quantily: 100,
  },
  {
    value: ECoin.COIN_1,
    quantily: 100,
  },
];
