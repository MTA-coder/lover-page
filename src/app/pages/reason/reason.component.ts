import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.scss']
})
export class ReasonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.code();
  }

  code(){
    // function([string1, string2],target id,[color1,color2])
 consoleText(["I am so Sorry","please forgive me",'I Love You', 'I Need You',"I Miss you","Please come back", 'بحبك من قلب قلبي ','حبيبتي اشتقتلك'], 'text',["yellow","pink","purple",'blue','tomato','rebeccapurple','lightblue','brown']);

 function consoleText(words:any, id:any, colors:any) {
   if (colors === undefined) colors = ['#fff'];
   var visible = true;
   var con:any = document.getElementById('console');
   var letterCount = 1;
   var x = 1;
   var waiting = false;
   var target:any = document.getElementById(id)
   target.setAttribute('style', 'color:' + colors[0])
   window.setInterval(function() {

     if (letterCount === 0 && waiting === false) {
       waiting = true;
       target.innerHTML = words[0].substring(0, letterCount)
       window.setTimeout(function() {
         var usedColor = colors.shift();
         colors.push(usedColor);
         var usedWord = words.shift();
         words.push(usedWord);
         x = 1;
         target.setAttribute('style', 'color:' + colors[0])
         letterCount += x;
         waiting = false;
       }, 1000)
     } else if (letterCount === words[0].length + 1 && waiting === false) {
       waiting = true;
       window.setTimeout(function() {
         x = -1;
         letterCount += x;
         waiting = false;
       }, 1000)
     } else if (waiting === false) {
       target.innerHTML = words[0].substring(0, letterCount)
       letterCount += x;
     }
   }, 120)
   window.setInterval(function() {
     if (visible === true) {
       con.className = 'console-underscore hidden'
       visible = false;

     } else {
       con.className = 'console-underscore'

       visible = true;
     }
   }, 400)
 }
  }

}
