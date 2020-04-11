import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare var jsPDF;

@Component({
  selector: 'app-make-pdf',
  templateUrl: './make-pdf.component.html',
  styleUrls: ['./make-pdf.component.scss']
})
export class MakePdfComponent implements OnInit {

  users = [];
  form: FormGroup;
  @ViewChild('table') tableElement: ElementRef;

  constructor(private _fb: FormBuilder) {

  }

  ngOnInit() {
    this.form = this._fb.group({
      name: ['',Validators.required],
      id: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }

  makePDF() {
    const doc = jsPDF('portrait', 'pt', 'a4');
    const specialElementHandlers = {
      '#editor': (element, renderer) => {
        return true;
      },
    };
    const content = this.tableElement.nativeElement;
    doc.fromHTML(content.innerHTML,  {
      width: 190,
      elementHandlers: specialElementHandlers,
    });
    doc.save('user' + '.pdf');
  }

  onSubmit() {
    this.users.push(this.form.value);
    this.form.reset();
  }
  get disable() {
    return this.users.length > 0;
  }

}
