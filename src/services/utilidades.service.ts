import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import generadorPassword from 'password-generator';
import CryptoJS from 'crypto-js';
import { environment } from '../config/environment';
import client from 'twilio';
import sgMail from '@sendgrid/mail';


@injectable({scope: BindingScope.TRANSIENT})

export class UtilidadesService {

  clientTwilio = client(environment.accountSid,environment.authToken);
  constructor(/* Add @inject to inject parameters */) {}

  secretKeyAES="E7)aWV<PK$[4";

  generarPassword(){
    return generadorPassword(12,false)
  }

  encriptar(texto:string){
    let encriptado = CryptoJS.AES.encrypt(texto,this.secretKeyAES).toString();
    return encriptado;
  }

  desencriptar(texto:string){
    let desencriptado  = CryptoJS.AES.decrypt(texto, this.secretKeyAES).toString(CryptoJS.enc.Utf8);
    return desencriptado;
  }


  EnvioSMS(message : string, toNumberPhone : string){
    
    this.clientTwilio.messages
    .create({
      body: message, 
      from: environment.numberTwilio, 
      to: toNumberPhone
    })
    .then(message => {
      console.log(message.sid)
      return message.sid
    });
          
}

EnviarEmail( to : string, subject : string, messageHtml : string){
    
  const msg = {
    to: "miguelangelborda800@gmail.com",
    from: "freerunn36@gmail.com",
    subject: "prueba",
    text: "Bienvenido registro exitoso",
    html: " <strong>Aplicacion de pedidos</strong>",
  }
  
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email enviado')
    })
    .catch((error : any) => {
      console.error(error)
  })

}




}

          



              
                    
