/* 
    @eplison = matemathical float point that is use as a margin of error
    We do this because of the float points in JavaScript
*/

function areFloatsEqual(a, b, eplison = 1e-10) {
  return Math.abs(a - b) < eplison;
}

/* 
    JavaScript also has problem with working with big and large numbers
    we have two defaul values, being {Number.MAX_VALUE} which is the biggest
    number we can have on JS, but we also have the {Number.MAX_SAFE_INTEGER}
    which is the biggest number that we can work with precisely, a work around
    with that, is use the BigInt, to work with big numbers
*/

const biggestPossibleNumber = Number.MAX_VALUE

const safestBiggestNumber = Number.MAX_SAFE_INTEGER

const bigIntNumber = BigInt("121221212145312412231") || 121221212145312412231n