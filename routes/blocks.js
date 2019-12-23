// Packages
const express = require("express");

// Init express router
const router = express.Router();

/**              GET RECENT BLOCKS 
 @route       GET api/blocks
 @desc        Gets most recent blocks from the EOS blockchain
 @access      Public
*/
router.get("/", (req, res) => {
  const blocks = [1, 2, 3, 4, 5];
  res.status(200).json({ blocks: blocks });
});

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
