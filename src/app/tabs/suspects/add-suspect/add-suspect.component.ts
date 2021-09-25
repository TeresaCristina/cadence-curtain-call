import { Component, OnInit } from '@angular/core';
import { DataService } from 'services/data/data.service';
import { ImageUploadService } from 'services/image-upload.service';

@Component({
  selector: 'app-add-suspect',
  templateUrl: './add-suspect.component.html',
  styleUrls: ['./add-suspect.component.css']
})



export class AddSuspectComponent implements OnInit {

  newSuspect: any = { "name": "", "title": "", "picture": "", "details": "" }

  name: String;
  title: String;
  details: String;

  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file

  constructor(private data: DataService, private upload: ImageUploadService) { }

  ngOnInit(): void { }

  addSuspect() {
    this.newSuspect["details"] = this.details;
    this.newSuspect["name"] = this.name;
    this.newSuspect["title"] = this.title;
    this.data.newSuspect(this.newSuspect);
  }
  
    // On file Select
    onChange(event) {
        this.file = event.target.files[0];
    }
  
    // OnClick of button Upload
    onUpload() {
        this.loading = !this.loading;
        console.log(this.file);
        this.upload.upload(this.file).subscribe(
            (event: any) => {
                if (typeof (event) === 'object') {
                    this.shortLink = event.link;
                    this.loading = false; // Flag variable 
                }
            }
        );
    }
}
