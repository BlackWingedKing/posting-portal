import { Component, OnInit, ViewChild } from '@angular/core';
import { IDataModel } from 'src/app/interfaces/data-model';
import { GetPostsService } from 'src/app/services/get-posts.service';
import { AddPostsComponent } from '../add-posts/add-posts.component';

@Component({
  selector: 'app-display-posts',
  templateUrl: './display-posts.component.html',
  styleUrls: ['./display-posts.component.scss']
})
export class DisplayPostsComponent implements OnInit {

  public dataList: IDataModel[];
  public update: boolean = false;
  public updateId: number;

  @ViewChild(AddPostsComponent, { static: false })
  private addPosts: AddPostsComponent;

  constructor(public getPosts: GetPostsService) {
  }
  ngOnInit(): void {
    this.getPosts.getData().subscribe(data => { this.dataList = data });
  }
  updateData(updateObject) {
    /**
     * This function updates the specific post and gets out of update mode 
     */
    let data = updateObject.data;
    let id = updateObject.id;
    this.dataList[id] = data;
    this.update = false;
  }
  addData(data: IDataModel) {
    /**
     * This function adds new data to the list and 
     * called once add post is pressed
     */
    this.dataList.unshift(data);
  }
  deleteData(id: number) {
    /**
     * This function deletes the data at the fixed id
     */
    this.dataList.splice(id, 1);
  }
  showUpdateForm(id: number) {
    this.update = true;    
    this.updateId = id;
    let currentValue: IDataModel = this.dataList[id];
    this.addPosts.postForm.setValue({"title": currentValue.title, "body": currentValue.body});
  }
}
