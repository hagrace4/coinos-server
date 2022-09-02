// Code for the conversion fee
// This is in a separate file so that the same function can be used by ./send and ./receive

const conversionFeeMultiplier = 0.01;
export const conversionFeeReceiver = "coinosfees";  // account that receives the fees

/**
 * Returns the fee you have to pay for withdrawing 'amount' bitcoin.
 */
export function computeConversionFee(amount) {
  return Math.floor(amount * conversionFeeMultiplier);
}
