export enum ENotes {
  NOTE_1000 = 1000,
  NOTE_500 = 500,
  NOTE_200 = 200,
  NOTE_100 = 100,
  NOTE_50 = 50,
}

export interface INotes {
  value: ENotes;
  quantily?: number;
}
