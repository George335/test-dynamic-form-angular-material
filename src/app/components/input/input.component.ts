import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
selector: "app-input",
template: `

<form class="demo-full-width" [formGroup]="group">

<input [formControlName]="field.name" [placeholder]="field.label" [type]="field.inputType">

<ng-container *ngFor="let validation of field.validations;">

<div class="alert alert-danger" role="alert" *ngIf="group.get(field.name).hasError(validation.name)">

{{validation.message}}

</div>

</ng-container>

</form>

`,
styles: []
})
export class InputComponent implements OnInit {
field: FieldConfig;
group: FormGroup;
constructor() {}
ngOnInit() {}
}