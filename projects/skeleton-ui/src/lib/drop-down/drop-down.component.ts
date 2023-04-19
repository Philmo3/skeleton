
import { Component, ContentChildren, Input, QueryList, AfterViewInit } from '@angular/core';
import { DropDownElementComponent } from './drop-down-element/drop-down-element.component';

@Component({
  selector: 'skeleton-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements AfterViewInit {

  @ContentChildren(DropDownElementComponent) dropDownElements?: QueryList<DropDownElementComponent>

  @Input() placeholder: string = 'placeholder'

  activeOverlay = false

  ngAfterViewInit(){
    this.dropDownElements?.forEach((element) => {
      element.selected.subscribe((value) => {
        console.log(value)
        if(value.type === 'string'){
          this.placeholder = value.value.text!
        }

        this.activeOverlay = false
      })
    })
  }

  clickOnDropDown(){
    this.activeOverlay = !this.activeOverlay
  }
}
