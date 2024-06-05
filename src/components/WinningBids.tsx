import IPO_BIDS_JSON_DATA from "../mock/ipoBids.json";
import { Table } from "./Table";
import { Bid, Column, SortSetting } from "../types";

const COLUMNS: Column[] = [
  {
    field: "positionIndex",
    headerText: "Nr",
    width: "25",
    textAlign: "Center" as const,
  },
  {
    field: "computorId",
    headerText: "Id",
    width: "250",
    textAlign: "Left" as const,
  },
  {
    field: "price",
    headerText: "Price (qus)",
    width: "150",
    textAlign: "Right" as const,
    format: "C0",
  },
];

const SORT_SETTINGS: SortSetting[] = [
  { field: "price", direction: "Descending" },
];

export const WinningBids = () => {
  return (
    <Table<Bid>
      title="Winning Bids"
      dataSource={IPO_BIDS_JSON_DATA.bids}
      columns={COLUMNS}
      sortSettings={SORT_SETTINGS}
    />
  );
};
