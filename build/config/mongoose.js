"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
//const mongo_uri = 'mongodb://localhost/dbetitc';
const mongo_uri = 'mongodb+srv://marcela:Danna3007@cluster0.wtdzh.mongodb.net/etitcMarcela?retryWrites=true&w=majority';
mongoose_1.default.connect(mongo_uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
