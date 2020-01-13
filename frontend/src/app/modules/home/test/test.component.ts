import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as jspdf from 'jspdf';  
  
import html2canvas from 'html2canvas'; 

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, AfterViewInit {

  nameArray = [{
    "name": "John zxcvbnm asdfghjk hhhhhh hhhhhhhhhhh hhhhhhh hhhhhh hhhhhh hhhhhhhhh",
    "pname": "John zxcvbnm asdfghjk hhhhhh ",
    "cname": "zxcvbnm asdfghjk hhhhhh",
    "date": "10-01-2020"
  }]

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.captureScreen();
  }

  public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
  }  

}
