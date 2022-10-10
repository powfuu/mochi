import { Component, HostListener } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mochi-realestate';
  topri: string; 
smoothScroll = () => {
  document.body.scrollTop = 0;
}
  ngOnInit(){
    document.body.addEventListener('scroll',(e: any)=>{
      let y = document.body.scrollTop;
      if(y <= 49){
        this.topri = "-200px";
      }else if(y >= 50){
        this.topri = "50px";
      }
    })
}
}
