import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnChanges {

  @Input() name: string = ''
  @Input() foods: string[] = []
  @Input() title: string = ''

  fullTitle = ''


  ngOnChanges(changes: SimpleChanges) {
    if (!changes['name']?.firstChange && changes['name']?.currentValue) {
      console.log(changes['name'])
    }

    if (changes['foods']?.currentValue) {
      console.log(changes['foods'])
    }

    if (changes['title']?.currentValue || changes['name']?.currentValue) {
      this.fullTitle = changes['name'].currentValue + '-' + changes['title'].currentValue
      console.log(this.fullTitle)
    }

  }

}
