import { Directive ,ElementRef} from '@angular/core';
import { faEye,faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Directive({
  selector: '[appTogglePassword]',
  exportAs: 'togglePassword'
})
export class TogglePasswordDirective {
  public _shown = false;

  constructor(private el: ElementRef) {
    const span=document.getElementById('basic-addon2');
    console.log("Test directive");
    span?.addEventListener('click', () => {
      this.toggle(span);
    });
   }

  
   toggle(span:HTMLElement) {
    console.log("clicked on icon")
    this._shown = !this._shown;
    const parent=document.getElementById('passwordInput');
    if (this._shown) {
      parent?.setAttribute('type', 'text');
    } else {
      parent?.setAttribute('type', 'password');
    }
  }

  }
  
