import { TemplateRef } from "@angular/core";

export type DropDownSelectedValue = { value: any, text?: string, templateRef?: TemplateRef<any> }
export type DropDownElementViewType = 'string' | 'templateRef'