import StatusCodes from "http-status-codes";
import { Request, Response } from "express";

import ATMDocument from "@documents/ATM/ATM.document";
import { validationResult } from "express-validator";

const atmDocument = new ATMDocument();
const { OK } = StatusCodes;

/**
 * Calulate withdraw
 *
 * @param req
 * @param res
 * @returns
 */
export async function withdraw(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { withdrawNumber } = req.body;
  const result = await atmDocument.widthDraw(withdrawNumber);
  return res.send(result).status(OK).end();
}
