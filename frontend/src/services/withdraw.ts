import { IPayOutbox } from "../models/PayoutBox";
import axios from "axios";

export const withdraw = async (
  numberWithdraw: number
): Promise<IPayOutbox[]> => {
  const res = await axios({
    method: "post",
    url: "http://localhost:4000/api/withdraw",
    data: {
      withdrawNumber: numberWithdraw,
    },
  });
  return res.data;
};
