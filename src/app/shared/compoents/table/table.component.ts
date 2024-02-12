import { Component } from '@angular/core';
import { TableService } from 'src/app/core/Services/table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
tabledata:any=[]
constructor(public gettabledata:TableService){

}
ngOnInit() {
  debugger
  this.gettabledata.get().subscribe((data) => {
    this.tabledata = data;
    console.log(this.tabledata);
    
  });
}

}
