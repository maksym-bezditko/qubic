import { IpoBids, MappedValues } from "../types";

export const groupBidsByComputerId = (data: IpoBids) => {
  const groupedBids: { [key: string]: MappedValues } = {};

  data.bids.forEach((bid) => {
    const computerId = bid.computorId;

    if (!groupedBids[computerId]) {
      groupedBids[computerId] = {
        computerId,
        averagePrice: 0,
        numberOfShares: 0,
        totalPrice: 0,
      };
    }

    const currentBid = groupedBids[computerId];
    currentBid.totalPrice += bid.price;
    currentBid.numberOfShares++;

    currentBid.averagePrice = currentBid.totalPrice / currentBid.numberOfShares;
  });

  return Object.values(groupedBids);
};

const formatNumber = (num: number) => separateWithCommas(Math.floor(num));

const separateWithCommas = (num: number) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const calculateSummaryData = (data: IpoBids) => {
  const totalBidValue = data.bids.reduce((sum, bid) => sum + bid.price, 0);
  const totalBidders = new Set(data.bids.map((bid) => bid.computorId)).size;
  const avgSharePrice = totalBidValue / data.bids.length;
  const maxSharePrice = Math.max(...data.bids.map((bid) => bid.price));
  const minSharePrice = Math.min(...data.bids.map((bid) => bid.price));
  const estimatedBurn = (data.currentSupply - totalBidValue) * 0.2;
  const percentOfSupply = (totalBidValue / data.currentSupply) * 100;

  return {
    tick: data.tick,
    contractIndex: data.contractIndex,
    totalBidValue: formatNumber(totalBidValue),
    percentOfSupply,
    totalBidders,
    avgSharePrice: formatNumber(avgSharePrice),
    maxSharePrice: formatNumber(maxSharePrice),
    minSharePrice: formatNumber(minSharePrice),
    estimatedBurn,
  };
};
