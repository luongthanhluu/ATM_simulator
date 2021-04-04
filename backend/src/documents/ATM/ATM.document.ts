import { IPayOutbox } from "@entities/Paybox";
import { INotes } from "@entities/Notes";
import { ICoin } from "@entities/Coin";
import ATMService from "@services/ATM/ATM";
import { unHandleError } from "@shared/constants";

const atmService = new ATMService();

export interface IATM {
  widthDraw: (withDrawNumber: number) => Promise<IPayOutbox[]>;
}

class ATMDocument implements IATM {
  public async widthDraw(withDrawNumber: number): Promise<IPayOutbox[]> {
    const result: IPayOutbox[] = [];
    let leftNeededCash = withDrawNumber;
    const listNotesResult: INotes[] = [];
    const listCoinsResult: ICoin[] = [];
    const atmData = await Promise.all([
      atmService.getNotes(),
      atmService.getCoins(),
      atmService.getPayoutBoxs(),
    ]);
    if (!atmData || !atmData[0] || !atmData[1] || !atmData[2]) {
      throw unHandleError;
    }
    const notes = atmData[0];
    const coins = atmData[1];
    const payboxs = atmData[2];

    notes.forEach((n) => {
      if (leftNeededCash >= n.value) {
        const quotient = Math.floor(leftNeededCash / n.value);
        const remainder = leftNeededCash % n.value;
        listNotesResult.push({ value: n.value, quantily: quotient });
        leftNeededCash = remainder;
      }
    });

    coins.forEach((n) => {
      if (leftNeededCash >= n.value) {
        const quotient = Math.floor(leftNeededCash / n.value);
        const remainder = leftNeededCash % n.value;
        listCoinsResult.push({ value: n.value, quantily: quotient });
        leftNeededCash = remainder;
      }
    });
    payboxs.forEach((box) => {
      const payoutBox: IPayOutbox = {
        name: box.name,
        cashOut: [],
      };
      listNotesResult.forEach((notes) => {
        if (box.contains.indexOf(notes.value) > -1) {
          payoutBox.cashOut.push(notes);
        }
      });
      listCoinsResult.forEach((coins) => {
        if (box.contains.indexOf(coins.value) > -1) {
          payoutBox.cashOut.push(coins);
        }
      });
      result.push(payoutBox);
    });
    return Promise.resolve(result);
  }
}

export default ATMDocument;
