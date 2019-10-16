import {Component} from '@angular/core';

const DATA = [{
    name: "tets-10",
    type: "folder",
    children: {
      "graphical-report-configuration.tgc": {
        name: "graphical-report-configuration.tgc",
        type: "file",
        metadata: {
          mtime: "2019-08-28T18:28:10.000Z",
          size: 791
        }
      }
    },
    iconOverride: "tgc",
    metadata: {
      mtime: "2019-08-28T18:28:10.000Z",
      size: 791
    }
  },{
    name: "tets-11",
    type: "folder",
    children: {
      "graphical-report-configuration-1.tgc": {
        name: "graphical-report-configuration.tgc",
        type: "file",
        metadata: {
          mtime: "2019-08-29T18:28:10.000Z",
          size: 791
        }
      }
    },
    iconOverride: "tgc",
    metadata: {
      mtime: "2019-08-29T18:28:10.000Z",
      size: 791
    }
  }];

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'card-fancy-example',
  templateUrl: 'card-fancy-example.html',
  styleUrls: ['card-fancy-example.css'],
})
export class CardFancyExample {
  public data = [];

  constructor() {
    this.data = 
      DATA.map(o => 
        Object
          .keys(o.children)
          .map(key =>  o.children[key])[0] )
  }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */