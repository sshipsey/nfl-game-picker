import { Injectable } from '@angular/core';
import { parseString } from 'xml2js';

@Injectable()
export class XmlService {
  parseXmlString = <T>(xml: string): Promise<T> =>
    new Promise((resolve, reject) => {
      parseString(xml, (err, result) => (err ? reject(err) : resolve(result)));
    });
}
