import {
  CoinsLessThan20Mock,
  CoinsGreaterThan20Mock,
} from "../../src/mocks/coins.mock";
import { NotesMock } from "../../src/mocks/notes.mock";
import { PayboxMock } from "../../src/mocks/payboxs.mock";
import ATMService from "@services/ATM/ATM";

describe("ATM service", () => {
  const atmService = new ATMService();
  it("should return coins list", async () => {
    const coins = await atmService.getCoins();
    expect(coins).toEqual([...CoinsGreaterThan20Mock, ...CoinsLessThan20Mock]);
  });

  it("should return notes list", async () => {
    const coins = await atmService.getNotes();
    expect(coins).toEqual(NotesMock);
  });

  it("should return paybox list", async () => {
    const coins = await atmService.getPayoutBoxs();
    expect(coins).toEqual(PayboxMock);
  });
});
