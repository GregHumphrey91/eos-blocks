// Packages
const { Api, JsonRpc } = require("eosjs");
const fetch = require("node-fetch");

// Instantiate JsonRPC with EOS endpoint and the fetch library
const rpc = new JsonRpc("https://api.eosnewyork.io", {
  fetch
});

/**
    @name   GetRecentBlocks

    @desc   -   Get's the 10 most recent blocks from block chain and returns their information.
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

    for (let i = 0; i < 8; i++) {
      // Re-assign the previous block to fetch each block before it.
      previousBlock = await rpc.get_block(previousBlock.previous);

      // Push each block in this chain to the all blocks array.
      blockChain.push(previousBlock);
    }

    return blockChain;
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = { getRecentBlocks };
