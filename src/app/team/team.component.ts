import { Component, OnInit, Input } from '@angular/core';
import { ITeam } from '../interfaces/ITeam';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() team: ITeam;
  constructor() {}

  ngOnInit() {}
}
