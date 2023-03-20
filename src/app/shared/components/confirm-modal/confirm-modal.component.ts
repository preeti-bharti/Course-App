import { Component, Input, OnInit } from '@angular/core';
import { ConfirmModalService } from './confirm-modal.service';
import {  faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {
  modalOptions : any = {};
  faClose = faClose;
  constructor(  
        private confirmDialogService: ConfirmModalService  
  ) { }  
  
    ngOnInit(): any {  
      console.log(this.modalOptions);
       /** 
        *   This function waits for a message from alert service, it gets 
        *   triggered when we call this from any other component 
        */  
        this.confirmDialogService.getMessage().subscribe(modalOptions => {  
            this.modalOptions = modalOptions;  
        });  
    }  
    CheckIfModalOptionIsEmpty(){
      if(this.modalOptions.hasOwnProperty('message')){
        return true;
      }
      else{
        return false;
      }
    }
}
