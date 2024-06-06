import IPO_BIDS_JSON_DATA from "../mock/ipoBids.json";
import { Table } from "./Table";
import { Bid, Column, SortSetting } from "../types";
import styled from "styled-components";

const COLUMNS: Column[] = [
  {
    field: "positionIndex",
    headerText: "Nr",
    width: "10%",
    minWidth: "70px",
    textAlign: "Center" as const,
  },
  {
    field: "computorId",
    headerText: "Id",
    width: "70%",
    minWidth: "500px",
    textAlign: "Left" as const,
  },
  {
    field: "price",
    headerText: "Price (qus)",
    width: "20%",
    minWidth: "200px",
    textAlign: "Right" as const,
    format: "C0",
  },
];

const SORT_SETTINGS: SortSetting[] = [
  { field: "price", direction: "Descending" },
];

export const WinningBids = () => {
  return (
    <WinningBidswrapper>
      <Table<Bid>
        title="Winning Bids"
        dataSource={IPO_BIDS_JSON_DATA.bids}
        columns={COLUMNS}
        sortSettings={SORT_SETTINGS}
      />
    </WinningBidswrapper>
  );
};

const WinningBidswrapper = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.xxl}) {
    padding-left: ${({ theme }) => theme.sizes[16]};
    padding-right: ${({ theme }) => theme.sizes[16]};
    padding-bottom: ${({ theme }) => theme.sizes[40]};
  }
`;
