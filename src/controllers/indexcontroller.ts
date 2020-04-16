import { Request, Response  } from 'express';
import pool from '../database'
import jwt from "jsonwebtoken"
import { blacklist} from '../libs/blacklist'
import * as CryptoJS from 'crypto-js';
class IndexController{

    conversionEncryptOutput: string="";
    conversionDecryptOutput: string="";
    
    decPassword: string="3";
    encPassword: string="3";
   
    public async login (req: Request, res: Response) {

    const us = req.body.user;
    const pa = req.body.pass;
    var respuesta=false;
        const rows = await  pool.query('SELECT * FROM USER WHERE user=? AND password=?',[us,pa])
        //const rows2 = await  pool.query('SELECT id_user FROM USER WHERE user=? AND password=?',[us,pa])
          if(rows.length > 0)
              {
                respuesta=true;
                console.log('la consulta esta bien');
                console.log('El usuario es valido y contraseña tambien');
                res.send(respuesta); 
                res.json(rows);
            }
                

     }

public async logout (req: Request, res: Response) {
  const token = req.header('auth-token');   

  if(blacklist.indexOf(String(token)) >= 0)
  {
      res.send(false);                      // false, si ya se cerro sesion
  }
  else
  {
      blacklist.push(String(token));        // true, si se cierra sesion 
      res.send(true);
  }     
}


}

export const indexController =new IndexController(); 