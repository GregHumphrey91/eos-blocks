import blocks from "../components/BlockChain/tests/mockBlocks";
export default {
  get: jest.fn(() => Promise.resolve({ data: null }))
};
