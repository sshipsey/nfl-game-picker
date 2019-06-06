import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Observable } from '../../node_modules/rxjs';
import { XmlService } from './services/xmlService';
import { INFLResponse, IGameInnerEl } from './interfaces/INFLResponse';
import { ITeam, ITeamMap } from './interfaces/ITeam';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { WeekFetchService } from './services/weekFetchService';

enum Choice {
  Home,
  Away
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('scoreboard') scoreboard: ScoreboardComponent;

  constructor(
    private http: HttpClient,
    private xml: XmlService,
    private week: WeekFetchService
  ) {}
  homes: ITeam[];
  aways: ITeam[];
  sliderPos: number;
  gameIdx = 0;

  // Week: Observables<Game[]>
  // Game: IGame
  // *ngFor=let week of (weeks | async)
  // *ngFor=let game of week
  allTeams: ITeamMap = {
    ARI: {
      name: 'Arizona Cardinals',
      abbreviation: 'ARI',
      logoUrl: 'assets/images/logos/cardinals.png',
      primaryColor: '#97233F',
      wins: 0,
      losses: 0,
      conference: 'NFC',
      division: 'West'
    },
    ATL: {
      name: 'Atlanta Falcons',
      abbreviation: 'ATL',
      logoUrl: 'assets/images/logos/falcons.png',
      primaryColor: '#A71930',
      wins: 0,
      losses: 0,
      conference: 'NFC',
      division: 'South'
    },
    BAL: {
      name: 'Baltimore Ravens',
      abbreviation: 'BAL',
      logoUrl: 'assets/images/logos/ravens.png',
      primaryColor: '#241773',
      wins: 0,
      losses: 0,
      conference: 'AFC',
      division: 'North'
    },
    BUF: {
      name: 'Buffalo Bills',
      abbreviation: 'BUF',
      logoUrl: 'assets/images/logos/bills.png',
      primaryColor: '#00338D',
      wins: 0,
      losses: 0,
      conference: 'AFC',
      division: 'East'
    },
    CAR: {
      name: 'Carolina Panthers',
      abbreviation: 'CAR',
      logoUrl: 'assets/images/logos/panthers.png',
      primaryColor: '#0085CA',
      wins: 0,
      losses: 0,
      conference: 'NFC',
      division: 'South'
    },
    CHI: {
      name: 'Chicago Bears',
      abbreviation: 'CHI',
      logoUrl: 'assets/images/logos/bears.png',
      primaryColor: '#0B162A',
      wins: 0,
      losses: 0,
      conference: 'NFC',
      division: 'North'
    },
    CIN: {
      name: 'Cincinnati Bengals',
      abbreviation: 'CIN',
      logoUrl: 'assets/images/logos/bengals.png',
      primaryColor: '#FB4F14',
      wins: 0,
      losses: 0,
      conference: 'AFC',
      division: 'North'
    },
    CLE: {
      name: 'Cleveland Browns',
      abbreviation: 'CLE',
      logoUrl: 'assets/images/logos/browns.png',
      primaryColor: '#311D00',
      wins: 0,
      losses: 0,
      conference: 'AFC',
      division: 'North'
    },
    DAL: {
      name: 'Dallas Cowboys',
      abbreviation: 'DAL',
      logoUrl: 'assets/images/logos/cowboys.png',
      primaryColor: '#041E42',
      wins: 0,
      losses: 0,
      conference: 'NFC',
      division: 'East'
    },
    DEN: {
      name: 'Denver Broncos',
      abbreviation: 'DEN',
      logoUrl: 'assets/images/logos/broncos.png',
      primaryColor: '#FB4F14',
      wins: 0,
      losses: 0,
      conference: 'AFC',
      division: 'West'
    },
    DET: {
      name: 'Detroit Lions',
      abbreviation: 'DET',
      logoUrl: 'assets/images/logos/lions.png',
      primaryColor: '#0076B6',
      wins: 0,
      losses: 0,
      conference: 'NFC',
      division: 'North'
    },
    GB: {
      name: 'Green Bay Packers',
      abbreviation: 'GB',
      logoUrl: 'assets/images/logos/packers.png',
      primaryColor: '#203731',
      wins: 0,
      losses: 0,
      conference: 'NFC',
      division: 'North'
    },
    HOU: {
      name: 'Houston Texans',
      abbreviation: 'HOU',
      logoUrl: 'assets/images/logos/texans.png',
      primaryColor: '#03202F',
      wins: 0,
      losses: 0,
      conference: 'AFC',
      division: 'South'
    },
    IND: {
      name: 'Indianapolis Colts',
      abbreviation: 'IND',
      logoUrl: 'assets/images/logos/colts.png',
      primaryColor: '#002C5F',
      wins: 0,
      losses: 0,
      conference: 'AFC',
      division: 'South'
    },
    JAX: {
      name: 'Jacksonville Jaguars',
      abbreviation: 'JAX',
      logoUrl: 'assets/images/logos/jaguars.png',
      primaryColor: '#D7A22A',
      wins: 0,
      losses: 0,
      conference: 'AFC',
      division: 'South'
    },
    KC: {
      name: 'Kansas City Chiefs',
      abbreviation: 'KC',
      logoUrl: 'assets/images/logos/chiefs.png',
      primaryColor: '#E31837',
      wins: 0,
      losses: 0,
      conference: 'AFC',
      division: 'West'
    },
    LAC: {
      name: 'Los Angeles Chargers',
      abbreviation: 'LAC',
      logoUrl: 'assets/images/logos/chargers.png',
      primaryColor: '#002A5E',
      wins: 0,
      losses: 0,
      conference: 'AFC',
      division: 'West'
    },
    LA: {
      name: 'Los Angeles Rams',
      abbreviation: 'LA',
      logoUrl: 'assets/images/logos/rams.png',
      primaryColor: '#002244',
      wins: 0,
      losses: 0,
      conference: 'NFC',
      division: 'West'
    },
    MIA: {
      name: 'Miami Dolphins',
      abbreviation: 'MIA',
      logoUrl: 'assets/images/logos/dolphins.png',
      primaryColor: '#008E97',
      wins: 0,
      losses: 0,
      conference: 'AFC',
      division: 'East'
    },
    MIN: {
      name: 'Minnesota Vikings',
      abbreviation: 'MIN',
      logoUrl: 'assets/images/logos/vikings.png',
      primaryColor: '#4F2683',
      wins: 0,
      losses: 0,
      conference: 'NFC',
      division: 'North'
    },
    NE: {
      name: 'New England Patriots',
      abbreviation: 'NE',
      logoUrl: 'assets/images/logos/patriots.png',
      primaryColor: '#002244',
      wins: 0,
      losses: 0,
      conference: 'AFC',
      division: 'East'
    },
    NO: {
      name: 'New Orleans Saints',
      abbreviation: 'NO',
      logoUrl: 'assets/images/logos/saints.png',
      primaryColor: '#D3BC8D',
      wins: 0,
      losses: 0,
      conference: 'NFC',
      division: 'South'
    },
    NYG: {
      name: 'New York Giants',
      abbreviation: 'NYG',
      logoUrl: 'assets/images/logos/giants.png',
      primaryColor: '#0B2265',
      wins: 0,
      losses: 0,
      conference: 'NFC',
      division: 'East'
    },
    NYJ: {
      name: 'New York Jets',
      abbreviation: 'NYJ',
      logoUrl: 'assets/images/logos/jets.png',
      primaryColor: '#003F2D',
      wins: 0,
      losses: 0,
      conference: 'AFC',
      division: 'East'
    },
    OAK: {
      name: 'Oakland Raiders',
      abbreviation: 'OAK',
      logoUrl: 'assets/images/logos/raiders.png',
      primaryColor: '#000000',
      wins: 0,
      losses: 0,
      conference: 'AFC',
      division: 'West'
    },
    PHI: {
      name: 'Philadelphia Eagles',
      abbreviation: 'PHI',
      logoUrl: 'assets/images/logos/eagles.png',
      primaryColor: '#004C54',
      wins: 0,
      losses: 0,
      conference: 'NFC',
      division: 'East'
    },
    PIT: {
      name: 'Pittsburgh Steelers',
      abbreviation: 'PIT',
      logoUrl: 'assets/images/logos/steelers.png',
      primaryColor: '#FFB612',
      wins: 0,
      losses: 0,
      conference: 'AFC',
      division: 'North'
    },
    SF: {
      name: 'San Francisco 49ers',
      abbreviation: 'SF',
      logoUrl: 'assets/images/logos/49ers.png',
      primaryColor: '#AA0000',
      wins: 0,
      losses: 0,
      conference: 'NFC',
      division: 'West'
    },
    SEA: {
      name: 'Seattle Seahawks',
      abbreviation: 'SEA',
      logoUrl: 'assets/images/logos/seahawks.png',
      primaryColor: '#002244',
      wins: 0,
      losses: 0,
      conference: 'NFC',
      division: 'West'
    },
    TB: {
      name: 'Tampa Bay Buccaneers',
      abbreviation: 'TB',
      logoUrl: 'assets/images/logos/buccaneers.png',
      primaryColor: '#D50A0A',
      wins: 0,
      losses: 0,
      conference: 'NFC',
      division: 'South'
    },
    TEN: {
      name: 'Tennessee Titans',
      abbreviation: 'TEN',
      logoUrl: 'assets/images/logos/titans.png',
      primaryColor: '#418FDE',
      wins: 0,
      losses: 0,
      conference: 'AFC',
      division: 'South'
    },
    WAS: {
      name: 'Washington Redskins',
      abbreviation: 'WAS',
      logoUrl: 'assets/images/logos/redskins.png',
      primaryColor: '#773141',
      wins: 0,
      losses: 0,
      conference: 'NFC',
      division: 'East'
    }
  };

