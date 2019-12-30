// Packages
const express = require("express");

// Eos.js helper functions
const {
  getRecentBlocks,
  asyncHandler
} = require("../controllers/eoscontroller");

// Init express router
const router = express.Router();

/**              GET RECENT BLOCKS 
 @route       GET api/blocks
 @desc        Gets most recent blocks from the EOS blockchain
 @access      Public
*/
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const blocks = await getRecentBlocks();

    res.status(200).json({ blocks: blocks });
  })
);

module.exports = router;
