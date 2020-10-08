import { Component } from '@angular/core';
import { Photo } from '../models/photo.interface';

import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public photos : Photo[] = [];

  constructor(public photoSvc: PhotoService) {}

  async ngOnInit() {
    await this.photoSvc.loadSaved().then (() => {
      this.photos = this.photoSvc.getPhotos();
    });
  }

  newPhoto(): void{
    this.photoSvc.addNewToGallery();
  }

}
