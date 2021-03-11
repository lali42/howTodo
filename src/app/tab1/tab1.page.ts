import { Component, OnInit } from '@angular/core';
import { crud } from '../crud';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  food: any;
  dessert: any;
  drink: any;
  other: any;



  constructor(private alertCtrl: AlertController,
    private getcrud: crud,public rounter: Router) { }

  ngOnInit() {

    //food-----------------------------------------
    this.getcrud.readDataF().subscribe(data => {
      this.food = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          name: e.payload.doc.data()['name'.toString()],
          ingredient: e.payload.doc.data()['ingredient'.toString()],
          how: e.payload.doc.data()['how'.toString()],
          image: e.payload.doc.data()['image'.toString()]
        };
      });
    });

    //dessert---------------------------------------
    this.getcrud.readDataD().subscribe(data => {
      this.dessert = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          name: e.payload.doc.data()['name'.toString()],
          ingredient: e.payload.doc.data()['ingredient'.toString()],
          how: e.payload.doc.data()['how'.toString()],
          image: e.payload.doc.data()['image'.toString()]
        };
      });
    });

    //drink-----------------------------------------------
    this.getcrud.readDataDr().subscribe(data => {
      this.drink = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          name: e.payload.doc.data()['name'.toString()],
          ingredient: e.payload.doc.data()['ingredient'.toString()],
          how: e.payload.doc.data()['how'.toString()],
          image: e.payload.doc.data()['image'.toString()]
        };
      });
    });

    //other-------------------------------------------------
    this.getcrud.readDataO().subscribe(data => {
      this.other = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          name: e.payload.doc.data()['name'.toString()],
          ingredient: e.payload.doc.data()['ingredient'.toString()],
          how: e.payload.doc.data()['how'.toString()],
          image: e.payload.doc.data()['image'.toString()]
        };
      });
    });

  }

  async show(tmpitem: any) {

    const alert = this.alertCtrl.create({
      header: tmpitem.name,
      cssClass: 'alert',
      message: `<img src="${tmpitem.image}" width="20px">
      <h4 id="h4">Ingredeint</h4>
      <h6 >${tmpitem.ingredient}</h6>
      <h4>How to do</h4>
      <h6>${tmpitem.how}</h6>`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
      ]
    });
    (await alert).present();
  }

  send(list: any) {
    let show = JSON.stringify(list);
    this.rounter.navigate(['show', show])
  }

}
