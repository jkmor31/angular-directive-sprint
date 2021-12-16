import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.css']
})
export class FontsComponent implements OnInit {
  text: string = "";
  selectedFont: string = "";
  fontList: string[] = ["Caesar Dressing", "Creepster", "Lancelot", "Lora", "Meow Script", "Monoton", "Montserrat Subrayada", "Oswald"];
  isCaesar: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(data: any) {
    console.warn(data);
    this.text = data.textbox;
    this.selectedFont = data.select;
    
  }

}
