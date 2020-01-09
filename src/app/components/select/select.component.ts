import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
@Component({
selector: "app-select",
template: `
<form class="demo-full-width margin-top" [formGroup]="group">

<select [formControlName]="field.name">
              <option *ngFor="let item of field.options" [value]="item">
              {{item}}
              </option>
            </select>

</form>
`,
styles: []
})
export class SelectComponent implements OnInit {
field: FieldConfig;
group: FormGroup;
constructor() {}
ngOnInit() {}
}