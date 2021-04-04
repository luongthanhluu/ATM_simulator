import { IPaybox } from "@entities/Paybox";
import { INotes } from "@entities/Notes";
import { ICoin } from "@entities/Coin";

import { CoinsGreaterThan20Mock, CoinsLessThan20Mock } from "@mocks/coins.mock";
import { NotesMock } from "@mocks/notes.mock";
import { PayboxMock } from "@mocks/payboxs.mock";

export interface IATM {
  getNotes: () => Promise<INotes[]>;
  getCoins: () => Promise<ICoin[]>;
  getPayoutBoxs: () => Promise<IPaybox[]>;
}

class ATMService implements IATM {
  public getNotes(): Promise<INotes[]> {
    return Promise.resolve(NotesMock);
  }

  public getCoins(): Promise<ICoin[]> {
    return Promise.resolve([...CoinsGreaterThan20Mock, ...CoinsLessThan20Mock]);
  }

  public getPayoutBoxs(): Promise<IPaybox[]> {
    return Promise.resolve(PayboxMock);
  }
}

export default ATMService;
