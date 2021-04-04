import { ECoin } from "@entities/Coin";
import { IPaybox } from "@entities/Paybox";
import { ENotes } from "@entities/Notes";

export const PayboxMock: IPaybox[] = [
  {
    name: "Payout Box 1",
    contains: [
      ENotes.NOTE_1000,
      ENotes.NOTE_500,
      ENotes.NOTE_200,
      ENotes.NOTE_100,
      ENotes.NOTE_50,
    ],
  },
  {
    name: "Payout Box 2",
    contains: [ECoin.COIN_20],
  },
  {
    name: "Payout Box 3",
    contains: [ECoin.COIN_10, ECoin.COIN_5, ECoin.COIN_2, ECoin.COIN_1],
  },
];
