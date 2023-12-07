const express = require("express");
const router = express.Router();

const { getCmps, getOneCmp, updateCmp, deleteCmp, getAllCmp, createCmp } = require("../controllers/cmpController")

router.post("/createCmp" , createCmp);
router.get("/getCmp" , getCmps);
router.get("/getCmp/:id" , getOneCmp);
router.put("/updateCmp/:id" , updateCmp);
router.delete("/deleteCmp/:id" , deleteCmp);
router.get("/getAllCmp", getAllCmp);

module.exports = router;