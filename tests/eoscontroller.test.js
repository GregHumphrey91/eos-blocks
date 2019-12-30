// Packages
const { JsonRpc } = require("eosjs");
const fetch = require("node-fetch");

/** Eos controller test suite
 *  @desc Tests the JsonRpc object to check for connection, block information and errors.
 */
describe("Eos-js Test Suite", () => {
  // Set rpc as a global variable.
  let rpc;

  // Configure the rpc object before tests begin.
  beforeAll(() => {
    rpc = new JsonRpc("https://api.eosnewyork.io", {
      fetch
    });
  });

  // Check the rpc object is configured properly.
  test("RPC instance is configured properly", done => {
    expect(rpc).toBeDefined();
    expect(rpc.endpoint).toEqual("https://api.eosnewyork.io");
    expect(rpc.fetchBuiltin).toBeDefined();
    done();
  });

  // Set the first rpc response as a global variable.
  let blockChain;

  // Get blockchain information from the server.
  test("RPC connects to blockchain", async done => {
    try {
      blockChain = await rpc.get_info();
      expect(blockChain).toBeDefined();

      // Check for a server-update. (optional)
      expect(blockChain.server_version).toEqual("7c0b0d38");
      done();
    } catch (err) {
      expect(err).toThrow(err);
    }
  });

  // Sets the head block as a global variable.
  let headBlock;

  // Check that the head block variable matches the blockchain's head block number.
  test("Gets the head block", async done => {
    try {
      headBlock = await rpc.get_block(blockChain.head_block_num);
      expect(headBlock.block_num).toEqual(blockChain.head_block_num);
      expect(headBlock.id).toEqual(blockChain.head_block_id);
      done();
    } catch (err) {
      expect(err).toThrow(err);
    }
  });

  // Sets the previous block as a global variable.
  let previousBlock;

  // Check that the previous block variable matches the head block's previous hash.
  test("Gets the previous block", async done => {
    try {
      previousBlock = await rpc.get_block(headBlock.previous);
      expect(previousBlock.id).toEqual(headBlock.previous);
      done();
    } catch (err) {
      expect(err).toThrow(err);
    }
  });
});
