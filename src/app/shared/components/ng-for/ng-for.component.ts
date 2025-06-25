import { Component, OnInit } from '@angular/core';
import { Itab } from '../../models/tab';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent implements OnInit {
 

  selectedSkill:string ='html'

  tabsArr:Array<Itab>=[
    {
      skillName:'html',
      skillInfo:`
      <strong>Html</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat, quam sit tempora repellendus molestias.</p>
      `
    },
    {
      skillName:'css',
      skillInfo:`
      <strong>Css</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat, quam sit tempora repellendus molestias.</p>
      `
    },
    {
      skillName:'js',
      skillInfo:`
      <strong>Js</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat, quam sit tempora repellendus molestias.</p>
      `
    },
    {
      skillName:'angular',
      skillInfo:`
      <strong>Angular</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas fugiat, quam sit tempora repellendus molestias.</p>
      `
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
