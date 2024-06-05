import { calculateSummaryData } from "../utils/helpers";
import IPO_BIDS_JSON_DATA from "../mock/ipoBids.json";
import styled from "styled-components";

const summaryData = calculateSummaryData(IPO_BIDS_JSON_DATA);

export const Summary = () => {
  return (
    <div>
      <h2>Summary for MLM</h2>

      <StyledTable>
        <tbody>
          <StyledTableRow>
            <StyledTd>
              <b>Contract Index</b>
            </StyledTd>

            <StyledTd>{summaryData.contractIndex}</StyledTd>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTd>
              <b>Tick</b>
            </StyledTd>

            <StyledTd>{summaryData.tick}</StyledTd>
          </StyledTableRow>

          <StyledTableRow>
            <StyledTd>&nbsp;</StyledTd>

            <StyledTd></StyledTd>
          </StyledTableRow>

          <StyledTopRow>
            <StyledTd>
              <b>Total Bid Value</b>
            </StyledTd>

            <StyledTd>{summaryData.totalBidValue}</StyledTd>
          </StyledTopRow>

          <StyledBottomRow>
            <StyledTd>
              <b>% of Supply</b>
            </StyledTd>

            <StyledTd>{summaryData.percentOfSupply}</StyledTd>
          </StyledBottomRow>

          <StyledBottomRow>
            <StyledTd>
              <b>Total Bidders</b>
            </StyledTd>

            <StyledTd>{summaryData.totalBidders}</StyledTd>
          </StyledBottomRow>

          <StyledMidRow>
            <StyledTd>
              <b>Avg Share Price</b>
            </StyledTd>

            <StyledTd>{summaryData.avgSharePrice}</StyledTd>
          </StyledMidRow>

          <StyledMidRow>
            <StyledTd>
              <b>Max Share Price</b>
            </StyledTd>

            <StyledTd>{summaryData.maxSharePrice}</StyledTd>
          </StyledMidRow>

          <StyledMidRow>
            <StyledTd>
              <b>Min Share Price</b>
            </StyledTd>

            <StyledTd>{summaryData.minSharePrice}</StyledTd>
          </StyledMidRow>

          <StyledTopRow>
            <StyledTd>
              <b>Estimated Burn</b>
            </StyledTd>

            <StyledTd>{summaryData.estimatedBurn}</StyledTd>
          </StyledTopRow>

          <StyledBottomRow>
            <StyledTd>
              <b>% of Supply</b>
            </StyledTd>

            <StyledTd>0.2%</StyledTd>
          </StyledBottomRow>
        </tbody>
      </StyledTable>
    </div>
  );
};

const StyledTable = styled.table`
  width: 300px;
`;

const StyledTableRow = styled.tr`
  display: flex;
  justify-content: space-between;
`;

const StyledTopRow = styled(StyledTableRow)`
  border-top: 1px solid #000;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
`;

const StyledBottomRow = styled(StyledTableRow)`
  border-bottom: 1px solid #000;
  border-left: 1px solid #000;
  border-right: 1px solid #000;
`;

const StyledMidRow = styled(StyledTableRow)`
  border-left: 1px solid #000;
  border-right: 1px solid #000;
`;

const StyledTd = styled.td`
  text-align: right;
  padding-top: 4px;
  padding-bottom: 4px;
`;
