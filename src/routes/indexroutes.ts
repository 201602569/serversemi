//enrutador de servidor e

import {Router} from 'express';
import { indexController} from '../controllers/indexcontroller';
import { tokenValidation} from '../libs/validateToken'
class IndexRoutes{
   public  router:Router=Router();

   constructor(){
       this.config();

   }
   config(): void{
     // Login - no necesita autenticacion previa para ser accedido.
     this.router.post('/login', indexController.login );

     //Logout - se valida que tenga autenticacion previa, debe traer token en el header del req
     this.router.get('/', tokenValidation, indexController.logout);

     
  
}



}

const indexRoutes =  new IndexRoutes();
export default indexRoutes.router;