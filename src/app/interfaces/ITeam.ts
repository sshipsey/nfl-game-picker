export interface ITeam {
  name: string;
  abbreviation: string;
  logoUrl: string;
  primaryColor: string;
  wins: number;
  losses: number;
  conference: string;
  division: string;
}

export interface ITeamMap {
  [key: string]: ITeam;
}
