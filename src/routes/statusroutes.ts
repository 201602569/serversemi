//enrutador de servidor e

import {Router} from 'express';
import { statusController} from '../controllers/statuscontroller';
class StatusRoutes{
   public  router:Router=Router();

   constructor(){
       this.config();

   }
   config(): void{

    this.router.get('/',statusController.liststatus);
    //this.router.get('/:id',statusController.listone);
    this.router.post('/create-status',statusController.createstatus);
 
   // this.router.delete('/delete-status/:id',statusController.deletestatus);
    //this.router.put('/modify-status/:id',statusController.modifystatus);
}



}

const statusRoutes =  new StatusRoutes();
export default statusRoutes.router;