import { Directive, HostListener, HostBinding , ElementRef, Renderer} from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

  backgroundColor= 'white';
  @HostListener('mouseover') mousedgsdsfsdsdfsdfsdhover(){
    this.backgroundColor= 'green';
  //alert('hiii');
  }
  @HostListener('mouseleave') mouseleave(){
  this.backgroundColor= 'blue';
  }
  @HostBinding('style.backgroundColor') get setCghggolor(){
    return this.backgroundColor;
  }

  //constructor(){}
  constructor(private elementRef : ElementRef, private renderer : Renderer) {
    this.elementRef
    //this.elementRef.nativeElement.style.backgroundColor='green';
    //this.renderer.setElementStyle(this.elementRef.nativeElement,'background-color','green');
  }

}
