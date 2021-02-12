import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, title: string): string{
    /**
     * An updated method which counts the characters and sets the limit accordingly
     */
    let threshold = 100;
    let titleLength = title.length;
    let reqLength = threshold - titleLength;

    let wordCollection = value.split(" ");
    let shortCollection = wordCollection.slice(0, 3);
    shortCollection.push("...");
    return shortCollection.join(" ");
    // if(reqLength > 0){
    //   return value.slice(0, reqLength);
    // }
    // else{
    //   return value.slice(0, 1);
    // }
  }

}
