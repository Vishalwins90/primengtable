import {
  Component,
  DebugElement,
  HostListener,
  IterableDiffers,
  ViewChild,
} from '@angular/core';
import { TableService } from 'src/app/core/Services/table.service';
import * as FileSaver from 'file-saver';
import * as jsPDF from 'jspdf';
import { ActivatedRoute, Params } from '@angular/router';

import { TreeSelect } from 'primeng/treeselect';
;

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss'],
})
export class CommonTableComponent {
  selectedChild: any = null;
  selectedNames: string[] = [];
  selected: any = [] = []
  allname: any = []
  allChild: any = [];
  nodes: any = [] = []
  data: any = []
  avatarArray: any;
  array: any
  filterChild: any = []
  all: any = []
  @ViewChild(TreeSelect)
  treeselect: any = TreeSelect

  constructor(
    public gettabledata: TableService,
    public route: ActivatedRoute
  ) {
  }
  ngOnInit() {
    this.nodes = [
      {
        key: '0',
        "label": "9th Class",
        "icon": "pi pi-folder",
        "children": [
          {
            key: '0-0',
            "label": "Student A",
            "icon": "pi pi-folder",
            "children": [
              { key: '0-0-0', label: 'Vishal Kumar', Rollno: 12 },
              { key: '0-0-1', label: 'Sumit kumar', Rollno: 35 },
            ]
          },
          {
            key: '0-1',
            "label": "Student B",
            "icon": "pi pi-folder",

            "children": [
              { key: '0-1-0', label: 'Pinki Kumari', Rollno: 13 },
              { key: '1-1-1', label: 'Pawan kumar', Rollno: 80 },

            ]
          }

        ],
      },
      {
        key: '1',
        "label": "10th class",
        "icon": "pi pi-folder",
        "children": [
          {
            "label": "Students",
            "icon": "pi pi-file",
            "children": [
              { key: '1-0', label: 'Ram kumar', Rollno: 89 },
              { key: '1-1', label: 'Shivam kumar', Rollno: 90 },

            ]
          },

        ]
      },
      {
        key: '2',
        "label": "11th class",
        "icon": "pi pi-folder",
        "children": [
          {
            "label": "Students",
            "icon": "pi pi-file",
            "children": [
              { key: '2-0-0', label: 'Don kumar', Rollno: 11 },
              { key: '2-0-1', label: 'Rahul signh', Rollno: 10 },

            ]
          },
        ]
      }
    ];
    this.nodes.forEach((node: any) => this.expandChildren(node));
  }

  getShortName(fullName: any) {
    return fullName?.split(' ').map((n: any) => n[0]).join('').toUpperCase();
  }
  onHide(event: any) {
    if (event === undefined) {
      this.treeselect.overlayVisible = true;
      return;
    }
    let arr: any
    arr = this.selected.filter((item: any) => !item.children)
    this.avatarArray = arr
    console.log(this.avatarArray)
    this.nodes.forEach((node: any) => this.expandChildren(node));

  }

  expandChildren(node: any) {
    if (node.children) {
      node.expanded = true;
      for (let cn of node.children) {
        this.expandChildren(cn);
      }
    }
  }

  pushAlltheData() {
    this.selected = [];
    this.allChild.forEach((childLabel: string) => {
      debugger
      this.alldataUser(childLabel, this.nodes);
    });
  }

  alldataUser(label: string, nodes: any[]) {
    nodes.forEach(node => {
      if (node.children) {
        this.alldataUser(label, node.children);
        const allChildren = node.children.every((child: any) => this.selected.includes(child));
        if (allChildren && !this.selected.includes(node)) {
          this.selected.push(node);
        }
      } else {
        if (node.label === label && !this.selected.includes(node)) {
          this.selected.push(node);
        }
      }
    }); 
  }
  
}

