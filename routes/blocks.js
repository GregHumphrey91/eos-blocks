// Packages
const express = require("express");
const { getRecentBlocks, asyncHandler } = require("../utils/Helpers");
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

/**              GET SPECIFIC BLOCK
 @route       GET api/blocks/:id
 @desc        Gets a block by id number
 @access      Public
*/
router.get("/:id", (req, res) => {
  const id = req.params.id;

  res.status(200).json({ id });
});

module.exports = router;
