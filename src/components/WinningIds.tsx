import IPO_BIDS_JSON_DATA from "../mock/ipoBids.json";
import { Table } from "./Table";
import { Column, MappedValues, SortSetting } from "../types";
import { groupBidsByComputerId } from "../utils/helpers";

const mappedBids = groupBidsByComputerId(IPO_BIDS_JSON_DATA);

const COLUMNS: Column[] = [
  {
    field: "computerId",
    headerText: "Id",
    textAlign: "Left" as const,
  },
  {
    field: "numberOfShares",
    headerText: "# shares",
    width: "250",
    textAlign: "Right",
  },
  {
    field: "totalPrice",
    headerText: "Total (qus)",
    width: "250",
    textAlign: "Right" as const,
    format: "C0",
  },
  {
    field: "averagePrice",
    headerText: "Avg/Share (qus)",
    width: "250",
    textAlign: "Right" as const,
    format: "C0",
  },
];

const SORT_SETTINGS: SortSetting[] = [
  { field: "numberOfShares", direction: "Descending" },
  { field: "totalPrice", direction: "Descending" },
  { field: "averagePrice", direction: "Descending" },
];

export const WinningIds = () => {
  return (
    <Table<MappedValues>
      title="Winning Id's"
      dataSource={mappedBids}
      columns={COLUMNS}
      sortSettings={SORT_SETTINGS}
    />
  );
};
