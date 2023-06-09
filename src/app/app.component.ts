import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'base64toVideo';
  form:FormGroup;
  convertor:boolean = false;
  media:boolean = false;
  videoURL:any;
  file:any;
  @ViewChild('videoEl') videoEl:ElementRef;
  constructor(private _fb:FormBuilder,private dom:DomSanitizer){

  }

  ngOnInit(): void {
    console.log("Hello from app component");
    
      this.form = this._fb.group({
        input : new FormControl('',Validators.required)
      })
      this.form.valueChanges.subscribe((val:any)=>{
        // console.log(val);
        if(val.input.length>0){
          this.convertor = true
        }
        else{
          this.convertor = false;
          this.media = false;
          this.videoURL = undefined;
        }
        
      })
  }

  async convert(){
    this.media = true;
    let value = this.form.get('input').value;
    let f = await fetch(value);
    let blob = await f.blob();
    const blobUrl = URL.createObjectURL(blob);
    this.videoURL = this.dom.bypassSecurityTrustUrl(blobUrl)
  }

  
}
