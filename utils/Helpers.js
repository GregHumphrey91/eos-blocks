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
    const blockChain = await rpc.get_info();

    // De-structure the head block number.
    const { head_block_num } = blockChain;

    // Get the head block information.
    const firstBlock = await rpc.get_block(head_block_num);

    console.log("THE FIRST BLOCK ", firstBlock.block_num, "\n\n");

    // De-structure the first block's previous ID.
    let { previous } = firstBlock;

    // Get the previous block information.
    let previousBlock = await rpc.get_block(previous);

    // Create an array containing the first and second block numbers.
    let fullBlocks = [firstBlock, previousBlock];

    for (let i = 0; i < 8; i++) {
      // Re-assign the previous block to fetch each block before it.
      previousBlock = await rpc.get_block(previousBlock.previous);

      // Push each block in this chain to the all blocks array.
      fullBlocks.push(previousBlock);
    }

    // Display there are exactly ten blocks and their id numbers
    fullBlocks.map((block, index) => {
      console.log(index + 1, ": blockNumber: ", block.block_num);
    });

    return fullBlocks;
  } catch (err) {
    console.log(err);
    return err;
  }
};

getRecentBlocks();
