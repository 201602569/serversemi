import { Request, Response  } from 'express';
import pool from '../database';

const aws_keys = require('../keys');
class StatusController{
    public async liststatus (req: Request ,res:Response){
        const status = await  pool.query('SELECT * from  status ORDER BY id_status DESC');
         res.json(status);
       }

       public async createstatus (req: Request ,res:Response): Promise<void>{
        /*para imagen
           var uuid = require('uuid');
           var AWS = require('aws-sdk');
            const s3 = new AWS.S3(aws_keys.s3);
            let body = req.body;
          
            let name = body.name;
            let base64String = body.base64;
            let extension = body.extension;
            let img='';
            //Decodificar imagen
            let encodedImage = base64String;
            let decodedImage = Buffer.from(encodedImage, 'base64');
            let filename = `${name}-${uuid()}.${extension}`;
          
            //Parámetros para S3
            let bucketname = 'bucket-p2-201602569';
            let folder = 'imagenes/';
            let filepath = `${folder}${filename}`;
            var uploadParamsS3 = {
              Bucket: bucketname,
              Key: filepath,
              Body: decodedImage,
              ACL: 'public-read',
            };
          
            s3.upload(uploadParamsS3, function sync(err:any, data:any) {
              if (err) {
                console.log('Error uploading file:', err);
                res.send({ 'message': 'failed' })
              } else {
                img=data.location;
                console.log('Upload success at:', data.Location);
                res.send({ 'message': 'uploaded' })
              }
            });
          

        */
       //para imagen



    const text = req.body.texto;
    const imgstatys = req.body.imgstatys;
    const createdby = req.body.createdby;
 

    pool.query('INSERT INTO status (text,imgstatys,createdby) values(?,?,?)',[text,imgstatys,createdby]);
    console.log(req.body);
     res.json({message:'status registrado'});

 }


      
        
}

export const statusController =new StatusController(); 