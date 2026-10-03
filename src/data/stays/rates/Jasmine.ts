import type { StayRateInfo } from "../rateType.ts";

const Jasmine: StayRateInfo = {
  currency: "USD",
  cleaningFee: 220,
  serviceFee: 0,
  extraGuestFee: 15,
  nightMin: 1,
  nightMax: 365,
  discounts: {
    weekly: 10,
    monthly: 20,
    prepayment: 10,
    earlyBird: 10,
  },
};

export default Jasmine;
