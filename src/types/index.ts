export interface IpoBids {
  tick: number;
  contractIndex: number;
  contractName: string;
  currentSupply: number;
  bids: Bid[];
}

export interface Bid {
  publicKey: string;
  computorId: string;
  price: number;
  positionIndex: number;
}

export type Column = {
  field: string;
  headerText: string;
  width?: string;
  textAlign: "Left" | "Right" | "Center";
  format?: string;
};

export type SortSetting = {
  field: string;
  direction: "Ascending" | "Descending";
};

export type FilterSetting = {
  type: "Excel" | "Menu" | "CheckBox";
  ignoreAccent: boolean;
};

export type MappedValues = {
  computerId: string;
  averagePrice: number;
  numberOfShares: number;
  totalPrice: number;
};
