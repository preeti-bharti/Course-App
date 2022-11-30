import { Component, OnInit,Input } from '@angular/core';
import {faPen,faTrash} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
@Input() showCourse: string="";
@Input() IsEditable!:boolean;
  faPen=faPen;
  faTrash=faTrash;
  constructor() { }
  ngOnInit(): void {
  }

}
