"use strict";
//enrutador de servidor e
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var indexcontroller_1 = require("../controllers/indexcontroller");
var validateToken_1 = require("../libs/validateToken");
var IndexRoutes = /** @class */ (function () {
    function IndexRoutes() {
        this.router = express_1.Router();
        this.config();
    }
    IndexRoutes.prototype.config = function () {
        // Login - no necesita autenticacion previa para ser accedido.
        this.router.post('/login', indexcontroller_1.indexController.login);
        //Logout - se valida que tenga autenticacion previa, debe traer token en el header del req
        this.router.get('/', validateToken_1.tokenValidation, indexcontroller_1.indexController.logout);
    };
    return IndexRoutes;
}());
var indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
