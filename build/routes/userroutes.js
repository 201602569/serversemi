"use strict";
//enrutador de servidor e
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usercontroller_1 = __importDefault(require("../controllers/usercontroller"));
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    UserRoutes.prototype.config = function () {
        this.router.get('/', usercontroller_1.default.listuser);
        this.router.get('/:id', usercontroller_1.default.listone);
        this.router.post('/create-user', usercontroller_1.default.createuser);
        this.router.delete('/delete-user/:id', usercontroller_1.default.deleteuser);
        this.router.put('/modify-user/:id', usercontroller_1.default.modifyuser);
    };
    return UserRoutes;
}());
var userRoutes = new UserRoutes();
exports.default = userRoutes.router;
