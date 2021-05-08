import { Component, OnInit } from '@angular/core';
import { UploadsService } from '@Services/uploads.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-uploads',
  templateUrl: './uploads.component.html',
  styleUrls: ['./uploads.component.css'],
})
export class UploadsComponent implements OnInit {
  uploadFile: Array<File>;
  formData = new FormData();
  fileData$: Observable<string[]>;
  mostrarDatos: any;
  constructor(public uploadServices: UploadsService) {}

  ngOnInit(): void {
    this.getDataFileLoad();
  }
  onUpload() {
    //PARA SUBIR MAS ARCHIVOS A LA VEZ
    for (let i = 0; i < this.uploadFile.length; i++) {
      this.formData.append(
        'Uploads[]',
        this.uploadFile[i],
        this.uploadFile[i].name
      );
    }
    //LLAMAR A NUESTRO SERVICE
    this.uploadServices.uploadFiles(this.formData).subscribe(
      (res) => {
        console.log('Response:', res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  //TRAIGO LA DATA DEL OBSERVABLE
  getDataFileLoad() {
    this.fileData$ = this.uploadServices.getDataFile$();
    this.fileData$.subscribe((file) => (this.mostrarDatos = file));
  }
  //EVENTO PARA OBTENER EL UPLOADFILE
  onFileChange(e) {
    this.uploadFile = e.target.files;
    this.uploadServices.setDataFile$(this.uploadFile[0].name);
  }
}
