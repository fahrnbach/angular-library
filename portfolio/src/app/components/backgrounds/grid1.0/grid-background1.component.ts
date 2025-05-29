import { Component } from '@angular/core';

@Component({
    selector: 'app-grid-background-1',
    imports: [],
    templateUrl: './grid-background1.component.html',
    styleUrl: './grid-background1.component.css'
})
export class GridComponent {
  gridSize: number = 500
  gridSizeArray: number[] = new Array(this.gridSize).fill(0)
}
