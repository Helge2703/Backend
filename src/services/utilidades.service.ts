import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import generadorPassword from 'password-generator';
import CryptoJS from 'crypto-js';

@injectable({scope: BindingScope.TRANSIENT})

export class UtilidadesService {
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
}
