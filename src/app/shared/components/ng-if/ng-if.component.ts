import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent implements OnInit {
 
  selectedSkill:string='html'
  constructor() { }

  ngOnInit(): void {
  }

  onTab(skill:string){
    this.selectedSkill=skill
  }

}
