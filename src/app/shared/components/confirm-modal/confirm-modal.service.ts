import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfirmModalService {
  private subject = new Subject<any>();  
  
  confirm(modalOptions: any, accept: () => void, close: () => void): any {  
      this.setConfirmation(modalOptions, accept, close);  
  }  

  setConfirmation(modalOptions: any, accept: () => void, close: () => void): any {  
    console.log("method invoked"); 
      const that = this;  
      this.subject.next({
          message: modalOptions.message,  
          title : modalOptions.title,
          okButtonText : modalOptions.okButtonText,
          cancelButtonText : modalOptions.cancelButtonText,
          accept(): any {  
                  that.subject.next(true); // This will close the modal  
                  accept();  
              },  
          close(): any {  
              that.subject.next(false);  
              close();  
          }  
      });  

  }  

  getMessage(): Observable<any> { 
    
      return this.subject.asObservable();  
  } 
}
