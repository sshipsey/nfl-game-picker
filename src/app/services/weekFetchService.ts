import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class WeekFetchService {
  getWeek(week: number) {
    console.log(week);
    const weeks = [
      `
      <ss>
<gms gd="0" w="1" y="2019" t="R">
<g eid="2019090500" gsis="57900" d="Thu" t="8:20" q="P" k="" h="CHI" hnn="bears" hs="" v="GB" vnn="packers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019090800" gsis="57901" d="Sun" t="1:00" q="P" k="" h="CAR" hnn="panthers" hs="" v="LA" vnn="rams" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019090801" gsis="57902" d="Sun" t="1:00" q="P" k="" h="CLE" hnn="browns" hs="" v="TEN" vnn="titans" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019090802" gsis="57903" d="Sun" t="1:00" q="P" k="" h="JAX" hnn="jaguars" hs="" v="KC" vnn="chiefs" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019090803" gsis="57904" d="Sun" t="1:00" q="P" k="" h="MIA" hnn="dolphins" hs="" v="BAL" vnn="ravens" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019090804" gsis="57905" d="Sun" t="1:00" q="P" k="" h="MIN" hnn="vikings" hs="" v="ATL" vnn="falcons" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019090805" gsis="57906" d="Sun" t="1:00" q="P" k="" h="NYJ" hnn="jets" hs="" v="BUF" vnn="bills" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019090806" gsis="57907" d="Sun" t="1:00" q="P" k="" h="PHI" hnn="eagles" hs="" v="WAS" vnn="redskins" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019090807" gsis="57908" d="Sun" t="4:05" q="P" k="" h="LAC" hnn="chargers" hs="" v="IND" vnn="colts" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019090808" gsis="57909" d="Sun" t="4:05" q="P" k="" h="SEA" hnn="seahawks" hs="" v="CIN" vnn="bengals" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019090809" gsis="57910" d="Sun" t="4:25" q="P" k="" h="ARI" hnn="cardinals" hs="" v="DET" vnn="lions" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019090810" gsis="57911" d="Sun" t="4:25" q="P" k="" h="DAL" hnn="cowboys" hs="" v="NYG" vnn="giants" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019090811" gsis="57912" d="Sun" t="4:25" q="P" k="" h="TB" hnn="buccaneers" hs="" v="SF" vnn="49ers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019090812" gsis="57913" d="Sun" t="8:20" q="P" k="" h="NE" hnn="patriots" hs="" v="PIT" vnn="steelers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019090900" gsis="57914" d="Mon" t="7:10" q="P" k="" h="NO" hnn="saints" hs="" v="HOU" vnn="texans" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019090901" gsis="57915" d="Mon" t="10:20" q="P" k="" h="OAK" hnn="raiders" hs="" v="DEN" vnn="broncos" vs="" p="" rz="" ga="" gt="REG"/>
</gms>
</ss>`,
      `<ss>
<gms gd="0" w="2" y="2019" t="R">
<g eid="2019091200" gsis="57916" d="Thu" t="8:20" q="P" k="" h="CAR" hnn="panthers" hs="" v="TB" vnn="buccaneers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019091500" gsis="57917" d="Sun" t="1:00" q="P" k="" h="BAL" hnn="ravens" hs="" v="ARI" vnn="cardinals" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019091501" gsis="57918" d="Sun" t="1:00" q="P" k="" h="CIN" hnn="bengals" hs="" v="SF" vnn="49ers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019091502" gsis="57919" d="Sun" t="1:00" q="P" k="" h="DET" hnn="lions" hs="" v="LAC" vnn="chargers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019091503" gsis="57920" d="Sun" t="1:00" q="P" k="" h="GB" hnn="packers" hs="" v="MIN" vnn="vikings" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019091504" gsis="57921" d="Sun" t="1:00" q="P" k="" h="HOU" hnn="texans" hs="" v="JAX" vnn="jaguars" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019091505" gsis="57922" d="Sun" t="1:00" q="P" k="" h="MIA" hnn="dolphins" hs="" v="NE" vnn="patriots" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019091506" gsis="57923" d="Sun" t="1:00" q="P" k="" h="NYG" hnn="giants" hs="" v="BUF" vnn="bills" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019091507" gsis="57924" d="Sun" t="1:00" q="P" k="" h="PIT" hnn="steelers" hs="" v="SEA" vnn="seahawks" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019091508" gsis="57925" d="Sun" t="1:00" q="P" k="" h="TEN" hnn="titans" hs="" v="IND" vnn="colts" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019091509" gsis="57926" d="Sun" t="1:00" q="P" k="" h="WAS" hnn="redskins" hs="" v="DAL" vnn="cowboys" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019091510" gsis="57927" d="Sun" t="4:05" q="P" k="" h="OAK" hnn="raiders" hs="" v="KC" vnn="chiefs" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019091511" gsis="57928" d="Sun" t="4:25" q="P" k="" h="DEN" hnn="broncos" hs="" v="CHI" vnn="bears" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019091512" gsis="57929" d="Sun" t="4:25" q="P" k="" h="LA" hnn="rams" hs="" v="NO" vnn="saints" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019091513" gsis="57930" d="Sun" t="8:20" q="P" k="" h="ATL" hnn="falcons" hs="" v="PHI" vnn="eagles" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019091600" gsis="57931" d="Mon" t="8:15" q="P" k="" h="NYJ" hnn="jets" hs="" v="CLE" vnn="browns" vs="" p="" rz="" ga="" gt="REG"/>
</gms>
</ss>`,
      `<ss>
<gms gd="0" w="3" y="2019" t="R">
<g eid="2019091900" gsis="57932" d="Thu" t="8:20" q="P" k="" h="JAX" hnn="jaguars" hs="" v="TEN" vnn="titans" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092200" gsis="57933" d="Sun" t="1:00" q="P" k="" h="BUF" hnn="bills" hs="" v="CIN" vnn="bengals" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092201" gsis="57934" d="Sun" t="1:00" q="P" k="" h="DAL" hnn="cowboys" hs="" v="MIA" vnn="dolphins" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092202" gsis="57935" d="Sun" t="1:00" q="P" k="" h="GB" hnn="packers" hs="" v="DEN" vnn="broncos" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092203" gsis="57936" d="Sun" t="1:00" q="P" k="" h="IND" hnn="colts" hs="" v="ATL" vnn="falcons" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092204" gsis="57937" d="Sun" t="1:00" q="P" k="" h="KC" hnn="chiefs" hs="" v="BAL" vnn="ravens" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092205" gsis="57938" d="Sun" t="1:00" q="P" k="" h="MIN" hnn="vikings" hs="" v="OAK" vnn="raiders" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092206" gsis="57939" d="Sun" t="1:00" q="P" k="" h="NE" hnn="patriots" hs="" v="NYJ" vnn="jets" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092207" gsis="57940" d="Sun" t="1:00" q="P" k="" h="PHI" hnn="eagles" hs="" v="DET" vnn="lions" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092208" gsis="57941" d="Sun" t="4:05" q="P" k="" h="ARI" hnn="cardinals" hs="" v="CAR" vnn="panthers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092209" gsis="57942" d="Sun" t="4:05" q="P" k="" h="TB" hnn="buccaneers" hs="" v="NYG" vnn="giants" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092210" gsis="57943" d="Sun" t="4:25" q="P" k="" h="LAC" hnn="chargers" hs="" v="HOU" vnn="texans" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092211" gsis="57944" d="Sun" t="4:25" q="P" k="" h="SEA" hnn="seahawks" hs="" v="NO" vnn="saints" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092212" gsis="57945" d="Sun" t="4:25" q="P" k="" h="SF" hnn="49ers" hs="" v="PIT" vnn="steelers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092213" gsis="57946" d="Sun" t="8:20" q="P" k="" h="CLE" hnn="browns" hs="" v="LA" vnn="rams" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092300" gsis="57947" d="Mon" t="8:15" q="P" k="" h="WAS" hnn="redskins" hs="" v="CHI" vnn="bears" vs="" p="" rz="" ga="" gt="REG"/>
</gms>
</ss>`,
      `<ss>
<gms gd="0" w="4" y="2019" t="R">
<g eid="2019092600" gsis="57948" d="Thu" t="8:20" q="P" k="" h="GB" hnn="packers" hs="" v="PHI" vnn="eagles" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092900" gsis="57949" d="Sun" t="1:00" q="P" k="" h="ATL" hnn="falcons" hs="" v="TEN" vnn="titans" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092901" gsis="57950" d="Sun" t="1:00" q="P" k="" h="BAL" hnn="ravens" hs="" v="CLE" vnn="browns" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092902" gsis="57951" d="Sun" t="1:00" q="P" k="" h="BUF" hnn="bills" hs="" v="NE" vnn="patriots" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092903" gsis="57952" d="Sun" t="1:00" q="P" k="" h="DET" hnn="lions" hs="" v="KC" vnn="chiefs" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092904" gsis="57953" d="Sun" t="1:00" q="P" k="" h="HOU" hnn="texans" hs="" v="CAR" vnn="panthers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092905" gsis="57954" d="Sun" t="1:00" q="P" k="" h="IND" hnn="colts" hs="" v="OAK" vnn="raiders" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092906" gsis="57955" d="Sun" t="1:00" q="P" k="" h="MIA" hnn="dolphins" hs="" v="LAC" vnn="chargers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092907" gsis="57956" d="Sun" t="1:00" q="P" k="" h="NYG" hnn="giants" hs="" v="WAS" vnn="redskins" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092908" gsis="57957" d="Sun" t="4:05" q="P" k="" h="ARI" hnn="cardinals" hs="" v="SEA" vnn="seahawks" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092909" gsis="57958" d="Sun" t="4:05" q="P" k="" h="LA" hnn="rams" hs="" v="TB" vnn="buccaneers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092910" gsis="57959" d="Sun" t="4:25" q="P" k="" h="CHI" hnn="bears" hs="" v="MIN" vnn="vikings" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092911" gsis="57960" d="Sun" t="4:25" q="P" k="" h="DEN" hnn="broncos" hs="" v="JAX" vnn="jaguars" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019092912" gsis="57961" d="Sun" t="8:20" q="P" k="" h="NO" hnn="saints" hs="" v="DAL" vnn="cowboys" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019093000" gsis="57962" d="Mon" t="8:15" q="P" k="" h="PIT" hnn="steelers" hs="" v="CIN" vnn="bengals" vs="" p="" rz="" ga="" gt="REG"/>
</gms>
</ss>`,
      `<ss>
<gms gd="0" w="5" y="2019" t="R">
<g eid="2019100300" gsis="57963" d="Thu" t="8:20" q="P" k="" h="SEA" hnn="seahawks" hs="" v="LA" vnn="rams" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019100600" gsis="57964" d="Sun" t="1:00" q="P" k="" h="CAR" hnn="panthers" hs="" v="JAX" vnn="jaguars" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019100601" gsis="57965" d="Sun" t="1:00" q="P" k="" h="CIN" hnn="bengals" hs="" v="ARI" vnn="cardinals" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019100602" gsis="57966" d="Sun" t="1:00" q="P" k="" h="HOU" hnn="texans" hs="" v="ATL" vnn="falcons" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019100603" gsis="57967" d="Sun" t="1:00" q="P" k="" h="NO" hnn="saints" hs="" v="TB" vnn="buccaneers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019100604" gsis="57968" d="Sun" t="1:00" q="P" k="" h="NYG" hnn="giants" hs="" v="MIN" vnn="vikings" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019100605" gsis="57969" d="Sun" t="1:00" q="P" k="" h="OAK" hnn="raiders" hs="" v="CHI" vnn="bears" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019100606" gsis="57970" d="Sun" t="1:00" q="P" k="" h="PHI" hnn="eagles" hs="" v="NYJ" vnn="jets" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019100607" gsis="57971" d="Sun" t="1:00" q="P" k="" h="PIT" hnn="steelers" hs="" v="BAL" vnn="ravens" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019100608" gsis="57972" d="Sun" t="1:00" q="P" k="" h="TEN" hnn="titans" hs="" v="BUF" vnn="bills" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019100609" gsis="57973" d="Sun" t="1:00" q="P" k="" h="WAS" hnn="redskins" hs="" v="NE" vnn="patriots" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019100610" gsis="57974" d="Sun" t="4:05" q="P" k="" h="LAC" hnn="chargers" hs="" v="DEN" vnn="broncos" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019100611" gsis="57975" d="Sun" t="4:25" q="P" k="" h="DAL" hnn="cowboys" hs="" v="GB" vnn="packers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019100612" gsis="57976" d="Sun" t="8:20" q="P" k="" h="KC" hnn="chiefs" hs="" v="IND" vnn="colts" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019100700" gsis="57977" d="Mon" t="8:15" q="P" k="" h="SF" hnn="49ers" hs="" v="CLE" vnn="browns" vs="" p="" rz="" ga="" gt="REG"/>
</gms>
</ss>`,
      `<ss>
<gms gd="0" w="6" y="2019" t="R">
<g eid="2019101000" gsis="57978" d="Thu" t="8:20" q="P" k="" h="NE" hnn="patriots" hs="" v="NYG" vnn="giants" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019101300" gsis="57979" d="Sun" t="9:30" q="P" k="" h="TB" hnn="buccaneers" hs="" v="CAR" vnn="panthers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019101301" gsis="57980" d="Sun" t="1:00" q="P" k="" h="BAL" hnn="ravens" hs="" v="CIN" vnn="bengals" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019101302" gsis="57981" d="Sun" t="1:00" q="P" k="" h="CLE" hnn="browns" hs="" v="SEA" vnn="seahawks" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019101303" gsis="57982" d="Sun" t="1:00" q="P" k="" h="JAX" hnn="jaguars" hs="" v="NO" vnn="saints" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019101304" gsis="57983" d="Sun" t="1:00" q="P" k="" h="KC" hnn="chiefs" hs="" v="HOU" vnn="texans" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019101305" gsis="57984" d="Sun" t="1:00" q="P" k="" h="MIA" hnn="dolphins" hs="" v="WAS" vnn="redskins" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019101306" gsis="57985" d="Sun" t="1:00" q="P" k="" h="MIN" hnn="vikings" hs="" v="PHI" vnn="eagles" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019101307" gsis="57986" d="Sun" t="4:05" q="P" k="" h="ARI" hnn="cardinals" hs="" v="ATL" vnn="falcons" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019101308" gsis="57987" d="Sun" t="4:05" q="P" k="" h="LA" hnn="rams" hs="" v="SF" vnn="49ers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019101309" gsis="57988" d="Sun" t="4:25" q="P" k="" h="DEN" hnn="broncos" hs="" v="TEN" vnn="titans" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019101310" gsis="57989" d="Sun" t="4:25" q="P" k="" h="NYJ" hnn="jets" hs="" v="DAL" vnn="cowboys" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019101311" gsis="57990" d="Sun" t="8:20" q="P" k="" h="LAC" hnn="chargers" hs="" v="PIT" vnn="steelers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019101400" gsis="57991" d="Mon" t="8:15" q="P" k="" h="GB" hnn="packers" hs="" v="DET" vnn="lions" vs="" p="" rz="" ga="" gt="REG"/>
</gms>
</ss>`,
      `<ss>
<gms gd="0" w="7" y="2019" t="R">
<g eid="2019101700" gsis="57992" d="Thu" t="8:20" q="P" k="" h="DEN" hnn="broncos" hs="" v="KC" vnn="chiefs" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102001" gsis="57994" d="Sun" t="1:00" q="P" k="" h="BUF" hnn="bills" hs="" v="MIA" vnn="dolphins" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102002" gsis="57995" d="Sun" t="1:00" q="P" k="" h="CIN" hnn="bengals" hs="" v="JAX" vnn="jaguars" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102003" gsis="57996" d="Sun" t="1:00" q="P" k="" h="DET" hnn="lions" hs="" v="MIN" vnn="vikings" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102004" gsis="57997" d="Sun" t="1:00" q="P" k="" h="GB" hnn="packers" hs="" v="OAK" vnn="raiders" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102000" gsis="57993" d="Sun" t="1:00" q="P" k="" h="ATL" hnn="falcons" hs="" v="LA" vnn="rams" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102005" gsis="57998" d="Sun" t="1:00" q="P" k="" h="IND" hnn="colts" hs="" v="HOU" vnn="texans" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102006" gsis="57999" d="Sun" t="1:00" q="P" k="" h="NYG" hnn="giants" hs="" v="ARI" vnn="cardinals" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102007" gsis="58000" d="Sun" t="1:00" q="P" k="" h="WAS" hnn="redskins" hs="" v="SF" vnn="49ers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102008" gsis="58001" d="Sun" t="4:05" q="P" k="" h="TEN" hnn="titans" hs="" v="LAC" vnn="chargers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102009" gsis="58002" d="Sun" t="4:25" q="P" k="" h="CHI" hnn="bears" hs="" v="NO" vnn="saints" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102010" gsis="58003" d="Sun" t="4:25" q="P" k="" h="SEA" hnn="seahawks" hs="" v="BAL" vnn="ravens" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102011" gsis="58004" d="Sun" t="8:20" q="P" k="" h="DAL" hnn="cowboys" hs="" v="PHI" vnn="eagles" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102100" gsis="58005" d="Mon" t="8:15" q="P" k="" h="NYJ" hnn="jets" hs="" v="NE" vnn="patriots" vs="" p="" rz="" ga="" gt="REG"/>
</gms>
</ss>`,
      `<ss>
<gms gd="0" w="8" y="2019" t="R">
<g eid="2019102400" gsis="58006" d="Thu" t="8:20" q="P" k="" h="MIN" hnn="vikings" hs="" v="WAS" vnn="redskins" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102700" gsis="58007" d="Sun" t="1:00" q="P" k="" h="ATL" hnn="falcons" hs="" v="SEA" vnn="seahawks" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102701" gsis="58008" d="Sun" t="1:00" q="P" k="" h="BUF" hnn="bills" hs="" v="PHI" vnn="eagles" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102702" gsis="58009" d="Sun" t="1:00" q="P" k="" h="CHI" hnn="bears" hs="" v="LAC" vnn="chargers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102703" gsis="58010" d="Sun" t="1:00" q="P" k="" h="DET" hnn="lions" hs="" v="NYG" vnn="giants" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102704" gsis="58011" d="Sun" t="1:00" q="P" k="" h="HOU" hnn="texans" hs="" v="OAK" vnn="raiders" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102705" gsis="58012" d="Sun" t="1:00" q="P" k="" h="JAX" hnn="jaguars" hs="" v="NYJ" vnn="jets" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102706" gsis="58013" d="Sun" t="1:00" q="P" k="" h="LA" hnn="rams" hs="" v="CIN" vnn="bengals" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102707" gsis="58014" d="Sun" t="1:00" q="P" k="" h="NO" hnn="saints" hs="" v="ARI" vnn="cardinals" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102708" gsis="58015" d="Sun" t="1:00" q="P" k="" h="TEN" hnn="titans" hs="" v="TB" vnn="buccaneers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102709" gsis="58016" d="Sun" t="4:05" q="P" k="" h="SF" hnn="49ers" hs="" v="CAR" vnn="panthers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102710" gsis="58017" d="Sun" t="4:25" q="P" k="" h="IND" hnn="colts" hs="" v="DEN" vnn="broncos" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102711" gsis="58018" d="Sun" t="4:25" q="P" k="" h="NE" hnn="patriots" hs="" v="CLE" vnn="browns" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102712" gsis="58019" d="Sun" t="8:20" q="P" k="" h="KC" hnn="chiefs" hs="" v="GB" vnn="packers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019102800" gsis="58020" d="Mon" t="8:15" q="P" k="" h="PIT" hnn="steelers" hs="" v="MIA" vnn="dolphins" vs="" p="" rz="" ga="" gt="REG"/>
</gms>
</ss>`,
      `<ss>
<gms gd="0" w="9" y="2019" t="R">
<g eid="2019103100" gsis="58021" d="Thu" t="8:20" q="P" k="" h="ARI" hnn="cardinals" hs="" v="SF" vnn="49ers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019110300" gsis="58022" d="Sun" t="9:30" q="P" k="" h="JAX" hnn="jaguars" hs="" v="HOU" vnn="texans" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019110301" gsis="58023" d="Sun" t="1:00" q="P" k="" h="BUF" hnn="bills" hs="" v="WAS" vnn="redskins" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019110302" gsis="58024" d="Sun" t="1:00" q="P" k="" h="CAR" hnn="panthers" hs="" v="TEN" vnn="titans" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019110303" gsis="58025" d="Sun" t="1:00" q="P" k="" h="KC" hnn="chiefs" hs="" v="MIN" vnn="vikings" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019110304" gsis="58026" d="Sun" t="1:00" q="P" k="" h="MIA" hnn="dolphins" hs="" v="NYJ" vnn="jets" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019110305" gsis="58027" d="Sun" t="1:00" q="P" k="" h="PHI" hnn="eagles" hs="" v="CHI" vnn="bears" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019110306" gsis="58028" d="Sun" t="1:00" q="P" k="" h="PIT" hnn="steelers" hs="" v="IND" vnn="colts" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019110307" gsis="58029" d="Sun" t="4:05" q="P" k="" h="OAK" hnn="raiders" hs="" v="DET" vnn="lions" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019110308" gsis="58030" d="Sun" t="4:05" q="P" k="" h="SEA" hnn="seahawks" hs="" v="TB" vnn="buccaneers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019110309" gsis="58031" d="Sun" t="4:25" q="P" k="" h="DEN" hnn="broncos" hs="" v="CLE" vnn="browns" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019110310" gsis="58032" d="Sun" t="4:25" q="P" k="" h="LAC" hnn="chargers" hs="" v="GB" vnn="packers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019110311" gsis="58033" d="Sun" t="8:20" q="P" k="" h="BAL" hnn="ravens" hs="" v="NE" vnn="patriots" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019110400" gsis="58034" d="Mon" t="8:15" q="P" k="" h="NYG" hnn="giants" hs="" v="DAL" vnn="cowboys" vs="" p="" rz="" ga="" gt="REG"/>
</gms>
</ss>`,
      `<ss>
<gms gd="0" w="10" y="2019" t="R">
<g eid="2019110700" gsis="58035" d="Thu" t="8:20" q="P" k="" h="OAK" hnn="raiders" hs="" v="LAC" vnn="chargers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111001" gsis="58037" d="Sun" t="1:00" q="P" k="" h="CIN" hnn="bengals" hs="" v="BAL" vnn="ravens" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111002" gsis="58038" d="Sun" t="1:00" q="P" k="" h="CLE" hnn="browns" hs="" v="BUF" vnn="bills" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111003" gsis="58039" d="Sun" t="1:00" q="P" k="" h="GB" hnn="packers" hs="" v="CAR" vnn="panthers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111004" gsis="58040" d="Sun" t="1:00" q="P" k="" h="NO" hnn="saints" hs="" v="ATL" vnn="falcons" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111000" gsis="58036" d="Sun" t="1:00" q="P" k="" h="CHI" hnn="bears" hs="" v="DET" vnn="lions" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111005" gsis="58041" d="Sun" t="1:00" q="P" k="" h="NYJ" hnn="jets" hs="" v="NYG" vnn="giants" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111006" gsis="58042" d="Sun" t="1:00" q="P" k="" h="TB" hnn="buccaneers" hs="" v="ARI" vnn="cardinals" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111007" gsis="58043" d="Sun" t="1:00" q="P" k="" h="TEN" hnn="titans" hs="" v="KC" vnn="chiefs" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111008" gsis="58044" d="Sun" t="4:05" q="P" k="" h="IND" hnn="colts" hs="" v="MIA" vnn="dolphins" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111009" gsis="58045" d="Sun" t="4:25" q="P" k="" h="PIT" hnn="steelers" hs="" v="LA" vnn="rams" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111010" gsis="58046" d="Sun" t="8:20" q="P" k="" h="DAL" hnn="cowboys" hs="" v="MIN" vnn="vikings" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111100" gsis="58047" d="Mon" t="8:15" q="P" k="" h="SF" hnn="49ers" hs="" v="SEA" vnn="seahawks" vs="" p="" rz="" ga="" gt="REG"/>
</gms>
</ss>`,
      `<ss>
<gms gd="0" w="11" y="2019" t="R">
<g eid="2019111400" gsis="58048" d="Thu" t="8:20" q="P" k="" h="CLE" hnn="browns" hs="" v="PIT" vnn="steelers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111701" gsis="58050" d="Sun" t="1:00" q="P" k="" h="CAR" hnn="panthers" hs="" v="ATL" vnn="falcons" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111702" gsis="58051" d="Sun" t="1:00" q="P" k="" h="DET" hnn="lions" hs="" v="DAL" vnn="cowboys" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111703" gsis="58052" d="Sun" t="1:00" q="P" k="" h="IND" hnn="colts" hs="" v="JAX" vnn="jaguars" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111704" gsis="58053" d="Sun" t="1:00" q="P" k="" h="MIA" hnn="dolphins" hs="" v="BUF" vnn="bills" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111700" gsis="58049" d="Sun" t="1:00" q="P" k="" h="BAL" hnn="ravens" hs="" v="HOU" vnn="texans" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111705" gsis="58054" d="Sun" t="1:00" q="P" k="" h="MIN" hnn="vikings" hs="" v="DEN" vnn="broncos" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111706" gsis="58055" d="Sun" t="1:00" q="P" k="" h="TB" hnn="buccaneers" hs="" v="NO" vnn="saints" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111707" gsis="58056" d="Sun" t="1:00" q="P" k="" h="WAS" hnn="redskins" hs="" v="NYJ" vnn="jets" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111708" gsis="58057" d="Sun" t="4:05" q="P" k="" h="SF" hnn="49ers" hs="" v="ARI" vnn="cardinals" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111709" gsis="58058" d="Sun" t="4:25" q="P" k="" h="OAK" hnn="raiders" hs="" v="CIN" vnn="bengals" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111710" gsis="58059" d="Sun" t="4:25" q="P" k="" h="PHI" hnn="eagles" hs="" v="NE" vnn="patriots" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111711" gsis="58060" d="Sun" t="8:20" q="P" k="" h="LA" hnn="rams" hs="" v="CHI" vnn="bears" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019111800" gsis="58061" d="Mon" t="8:15" q="P" k="" h="LAC" hnn="chargers" hs="" v="KC" vnn="chiefs" vs="" p="" rz="" ga="" gt="REG"/>
</gms>
</ss>`,
      `<ss>
<gms gd="0" w="12" y="2019" t="R">
<g eid="2019112100" gsis="58062" d="Thu" t="8:20" q="P" k="" h="HOU" hnn="texans" hs="" v="IND" vnn="colts" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019112401" gsis="58064" d="Sun" t="1:00" q="P" k="" h="BUF" hnn="bills" hs="" v="DEN" vnn="broncos" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019112402" gsis="58065" d="Sun" t="1:00" q="P" k="" h="CHI" hnn="bears" hs="" v="NYG" vnn="giants" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019112403" gsis="58066" d="Sun" t="1:00" q="P" k="" h="CIN" hnn="bengals" hs="" v="PIT" vnn="steelers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019112404" gsis="58067" d="Sun" t="1:00" q="P" k="" h="CLE" hnn="browns" hs="" v="MIA" vnn="dolphins" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019112400" gsis="58063" d="Sun" t="1:00" q="P" k="" h="ATL" hnn="falcons" hs="" v="TB" vnn="buccaneers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019112405" gsis="58068" d="Sun" t="1:00" q="P" k="" h="NO" hnn="saints" hs="" v="CAR" vnn="panthers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019112406" gsis="58069" d="Sun" t="1:00" q="P" k="" h="NYJ" hnn="jets" hs="" v="OAK" vnn="raiders" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019112407" gsis="58070" d="Sun" t="1:00" q="P" k="" h="WAS" hnn="redskins" hs="" v="DET" vnn="lions" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019112408" gsis="58071" d="Sun" t="4:05" q="P" k="" h="TEN" hnn="titans" hs="" v="JAX" vnn="jaguars" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019112409" gsis="58072" d="Sun" t="4:25" q="P" k="" h="NE" hnn="patriots" hs="" v="DAL" vnn="cowboys" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019112410" gsis="58073" d="Sun" t="4:25" q="P" k="" h="SF" hnn="49ers" hs="" v="GB" vnn="packers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019112411" gsis="58074" d="Sun" t="8:20" q="P" k="" h="PHI" hnn="eagles" hs="" v="SEA" vnn="seahawks" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019112500" gsis="58075" d="Mon" t="8:15" q="P" k="" h="LA" hnn="rams" hs="" v="BAL" vnn="ravens" vs="" p="" rz="" ga="" gt="REG"/>
</gms>
</ss>`,
      `<ss>
<gms gd="0" w="13" y="2019" t="R">
<g eid="2019112800" gsis="58076" d="Thu" t="12:30" q="P" k="" h="DET" hnn="lions" hs="" v="CHI" vnn="bears" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019112801" gsis="58077" d="Thu" t="4:30" q="P" k="" h="DAL" hnn="cowboys" hs="" v="BUF" vnn="bills" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019112802" gsis="58078" d="Thu" t="8:20" q="P" k="" h="ATL" hnn="falcons" hs="" v="NO" vnn="saints" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120103" gsis="58082" d="Sun" t="1:00" q="P" k="" h="IND" hnn="colts" hs="" v="TEN" vnn="titans" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120102" gsis="58081" d="Sun" t="1:00" q="P" k="" h="CIN" hnn="bengals" hs="" v="NYJ" vnn="jets" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120101" gsis="58080" d="Sun" t="1:00" q="P" k="" h="CAR" hnn="panthers" hs="" v="WAS" vnn="redskins" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120100" gsis="58079" d="Sun" t="1:00" q="P" k="" h="BAL" hnn="ravens" hs="" v="SF" vnn="49ers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120104" gsis="58083" d="Sun" t="1:00" q="P" k="" h="JAX" hnn="jaguars" hs="" v="TB" vnn="buccaneers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120105" gsis="58084" d="Sun" t="1:00" q="P" k="" h="KC" hnn="chiefs" hs="" v="OAK" vnn="raiders" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120106" gsis="58085" d="Sun" t="1:00" q="P" k="" h="MIA" hnn="dolphins" hs="" v="PHI" vnn="eagles" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120107" gsis="58086" d="Sun" t="1:00" q="P" k="" h="NYG" hnn="giants" hs="" v="GB" vnn="packers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120108" gsis="58087" d="Sun" t="4:05" q="P" k="" h="ARI" hnn="cardinals" hs="" v="LA" vnn="rams" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120109" gsis="58088" d="Sun" t="4:25" q="P" k="" h="DEN" hnn="broncos" hs="" v="LAC" vnn="chargers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120110" gsis="58089" d="Sun" t="4:25" q="P" k="" h="PIT" hnn="steelers" hs="" v="CLE" vnn="browns" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120111" gsis="58090" d="Sun" t="8:20" q="P" k="" h="HOU" hnn="texans" hs="" v="NE" vnn="patriots" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120200" gsis="58091" d="Mon" t="8:15" q="P" k="" h="SEA" hnn="seahawks" hs="" v="MIN" vnn="vikings" vs="" p="" rz="" ga="" gt="REG"/>
</gms>
</ss>`,
      `<ss>
<gms gd="0" w="14" y="2019" t="R">
<g eid="2019120500" gsis="58092" d="Thu" t="8:20" q="P" k="" h="CHI" hnn="bears" hs="" v="DAL" vnn="cowboys" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120800" gsis="58093" d="Sun" t="1:00" q="P" k="" h="ATL" hnn="falcons" hs="" v="CAR" vnn="panthers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120801" gsis="58094" d="Sun" t="1:00" q="P" k="" h="BUF" hnn="bills" hs="" v="BAL" vnn="ravens" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120802" gsis="58095" d="Sun" t="1:00" q="P" k="" h="CLE" hnn="browns" hs="" v="CIN" vnn="bengals" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120803" gsis="58096" d="Sun" t="1:00" q="P" k="" h="GB" hnn="packers" hs="" v="WAS" vnn="redskins" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120804" gsis="58097" d="Sun" t="1:00" q="P" k="" h="HOU" hnn="texans" hs="" v="DEN" vnn="broncos" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120805" gsis="58098" d="Sun" t="1:00" q="P" k="" h="MIN" hnn="vikings" hs="" v="DET" vnn="lions" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120806" gsis="58099" d="Sun" t="1:00" q="P" k="" h="NO" hnn="saints" hs="" v="SF" vnn="49ers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120807" gsis="58100" d="Sun" t="1:00" q="P" k="" h="NYJ" hnn="jets" hs="" v="MIA" vnn="dolphins" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120808" gsis="58101" d="Sun" t="1:00" q="P" k="" h="TB" hnn="buccaneers" hs="" v="IND" vnn="colts" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120809" gsis="58102" d="Sun" t="4:05" q="P" k="" h="JAX" hnn="jaguars" hs="" v="LAC" vnn="chargers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120810" gsis="58103" d="Sun" t="4:25" q="P" k="" h="ARI" hnn="cardinals" hs="" v="PIT" vnn="steelers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120811" gsis="58104" d="Sun" t="4:25" q="P" k="" h="NE" hnn="patriots" hs="" v="KC" vnn="chiefs" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120812" gsis="58105" d="Sun" t="4:25" q="P" k="" h="OAK" hnn="raiders" hs="" v="TEN" vnn="titans" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120813" gsis="58106" d="Sun" t="8:20" q="P" k="" h="LA" hnn="rams" hs="" v="SEA" vnn="seahawks" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019120900" gsis="58107" d="Mon" t="8:15" q="P" k="" h="PHI" hnn="eagles" hs="" v="NYG" vnn="giants" vs="" p="" rz="" ga="" gt="REG"/>
</gms>
</ss>`,
      `<ss>
<gms gd="0" w="15" y="2019" t="R">
<g eid="2019121200" gsis="58108" d="Thu" t="8:20" q="P" k="" h="BAL" hnn="ravens" hs="" v="NYJ" vnn="jets" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019121500" gsis="58109" d="Sun" t="1:00" q="P" k="" h="CAR" hnn="panthers" hs="" v="SEA" vnn="seahawks" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019121501" gsis="58110" d="Sun" t="1:00" q="P" k="" h="CIN" hnn="bengals" hs="" v="NE" vnn="patriots" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019121502" gsis="58111" d="Sun" t="1:00" q="P" k="" h="DET" hnn="lions" hs="" v="TB" vnn="buccaneers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019121503" gsis="58112" d="Sun" t="1:00" q="P" k="" h="GB" hnn="packers" hs="" v="CHI" vnn="bears" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019121504" gsis="58113" d="Sun" t="1:00" q="P" k="" h="KC" hnn="chiefs" hs="" v="DEN" vnn="broncos" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019121505" gsis="58114" d="Sun" t="1:00" q="P" k="" h="NYG" hnn="giants" hs="" v="MIA" vnn="dolphins" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019121506" gsis="58115" d="Sun" t="1:00" q="P" k="" h="PIT" hnn="steelers" hs="" v="BUF" vnn="bills" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019121507" gsis="58116" d="Sun" t="1:00" q="P" k="" h="TEN" hnn="titans" hs="" v="HOU" vnn="texans" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019121508" gsis="58117" d="Sun" t="1:00" q="P" k="" h="WAS" hnn="redskins" hs="" v="PHI" vnn="eagles" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019121509" gsis="58118" d="Sun" t="4:05" q="P" k="" h="ARI" hnn="cardinals" hs="" v="CLE" vnn="browns" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019121510" gsis="58119" d="Sun" t="4:05" q="P" k="" h="OAK" hnn="raiders" hs="" v="JAX" vnn="jaguars" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019121511" gsis="58120" d="Sun" t="4:25" q="P" k="" h="DAL" hnn="cowboys" hs="" v="LA" vnn="rams" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019121512" gsis="58121" d="Sun" t="4:25" q="P" k="" h="SF" hnn="49ers" hs="" v="ATL" vnn="falcons" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019121513" gsis="58122" d="Sun" t="8:20" q="P" k="" h="LAC" hnn="chargers" hs="" v="MIN" vnn="vikings" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019121600" gsis="58123" d="Mon" t="8:15" q="P" k="" h="NO" hnn="saints" hs="" v="IND" vnn="colts" vs="" p="" rz="" ga="" gt="REG"/>
</gms>
</ss>`,
      `<ss>
<gms gd="0" w="16" y="2019" t="R">
<g eid="2019122200" gsis="58124" d="Sun" t="1:00" q="P" k="" h="DEN" hnn="broncos" hs="" v="DET" vnn="lions" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122201" gsis="58125" d="Sun" t="1:00" q="P" k="" h="LAC" hnn="chargers" hs="" v="OAK" vnn="raiders" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122202" gsis="58126" d="Sun" t="1:00" q="P" k="" h="NE" hnn="patriots" hs="" v="BUF" vnn="bills" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122203" gsis="58127" d="Sun" t="1:00" q="P" k="" h="SF" hnn="49ers" hs="" v="LA" vnn="rams" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122204" gsis="58128" d="Sun" t="1:00" q="P" k="" h="TB" hnn="buccaneers" hs="" v="HOU" vnn="texans" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122205" gsis="58129" d="Sun" t="1:00" q="P" k="" h="ATL" hnn="falcons" hs="" v="JAX" vnn="jaguars" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122206" gsis="58130" d="Sun" t="1:00" q="P" k="" h="CLE" hnn="browns" hs="" v="BAL" vnn="ravens" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122207" gsis="58131" d="Sun" t="1:00" q="P" k="" h="IND" hnn="colts" hs="" v="CAR" vnn="panthers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122208" gsis="58132" d="Sun" t="1:00" q="P" k="" h="MIA" hnn="dolphins" hs="" v="CIN" vnn="bengals" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122209" gsis="58133" d="Sun" t="1:00" q="P" k="" h="NYJ" hnn="jets" hs="" v="PIT" vnn="steelers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122210" gsis="58134" d="Sun" t="1:00" q="P" k="" h="TEN" hnn="titans" hs="" v="NO" vnn="saints" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122211" gsis="58135" d="Sun" t="1:00" q="P" k="" h="WAS" hnn="redskins" hs="" v="NYG" vnn="giants" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122212" gsis="58136" d="Sun" t="4:25" q="P" k="" h="PHI" hnn="eagles" hs="" v="DAL" vnn="cowboys" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122213" gsis="58137" d="Sun" t="4:25" q="P" k="" h="SEA" hnn="seahawks" hs="" v="ARI" vnn="cardinals" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122214" gsis="58138" d="Sun" t="8:20" q="P" k="" h="CHI" hnn="bears" hs="" v="KC" vnn="chiefs" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122300" gsis="58139" d="Mon" t="8:15" q="P" k="" h="MIN" hnn="vikings" hs="" v="GB" vnn="packers" vs="" p="" rz="" ga="" gt="REG"/>
</gms>
</ss>`,
      `<ss>
<gms gd="0" w="17" y="2019" t="R">
<g eid="2019122900" gsis="58140" d="Sun" t="1:00" q="P" k="" h="BAL" hnn="ravens" hs="" v="PIT" vnn="steelers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122902" gsis="58142" d="Sun" t="1:00" q="P" k="" h="CAR" hnn="panthers" hs="" v="NO" vnn="saints" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122903" gsis="58143" d="Sun" t="1:00" q="P" k="" h="CIN" hnn="bengals" hs="" v="CLE" vnn="browns" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122904" gsis="58144" d="Sun" t="1:00" q="P" k="" h="DAL" hnn="cowboys" hs="" v="WAS" vnn="redskins" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122905" gsis="58145" d="Sun" t="1:00" q="P" k="" h="DET" hnn="lions" hs="" v="GB" vnn="packers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122906" gsis="58146" d="Sun" t="1:00" q="P" k="" h="HOU" hnn="texans" hs="" v="TEN" vnn="titans" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122907" gsis="58147" d="Sun" t="1:00" q="P" k="" h="JAX" hnn="jaguars" hs="" v="IND" vnn="colts" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122908" gsis="58148" d="Sun" t="1:00" q="P" k="" h="KC" hnn="chiefs" hs="" v="LAC" vnn="chargers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122909" gsis="58149" d="Sun" t="1:00" q="P" k="" h="MIN" hnn="vikings" hs="" v="CHI" vnn="bears" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122910" gsis="58150" d="Sun" t="1:00" q="P" k="" h="NE" hnn="patriots" hs="" v="MIA" vnn="dolphins" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122911" gsis="58151" d="Sun" t="1:00" q="P" k="" h="NYG" hnn="giants" hs="" v="PHI" vnn="eagles" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122912" gsis="58152" d="Sun" t="1:00" q="P" k="" h="TB" hnn="buccaneers" hs="" v="ATL" vnn="falcons" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122901" gsis="58141" d="Sun" t="1:00" q="P" k="" h="BUF" hnn="bills" hs="" v="NYJ" vnn="jets" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122915" gsis="58155" d="Sun" t="4:25" q="P" k="" h="SEA" hnn="seahawks" hs="" v="SF" vnn="49ers" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122913" gsis="58153" d="Sun" t="4:25" q="P" k="" h="DEN" hnn="broncos" hs="" v="OAK" vnn="raiders" vs="" p="" rz="" ga="" gt="REG"/>
<g eid="2019122914" gsis="58154" d="Sun" t="4:25" q="P" k="" h="LA" hnn="rams" hs="" v="ARI" vnn="cardinals" vs="" p="" rz="" ga="" gt="REG"/>
</gms>
</ss>`
    ].map(v => `<?xml version="1.0" encoding="UTF-8"?>${v}`);
    return of(weeks[week]);
  }
}
