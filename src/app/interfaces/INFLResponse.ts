export interface INFLResponse {
  ss: Iss;
}

interface Iss {
  gms: IGameElement[];
}

interface IGameElement {
  g: IGameInnerEl[];
}

export interface IGameInnerEl {
  $: IGameInfo;
}

interface IGameInfo {
  eid: string;
  gsis: string;
  d: string;
  t: string;
  q: string;
  k: string;
  h: string;
  hnn: string;
  hs: string;
  v: string;
  vnn: string;
  vs: string;
  p: string;
  rz: string;
  ga: string;
  gt: string;
}
