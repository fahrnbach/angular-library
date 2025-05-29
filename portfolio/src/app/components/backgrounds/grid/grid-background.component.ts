import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-grid-background',
    imports: [NgStyle],
    templateUrl: './grid-background.component.html',
    styleUrl: './grid-background.component.css'
})
export class GridComponent implements OnInit {
  backgroundColor: string = 'red'

  // gridType: string = 'linear'
  gridType: string = 'radial'
  // generatedGradient =
  // `linear-gradient(to right, ${this.backgroundColor} 1px, transparent 1px),
  // linear-gradient(to bottom, ${this.backgroundColor} 1px, transparent 1px);`
  generatedGradient = {
    'background-image': 'linear-gradient(#e66465, #9198e5)',
    'background-size': '40px 40px'
    }
  generatedGradient1 = {
    'background-image': 'linear-gradient(#e66465, #9198e5)'
    }

  ngOnInit(): void {
    if (this.gridType == 'linear') {
      // this.generatedGradient1 = {'background-image': 'linear-gradient(to right, ' + this.backgroundColor + ' 1px, transparent 1px), linear-gradient(to bottom, ' + this.backgroundColor + ' 1px, transparent 1px)'}
      let gradient = `
      linear-gradient(to right, ${this.backgroundColor} 1px, transparent 1px),
      linear-gradient(to bottom, ${this.backgroundColor} 1px, transparent 1px)`
      this.generatedGradient = {
        'background-image': gradient,
        'background-size' : '60px 60px'
      }
    } else if (this.gridType == 'radial') {
      let gradient = `
      radial-gradient(circle,  ${this.backgroundColor} 2px, transparent 1px)`
      this.generatedGradient = {
        'background-image': gradient,
        'background-size' : '40px 40px'
      }
    }

  }
}
