import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MENUS } from '../data/mock-data';
import { Item } from '../model/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  title = 'app';
  choiceName: any;
  dataSel: any;
  dataSelected: string;
  dataAllString: string;
  Data: Item[] = MENUS;
  choices: boolean = false;
  relatedChoices: boolean = false;

  nameValue: string;
  nameValueChoice: string;

 /* constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get(baseUrl + 'api/menu').subscribe((res: any)  => {
      //console.log(res);
      this.Data = [res];
    }, error => console.log(error));
    //this.Data = MENUS;
  }*/

  constructor(){
  this.Data = MENUS;
}


   getSelecteditem() {
    this.dataSel = MENUS.find(Item => Item.name === this.dataSelected);
    if (this.dataSel.name === this.dataSelected) {
      this.nameValue = this.dataSelected;
    }
    this.dataAllString = this.dataSel;
    this.choices = true;
  }

   onItemChange(item) {
    this.getSelecteditem();
  }

  getSelectedRelatedItem() {
    this.dataAllString = this.dataSel;
    this.relatedChoices = true;
  }

   onSelectRelated(item) {
    this.getSelectedRelatedItem();
  }

}
