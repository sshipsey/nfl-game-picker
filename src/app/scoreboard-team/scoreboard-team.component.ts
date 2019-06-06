import { Component, Input } from '@angular/core';
import { ITeam } from '../interfaces/ITeam';

@Component({
  selector: 'app-scoreboard-team',
  templateUrl: './scoreboard-team.component.html',
  styleUrls: ['./scoreboard-team.component.scss']
})
export class ScoreboardTeamComponent {
  @Input() team: ITeam;

  constructor() {}
}
