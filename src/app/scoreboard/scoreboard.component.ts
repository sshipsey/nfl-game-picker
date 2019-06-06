import { Component, Input, OnInit } from '@angular/core';
import { ITeam, ITeamMap } from '../interfaces/ITeam';
import * as _ from 'lodash';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {
  @Input() teams: ITeamMap;
  afcn: ITeam[];
  afcs: ITeam[];
  afcw: ITeam[];
  afce: ITeam[];
  nfcn: ITeam[];
  nfcs: ITeam[];
  nfcw: ITeam[];
  nfce: ITeam[];
  constructor() {}

  ngOnInit() {
    this.update();
  }

  update() {
    this.afcn = _.orderBy(
      Object.values(this.teams).filter(
        team => team.conference === 'AFC' && team.division === 'North'
      ),
      team => team.wins
    ).reverse();
    this.afcs = _.orderBy(
      Object.values(this.teams).filter(
        team => team.conference === 'AFC' && team.division === 'South'
      ),
      team => team.wins
    ).reverse();
    this.afcw = _.orderBy(
      Object.values(this.teams).filter(
        team => team.conference === 'AFC' && team.division === 'West'
      ),
      team => team.wins
    ).reverse();
    this.afce = _.orderBy(
      Object.values(this.teams).filter(
        team => team.conference === 'AFC' && team.division === 'East'
      ),
      team => team.wins
    ).reverse();
    this.nfcn = _.orderBy(
      Object.values(this.teams).filter(
        team => team.conference === 'NFC' && team.division === 'North'
      ),
      team => team.wins
    ).reverse();
    this.nfcs = _.orderBy(
      Object.values(this.teams).filter(
        team => team.conference === 'NFC' && team.division === 'South'
      ),
      team => team.wins
    ).reverse();
    this.nfcw = _.orderBy(
      Object.values(this.teams).filter(
        team => team.conference === 'NFC' && team.division === 'West'
      ),
      team => team.wins
    ).reverse();
    this.nfce = _.orderBy(
      Object.values(this.teams).filter(
        team => team.conference === 'NFC' && team.division === 'East'
      ),
      team => team.wins
    ).reverse();
  }
}
