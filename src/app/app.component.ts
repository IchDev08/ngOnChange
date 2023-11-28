import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = ''
  foods: string[] = []
  title = ''

  onclick() {
    this.name = 'NgoIch'
    this.title = 'Software engineer'
  }

  addFood(food: string) {
    const isExits = this.foods?.find((value) => value == food)
    if (!isExits && food) {
      this.foods = [...this.foods, food]
    }
    console.log(this.foods)
  }

}
