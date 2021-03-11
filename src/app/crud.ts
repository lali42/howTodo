import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class crud {

  constructor(private fs: AngularFirestore) { }

  //CRUD
  //read
  //Food-----------------------------------------------------------
  readDataF() {
      return this.fs.collection('food').snapshotChanges();
  }

  //delete
  delDataF(docId: any){
      return this.fs.doc('food/'+ docId).delete();

  }

  createDataF(tmpdoc: any){
      return this.fs.collection('food').add(tmpdoc);
  }

  updateDataF(docId: any, tmpdoc: any){
      return this.fs.doc('food/'+docId).update(tmpdoc);
  }

  //Dessert--------------------------------------------------------
  readDataD() {
    return this.fs.collection('dessert').snapshotChanges();
  }

  //delete
  delDataD(docId: any){
      return this.fs.doc('dessert/'+ docId).delete();

  }

  createDataD(tmpdoc: any){
      return this.fs.collection('dessert').add(tmpdoc);
  }

  updateDataD(docId: any, tmpdoc: any){
      return this.fs.doc('dessert/'+docId).update(tmpdoc);
  }

  //Drink----------------------------------------------------------
  readDataDr() {
    return this.fs.collection('drink').snapshotChanges();
  }

  //delete
  delDataDr(docId: any){
    return this.fs.doc('drink/'+ docId).delete();

  }

  createDataDr(tmpdoc: any){
    return this.fs.collection('drink').add(tmpdoc);
  }

  updateDataDr(docId: any, tmpdoc: any){
    return this.fs.doc('drink/'+docId).update(tmpdoc);
  }

  //Other------------------------------------------------------
  readDataO() {
    return this.fs.collection('other').snapshotChanges();
  }

  //delete
  delDataO(docId: any){
    return this.fs.doc('other/'+ docId).delete();

  }

  createDataO(tmpdoc: any){
    return this.fs.collection('other').add(tmpdoc);
  }

  updateDataO(docId: any, tmpdoc: any){
    return this.fs.doc('other/'+docId).update(tmpdoc);
  }


}
