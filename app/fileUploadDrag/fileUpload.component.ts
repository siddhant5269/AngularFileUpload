import{ Component, OnInit } from '@angular/core'
import {FileUploadService } from './fileUpload.service'
import { FileUploader } from 'ng2-file-upload';

@Component({
    templateUrl: "app/fileUploadDrag/fileUpload.component.html",
styles : [`.file-over { border: dotted 3px red; }

.upload-drop-zone {
  height: 200px;
  border-width: 2px;
  margin-bottom: 20px;
}
.upload-drop-zone {
  color: #ccc;
  border-style: dashed;
  border-color: #ccc;
  line-height: 200px;
  text-align: center
}
.upload-drop-zone.drop {
  color: #222;
  border-color: #222;
}`]
})
export class FileUploadComponent implements OnInit {

    public uploader:FileUploader = new FileUploader({url:'http://localhost:3001/upload'});

    constructor(private fileUploadService: FileUploadService){

    }
    ngOnInit(): void {
            
    }


}