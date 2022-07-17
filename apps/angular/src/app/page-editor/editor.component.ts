import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  id: number | undefined;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      console.log(' id = ',this.id);
      // In a real app: dispatch action to load the details here.
    });



  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