  ngOnInit() {
    this.fetchGamesByWeek(0).subscribe(data => {
      return this.parseAndZip(data).then(zipped => {
        [this.homes, this.aways] = zipped;
        this.sliderPos = 0;
      });
    });
  }

  pickGame = (choice: Choice) => {
    if (this.gameIdx % 10 === 0 && this.gameIdx > 0 && this.gameIdx / 10 < 18) {
      this.fetchGamesByWeek(this.gameIdx / 10).subscribe(data =>
        this.parseAndZip(data).then(zipped => {
          this.homes = this.homes.concat(zipped[0]);
          this.aways = this.aways.concat(zipped[1]);
        })
      );
    }
    this.sliderPos += 100;
    // This is so fucked up, but it works i guess
    if (choice === Choice.Home) {
      this.allTeams[this.homes[this.gameIdx].abbreviation].wins += 1;
      this.allTeams[this.aways[this.gameIdx].abbreviation].losses += 1;
    } else {
      this.allTeams[this.homes[this.gameIdx].abbreviation].losses += 1;
      this.allTeams[this.aways[this.gameIdx].abbreviation].wins += 1;
    }
    this.gameIdx += 1;
    this.scoreboard.update();
  };

  gamesToMatchups = (games: IGameInnerEl[]) =>
    games.map(g => [this.getTeam(g.$.h), this.getTeam(g.$.v)]);

  parseAndZip = (scheduleWeekStr: string) =>
    this.xml.parseXmlString<INFLResponse>(scheduleWeekStr).then(result => {
      const games = result.ss.gms[0].g;
      const matchups = this.gamesToMatchups(games);
      return _.zip(...matchups);
    });

  fetchGamesByWeek = (week: number) =>
    week <= 16 ? this.week.getWeek(week) : new Observable<null>();

  getTeam = (team: string): ITeam => this.allTeams[team];
}
