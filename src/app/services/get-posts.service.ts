import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { IDataModel} from '../interfaces/data-model';

@Injectable({
  providedIn: 'root'
})
export class GetPostsService {

  private apiURL: string = "https://jsonplaceholder.typicode.com/posts";
  // public dataList: IDataModel[];
  constructor(private http: HttpClient) { 
    /**
     * We get the data from the url and store it in ab array
     */
    // this.http.get<IDataModel[]>(this.apiURL)
    // .subscribe( data => this.dataList = data);
  }
  getData(){
    // return this.dataList;
    return this.http.get<IDataModel[]>(this.apiURL);
  }
  // addData(newPost: IDataModel){
  //   this.dataList.unshift(newPost);
  // }
}
