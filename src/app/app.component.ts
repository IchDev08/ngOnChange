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
  name = 'ngoich'
  foods: string[] = []

  onclick() {
    this.name = 'onChanges'
  }

  addFood(food: string) {
    const isExits = this.foods?.find((value) => value == food)
    if (!isExits && food) {
      this.foods = [...this.foods, food]
    }
    console.log(this.foods)
  }

}
