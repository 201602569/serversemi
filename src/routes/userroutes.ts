//enrutador de servidor e

import {Router} from 'express';

import userController from '../controllers/usercontroller';
class UserRoutes{
   public  router:Router=Router();

   constructor(){
       this.config();

   }
   config(): void{
    this.router.get('/',userController.listuser);
    this.router.get('/:id',userController.listone);
    this.router.post('/create-user',userController.createuser);
    this.router.delete('/delete-user/:id',userController.deleteuser);
    this.router.put('/modify-user/:id',userController.modifyuser);
}



}

const userRoutes =  new UserRoutes();
export default userRoutes.router;