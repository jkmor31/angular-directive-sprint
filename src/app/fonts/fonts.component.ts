import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.css']
})
export class FontsComponent implements OnInit {

  fontList: string[] = ["Caesar Dressing", "Creepster", "Lancelot", "Lora", "Meow Script", "Monoton", "Montserrat Subrayada", "Oswald"];

  constructor() { }

  ngOnInit(): void {
  }
  changeFont() {
    // Make the magic happen ✨
  }
}
