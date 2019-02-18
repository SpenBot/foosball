import { Component, OnInit } from '@angular/core';

import { TurtlesService } from '../../services/turtles.service';
import { TurtleModel } from '../../models/turtle.model';

@Component({
  selector: 'app-turtles-grid',
  templateUrl: './turtles-grid.component.html',
  styleUrls: ['./turtles-grid.component.css']
})


export class TurtlesGridComponent implements OnInit {

  constructor(private turtlesService: TurtlesService) { }

  ngOnInit() {
      this.getAllTurtles();
  }

  turtles: TurtleModel[]

  columnDefs = [
    {headerName: '#', field: 'turtle_id'},
    {headerName: 'Name', field: 'turtle_name'},
    {headerName: 'Color', field: 'turtle_color'},
    {headerName: 'Weapon', field: 'turtle_weapon'}
  ];

  getAllTurtles(): void {
    this.turtlesService.getAllTurtles()
      .subscribe(
        (turtles) => {
          console.log(turtles)
          this.turtles = turtles
        },
        (err) => {
          console.log(err)
        }
      );
  }

}
