import { Component, OnInit } from '@angular/core';
import { IStory } from './story';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  st: string = 'to-do';

  stories: IStory[] = [
    {column: 'to-do', title: 'Some title One', subtitle: 'subtitle One', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper ex eu ultricies accumsan.' },
    {column: 'to-do', title: 'Some title Two', subtitle: 'subtitle Two', content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vestibulum sed mi velit.' },
    {column: 'to-do', title: 'Some title Three', subtitle: 'subtitle Three', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    {column: 'in-progress', title: 'Some title Four', subtitle: 'subtitle Four', content: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin eros dui, pretium at pharetra non, luctus vel erat.' }
  ]

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<IStory[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
