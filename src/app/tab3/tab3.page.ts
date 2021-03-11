import { Component , OnInit} from '@angular/core';
import { crud } from '../crud';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  food: any;
  dessert: any;
  drink: any;
  other: any;


  constructor(private alertCtrl: AlertController,
    private getcrud: crud) {}

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
      console.log(this.food);
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
      console.log(this.dessert);
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
      console.log(this.drink);
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
      console.log(this.other);
    });

  }

  //DEL
  //del food-----------------------------
  async delF(tmpitem: any) {
    let alert = this.alertCtrl.create({
      //title: 'Confirm purchase',
      message: 'Do you want to delete ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Deleted');

            //this.deleteCountryItem(tmpitem);
            this.getcrud.delDataF(tmpitem.id); //del rowfrom DB
          }
        }
      ]
    });
    (await alert).present();
  }

  //del dessert
  async delD(tmpitem: any) {
    let alert = this.alertCtrl.create({
      //title: 'Confirm purchase',
      message: 'Do you want to delete ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Deleted');

            //this.deleteCountryItem(tmpitem);
            this.getcrud.delDataD(tmpitem.id); //del rowfrom DB
          }
        }
      ]
    });
    (await alert).present();
  }

  //del drink
  async delDr(tmpitem: any) {
    let alert = this.alertCtrl.create({
      //title: 'Confirm purchase',
      message: 'Do you want to delete ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Deleted');

            //this.deleteCountryItem(tmpitem);
            this.getcrud.delDataDr(tmpitem.id); //del rowfrom DB
          }
        }
      ]
    });
    (await alert).present();
  }

  //del other
  async delO(tmpitem: any) {
    let alert = this.alertCtrl.create({
      //title: 'Confirm purchase',
      message: 'Do you want to delete ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Yes',
          handler: () => {
            console.log('Deleted');

            //this.deleteCountryItem(tmpitem);
            this.getcrud.delDataO(tmpitem.id); //del rowfrom DB
          }
        }
      ]
    });
    (await alert).present();
  }

  // === EDIT ==========================================

  //food
  async editF(tmpitem: any) {
    let tmpcountry = {};

    let alert = this.alertCtrl.create({
      header: 'EDIT FOOD',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'name',
          value: tmpitem.name
        },
        {
          name: 'ingredient',
          type: 'textarea',
          placeholder: 'ingredient',
          value: tmpitem.ingredient
        },
        {
          name: 'how',
          type: 'textarea',
          placeholder: 'How to do',
          value: tmpitem.how
        },
        {
          name: 'image',
          type: 'text',
          placeholder: 'URL',
          value: tmpitem.image
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Update',
          handler: data => {
            if (data.name == '' || data.ingredient == ''||
                data.how == '' || data.image == '' )
                 //show toast
                 return false;
            else { //update here
                tmpcountry['name'] = data.name;
                tmpcountry['ingredient'] = data.ingredient;
                tmpcountry['how'] = data.how;
                tmpcountry['image'] = data.image;
                this.getcrud.updateDataF(tmpitem.id, tmpcountry);



            }//else
          }//handler
        }//update
      ]
    });
    (await alert).present();
  }

  //dessert
  async editD(tmpitem: any) {
    let tmpcountry = {};

    let alert = this.alertCtrl.create({
      header: 'EDIT DESSERT',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'name',
          value: tmpitem.name
        },
        {
          name: 'ingredient',
          type: 'textarea',
          placeholder: 'ingredient',
          value: tmpitem.ingredient
        },
        {
          name: 'how',
          type: 'textarea',
          placeholder: 'How to do',
          value: tmpitem.how
        },
        {
          name: 'image',
          type: 'text',
          placeholder: 'URL',
          value: tmpitem.image
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Update',
          handler: data => {
            if (data.name == '' || data.ingredient == ''||
                data.how == '' || data.image == '' )
                 //show toast
                 return false;
            else { //update here
                tmpcountry['name'] = data.name;
                tmpcountry['ingredient'] = data.ingredient;
                tmpcountry['how'] = data.how;
                tmpcountry['image'] = data.image;
                this.getcrud.updateDataD(tmpitem.id, tmpcountry);

            }//else
          }//handler
        }//update
      ]
    });
    (await alert).present();
  }

  //drink
  async editDr(tmpitem: any) {
    let tmpcountry = {};

    let alert = this.alertCtrl.create({
      header: 'EDIT DRINK',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'name',
          value: tmpitem.name
        },
        {
          name: 'ingredient',
          type: 'textarea',
          placeholder: 'ingredient',
          value: tmpitem.ingredient
        },
        {
          name: 'how',
          type: 'textarea',
          placeholder: 'How to do',
          value: tmpitem.how
        },
        {
          name: 'image',
          type: 'text',
          placeholder: 'URL',
          value: tmpitem.image
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Update',
          handler: data => {
            if (data.name == '' || data.ingredient == ''||
                data.how == '' || data.image == '' )
                 //show toast
                 return false;
            else { //update here
                tmpcountry['name'] = data.name;
                tmpcountry['ingredient'] = data.ingredient;
                tmpcountry['how'] = data.how;
                tmpcountry['image'] = data.image;
                this.getcrud.updateDataDr(tmpitem.id, tmpcountry);

            }//else
          }//handler
        }//update
      ]
    });
    (await alert).present();
  }

  //other
  async editO(tmpitem: any) {
    let tmpcountry = {};

    let alert = this.alertCtrl.create({
      header: 'EDIT OTHER',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'name',
          value: tmpitem.name
        },
        {
          name: 'ingredient',
          type: 'textarea',
          placeholder: 'ingredient',
          value: tmpitem.ingredient
        },
        {
          name: 'how',
          type: 'textarea',
          placeholder: 'How to do',
          value: tmpitem.how
        },
        {
          name: 'image',
          type: 'text',
          placeholder: 'URL',
          value: tmpitem.image
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Update',
          handler: data => {
            if (data.name == '' || data.ingredient == ''||
                data.how == '' || data.image == '' )
                 //show toast
                 return false;
            else { //update here
                tmpcountry['name'] = data.name;
                tmpcountry['ingredient'] = data.ingredient;
                tmpcountry['how'] = data.how;
                tmpcountry['image'] = data.image;
                this.getcrud.updateDataO(tmpitem.id, tmpcountry);

            }//else
          }//handler
        }//update
      ]
    });
    (await alert).present();
  }

}
