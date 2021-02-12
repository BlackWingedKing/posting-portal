import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { GetPostsService } from 'src/app/services/get-posts.service';
import { IDataModel} from '../../interfaces/data-model';

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.scss']
})
export class AddPostsComponent implements OnInit {

  public postForm  = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required])
  });
  @Output()
  sendEvent = new EventEmitter();

  @Output()
  updateEvent = new EventEmitter();

  @Input()
  public inUpdateMode: boolean = false;

  @Input()
  public updateID: number;

  constructor(private getPosts: GetPostsService) { }

  ngOnInit(): void {
  }

  formClick(update: boolean){
    /**
     * Now in this function we need to add the current form data to our service list
     */
    // this.getPosts.addData((<IDataModel>this.postForm.value));
    if(update){
      this.updateEvent.emit({data: (<IDataModel>this.postForm.value), id: this.updateID});
    }
    else{
      this.sendEvent.emit((<IDataModel>this.postForm.value));
    }
    this.postForm.reset();
  }
}
