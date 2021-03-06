import { Component, OnInit, Input } from '@angular/core';
import { Tile } from "models/tile";

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  constructor() { }

  @Input() tile: Tile;

  ngOnInit() {
    if(this.tile != undefined){
      console.log(this.tile);
    }
  }

}
