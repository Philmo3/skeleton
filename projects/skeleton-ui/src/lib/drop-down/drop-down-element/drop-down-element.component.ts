import { AfterViewInit, TemplateRef } from '@angular/core';
import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DropDownElementViewType, DropDownSelectedValue } from '../drop-down.types';



@Component({
  selector: 'skeleton-drop-down-element',
  templateUrl: './drop-down-element.component.html',
  styleUrls: ['./drop-down-element.component.css']
})
export class DropDownElementComponent implements AfterViewInit {

  @ViewChild('elementViewRef', { static: false}) public elementViewRef?: TemplateRef<any>

  @Input() set text(text: string){
    this.elementViewType = 'string'
    this.elementText = text
  }

  @Input() value: any

  @Output() selected = new EventEmitter<{value: DropDownSelectedValue, type: DropDownElementViewType}>()

  elementViewType: DropDownElementViewType = 'templateRef'

  elementText: string = ''

  ngAfterViewInit(): void {
    console.log(this.elementViewRef)
    console.log(this.elementViewType)
  }

  select(){
    const value: DropDownSelectedValue = (
      this.elementViewType === 'string' ? { value: this.value, text: this.elementText } :
      {value: this.value, templateRef: this.elementViewRef}
    )

    this.selected.emit({value, type: this.elementViewType})
  }
}
