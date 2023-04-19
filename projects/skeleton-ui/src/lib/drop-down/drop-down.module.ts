import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { InputOverlayComponent } from "../input-overlay/input-overlay.component";
import { DropDownElementComponent } from "./drop-down-element/drop-down-element.component";
import { DropDownComponent } from "./drop-down.component";

@NgModule({
  declarations:[DropDownComponent, DropDownElementComponent],
  imports:[CommonModule, InputOverlayComponent],
  exports: [DropDownComponent, DropDownElementComponent]
})
export class SkeletonDropDownModule{}