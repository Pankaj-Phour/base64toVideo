import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor(private _fb:FormBuilder){

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
        }
        
      })
  }

  convert(){
    this.media = true;
  }

  
}
