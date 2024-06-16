"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoute = void 0;
const express_1 = require("express");
const booking_controller_1 = require("./booking.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const booking_validaton_1 = require("./booking.validaton");
const router = (0, express_1.Router)();
router.post('/book-car', (0, validateRequest_1.default)(booking_validaton_1.BookingValidations.CreateBookingvzodschema), booking_controller_1.BookingController.createBoookingCOntroller);
exports.BookingRoute = router;