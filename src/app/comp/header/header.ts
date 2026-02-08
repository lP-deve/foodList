import { Component } from '@angular/core';
import { RouterModule, } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']


})
export class Header {
  Isopened:boolean = false;

 toggle(){

   this.Isopened = !this.Isopened
 }

 close(){
   this.Isopened = false
 }
}
