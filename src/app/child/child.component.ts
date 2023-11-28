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


  ngOnChanges(changes: SimpleChanges) {
    if (!changes['name'].firstChange) {
      console.log(changes['name'])
    }

    console.log(changes['foods'])
    if (changes['foods'] && !changes['foods'].currentValue) {
      console.log(changes['foods'])
    }
  }

}
