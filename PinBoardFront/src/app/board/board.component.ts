import { Component, OnInit } from '@angular/core';
import { IStory } from './story';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.less']
})
export class BoardComponent implements OnInit {

  stories: IStory[] = [
    {
      "title": "Header",
      "content": "Some quick example text to build on the card title and make up the bulk of the card's content."
    },
    {
      "title": "Header Two",
      "content": "Some quick example text."
    },
    {
      "title": "Header Three",
      "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam volutpat nibh sit amet consequat scelerisque. Pellentesque consectetur orci vel urna hendrerit sodales."
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<IStory[]>) {
    moveItemInArray(this.stories, event.previousIndex, event.currentIndex);
  }

}
