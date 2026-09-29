import type { RateInfo } from "../rateType.ts";

const Jasmine: RateInfo = {
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
    clubMember: 0,
  },
};

export default Jasmine;
