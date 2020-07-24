"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const router = express_1.Router();
router.get('/', (req, res) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    console.log('arrive shopify graphql');
    return res.status(http_status_codes_1.OK);
}));
exports.default = router;
