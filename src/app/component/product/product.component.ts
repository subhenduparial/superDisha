import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  demoJson1:any=[];
  demoJson:any=[];
  convertedData:any=[];
  constructor() { }

  ngOnInit(): void {
    console.log("This is test purpose");
    // this.demoJson={
    //   "Health Condition":["Liver Care","Diabetic","Pain Relief"],
    //   "Baby Care":{
    //     "Diapering":["Diapers","Wipes"],
    //     "Diaper By Weight":["0 to 7 Kg","7 to 14 Kg","14 to 18 Kg","Above 18 Kg"]
    //   },
    //   "Health & Nutrition":{
    //     "Health Drinks":["Adult Nutrition","Kids Nutrition","Energy Drinks","Apple Cider Vinegar","Honey"]
    //   }
    // };
    this.demoJson1=[
      {
        "Health Condition":["Liver Care","Diabetic","Pain Relief"]
      },
      {
        "Baby Care":{
          "Diapering":["Diapers","Wipes"],
          "Diaper By Weight":["0 to 7 Kg","7 to 14 Kg","14 to 18 Kg","Above 18 Kg"]
        }
      },
      {
        "Health & Nutrition":{
          "Health Drinks":["Adult Nutrition","Kids Nutrition","Energy Drinks","Apple Cider Vinegar","Honey"]
        }
      }
      
    ]

    this.demoJson=[
      {
        "category":"Health Condition",
        "category_details":[
          "Liver Care",
          "Diabetic",
          "Pain Relief"
        ]
      },
      {
        "category":"Baby Care",
        "category_details":["Diapering","Wipes"],
        "sub_category":[
          {
            "Diapering":["Diapers","Wipes"]
          },
          {
            "Diaper By Weight":["0 to 7 Kg","7 to 14 Kg","14 to 18 Kg","Above 18 Kg"]
          }
        ],
      }
    ]
    console.log("HHH",this.demoJson);
    this.printProperties(this.demoJson1,"");
  }

  printProperties(obj: any, prefix: string = ''): void {
    Object.entries(obj).forEach(([key, value]) => {
      const propName = prefix + key;
      if (typeof value === 'object' && value !== null) {
        this.printProperties(value, propName + ' > ');
      } else {
        console.log("Data ..  "+propName + ' > ' + value);
        this.convertedData.push(propName);
        console.log(this.convertedData);
      }
    });
  }
}
