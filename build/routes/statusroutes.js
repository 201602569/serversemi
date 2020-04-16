"use strict";
//enrutador de servidor e
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var statuscontroller_1 = require("../controllers/statuscontroller");
var StatusRoutes = /** @class */ (function () {
    function StatusRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    StatusRoutes.prototype.config = function () {
        this.router.get('/', statuscontroller_1.statusController.liststatus);
        //this.router.get('/:id',statusController.listone);
        this.router.post('/create-status', statuscontroller_1.statusController.createstatus);
        // this.router.delete('/delete-status/:id',statusController.deletestatus);
        //this.router.put('/modify-status/:id',statusController.modifystatus);
    };
    return StatusRoutes;
}());
var statusRoutes = new StatusRoutes();
exports.default = statusRoutes.router;
