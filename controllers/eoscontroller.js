// Packages
const { JsonRpc } = require("eosjs");
const fetch = require("node-fetch");

// Instantiate JsonRPC with EOS endpoint and the fetch library
const rpc = new JsonRpc("https://api.eosnewyork.io", {
  fetch
});

/**
    @name   GetRecentBlocks

    @desc   -   Get the 10 most recent blocks from the blockchain and returns all information.
    @param {null} 
    @return {object} - An object containing ten of the most recent blocks from EOS Blockchain
 */
const getRecentBlocks = async () => {
  try {
    // Get recent block chain information.
    const info = await rpc.get_info();

    // De-structure the head block number.
    const { head_block_num } = info;

    // Get the head block information.
    const firstBlock = await rpc.get_block(head_block_num);

    // De-structure the first block's previous ID.
    let { previous } = firstBlock;

    // Get the previous block information.
    let previousBlock = await rpc.get_block(previous);

    // Create an array containing the first and second block numbers.
    let blockChain = [firstBlock, previousBlock];

    // Use for loop to fetch remaining blocks from block chain.
    for (let i = 0; i < 8; i++) {
      // Continuously re-assign the previous block variable to  fetch each block before it.
      previousBlock = await rpc.get_block(previousBlock.previous);

      // Push each block in this chain to the block chain array.
      blockChain.push(previousBlock);
    }

    return blockChain;
  } catch (err) {
    console.log(err);
    return err;
  }
};

// Asynchronous callback handler to reduce the amount of try-catch blocks.
const asyncHandler = cb => {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
};

module.exports = { getRecentBlocks, asyncHandler };
