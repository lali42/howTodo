import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {

  name:any;
  ingredient:any;
  image:any;
  how:any;
  list=[];

  constructor(public actroute: ActivatedRoute,public navCtrl: NavController) { }

  ngOnInit() {
    const dataOrder = this.actroute.snapshot.paramMap.get('send');
    let getOrder = JSON.parse(dataOrder);
    this.name = getOrder.name;
    this.image = getOrder.image;
    this.ingredient = getOrder.ingredient;
    this.how = getOrder.how;
    this.list = getOrder;

    this.ingredient = this.ingredient.split("\n");
    this.how = this.how.split("\n");

  }

  back() {
    this.navCtrl.pop();
  }

}
