import { Component, OnInit  } from '@angular/core';
import { crud } from '../crud';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

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

  //add dessert -----------------------------------------
  async ADDD() {
    let alert = this.alertCtrl.create({
      header: 'DESSERT',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'name'

        },
        {
          name: 'ingredient',
          type: 'textarea',
          placeholder: 'ingredient'

        },
        {
          name: 'how',
          type: 'textarea',
          placeholder: 'How to do'
        },
        {
          name: 'image',
          type: 'text',
          placeholder: 'image'
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
          text: 'Add',
          handler: data => {
            let tmpobj =  //db : inputform
              {name: data.name,
                ingredient: data.ingredient,
               how: data.how,
               image: data.image
              };
              this.getcrud.createDataD(tmpobj);
          }//handler

        }//update
      ]
    });
    (await alert).present();
  }

  //add drink -----------------------------------------
  async ADDDR() {
    let alert = this.alertCtrl.create({
      header: 'DRINK',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'name'

        },
        {
          name: 'ingredient',
          type: 'textarea',
          placeholder: 'ingredient'

        },
        {
          name: 'how',
          type: 'textarea',
          placeholder: 'How to do'
        },
        {
          name: 'image',
          type: 'text',
          placeholder: 'image'
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
          text: 'Add',
          handler: data => {
            let tmpobj =  //db : inputform
              {name: data.name,
                ingredient: data.ingredient,
               how: data.how,
               image: data.image
              };
              this.getcrud.createDataDr(tmpobj);
          }//handler

        }//update
      ]
    });
    (await alert).present();
  }

  //add other -----------------------------------------
  async ADDO() {
    let alert = this.alertCtrl.create({
      header: 'OTHER',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'name'

        },
        {
          name: 'ingredient',
          type: 'textarea',
          placeholder: 'ingredient'

        },
        {
          name: 'how',
          type: 'textarea',
          placeholder: 'How to do'
        },
        {
          name: 'image',
          type: 'text',
          placeholder: 'image'
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
          text: 'Add',
          handler: data => {
            let tmpobj =  //db : inputform
              {name: data.name,
                ingredient: data.ingredient,
               how: data.how,
               image: data.image
              };
              this.getcrud.createDataO(tmpobj);
          }//handler

        }//update
      ]
    });
    (await alert).present();
  }

  //add food -----------------------------------------
  async ADDF() {
    let alert = this.alertCtrl.create({
      header: 'FOOD',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'name'

        },
        {
          name: 'ingredient',
          type: 'textarea',
          placeholder: 'ingredient'

        },
        {
          name: 'how',
          type: 'textarea',
          placeholder: 'How to do'
        },
        {
          name: 'image',
          type: 'text',
          placeholder: 'image'
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
          text: 'Add',
          handler: data => {
            let tmpobj =  //db : inputform
              {name: data.name,
                ingredient: data.ingredient,
               how: data.how,
               image: data.image
              };
              this.getcrud.createDataF(tmpobj);
          }//handler

        }//update
      ]
    });
    (await alert).present();
  }

}
