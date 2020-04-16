import { Request, Response  } from 'express';
import pool from '../database';
var uuid = require('uuid');
const aws_keys = require('../keys');
var AWS = require('aws-sdk');
const s3 = new AWS.S3(aws_keys.s3);
class UserController{
    public async listuser (req: Request ,res:Response){
      const users = await  pool.query('SELECT * from user');
       res.json(users);
    }
    public async listone (req: Request ,res:Response){
        const {id} =req.params;
        const users = await  pool.query('SELECT * from user where user=?',[id]);
        res.json(users);
     }



    public async createuser (req: Request ,res:Response): Promise<void>{

        //imagen

        const name_user = req.body.name_user;
        const user = req.body.user;
        const password = req.body.password;
        const imagen = req.body.imagen;

   

        pool.query('INSERT INTO user (name_user,user,password,imagen) values(?,?,?,?)',[name_user,user,password,imagen]);
        console.log(req.body);
        res.json({message:'usuario registrado'});
   
     }

     public async deleteuser (req: Request ,res:Response){
         const {id} = req.params;

         await pool.query('DELETE FROM user where id_user=?',[id]);
         res.json({text:'eliminando usuario'});
    
      }

      public modifyuser (req: Request ,res:Response){

        const {id} = req.params;
        const name_user = req.body.name_user;
        const user = req.body.user;
        const password = req.body.password;
        const imagen = req.body.password;
         pool.query('UPDATE user set name_user=?, user=?, password=?, imagen=? WHERE id=?',[name_user,user,password,imagen,id]);
         res.json({text:'modificando usuario'});
    
      }
}

 const userController =new UserController();
 export default userController; 