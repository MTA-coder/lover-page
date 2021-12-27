import { Component, OnInit } from '@angular/core';
// declare var $:JQueryStatic;
import * as $ from 'jquery';

@Component({
  selector: 'app-r',
  templateUrl: './r.component.html',
  styleUrls: ['./r.component.scss']
})
export class RComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    this.code();
  }

  code(){
    (function() {
      var animate:any, container:any, message:any, paragraph:any, MESSAGES:any, animatebyId:any, initialise, scramble:any;

      MESSAGES = [];

      MESSAGES.push({
        delay: 0,
        text: "Sending a message...Typing... Online"
      });

      MESSAGES.push({
        delay: 1200,
        text: "you don't know how much I love you ❤️"
      });

      MESSAGES.push({
        delay: 2200,
        text: "I am because of you. You are every reason, every hope, and every dream I’ve ever had 💙"
      });

      MESSAGES.push({
        delay: 3600,
        text: "I love you and that’s the beginning and end of everything 💚"
      });

      MESSAGES.push({
        delay: 5200,
        text: "I hope you can forgive me , I really really love you and I will never let you down"
      });

      MESSAGES.push({
        delay: 5200+1600,
        text: "you are the best thing I in my life"
      });

      MESSAGES.push({
        delay: 5200+1600+1600,
        text: "two better than one 💙💚"
      });

      MESSAGES.push({
        delay: 5200+1600+1600+1600,
        text: "your lover T💙"
      });

      container = $("#container");

      message = $("#message");

      animatebyId = $("#animate");

      paragraph = null;

      scramble = function(element:any, text:any, options:any) {
        var element_var:any, addGlitch, character, defaults, ghostCharacter, ghostCharacters, ghostLength, ghostText, ghosts, glitchCharacter, glitchCharacters, glitchIndex, glitchLength, glitchProbability, glitchText, glitches, i, letter, object:any, order:any, output:any, parameters, settings, shuffle, target, textCharacters:any, textLength:any, wrap, _i, _j, _results;
        defaults = {
          probability: 0.2,
          glitches: '-|/\\',
          blank: '',
          duration: text.length * 40,
          ease: 'easeInOutQuad',
          delay: 0.0
        };
        element_var = $(element);
        settings = $.extend(defaults, options);
        shuffle = function() {
          if (Math.random() < 0.5) {
            return 1;
          } else {
            return -1;
          }
        };
        wrap = function(text:any, classes:any) {
          return "<span class=\"" + classes + "\">" + text + "</span>";
        };
        glitchText = settings.glitches;
        glitchCharacters = glitchText.split('');
        glitchLength = glitchCharacters.length;
        glitchProbability = settings.probability;
        glitches = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = glitchCharacters.length; _i < _len; _i++) {
            letter = glitchCharacters[_i];
            _results.push(wrap(letter, 'glitch'));
          }
          return _results;
        })();
        ghostText = element_var.text();
        ghostCharacters = ghostText.split('');
        ghostLength = ghostCharacters.length;
        ghosts = (function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = ghostCharacters.length; _i < _len; _i++) {
            letter = ghostCharacters[_i];
            _results.push(wrap(letter, 'ghost'));
          }
          return _results;
        })();
        textCharacters = text.split('');
        textLength = textCharacters.length;
        _results = [];
        for (var _i2 = 0; 0 <= textLength ? _i2 < textLength : _i2 > textLength; 0 <= textLength ? _i2++ : _i2--){ _results.push(_i2); }
        order = _results;
        order.sort(shuffle);
        output = [];
        for (i = _j = 0; 0 <= textLength ? _j < textLength : _j > textLength; i = 0 <= textLength ? ++_j : --_j) {
          glitchIndex = Math.floor(Math.random() * (glitchLength - 1));
          glitchCharacter = glitches[glitchIndex];
          ghostCharacter = ghosts[i] || settings.blank;
          addGlitch = Math.random() < glitchProbability;
          character = addGlitch ? glitchCharacter : ghostCharacter;
          output.push(character);
        }
        object = {
          value: 0
        };
        target = {
          value: 1
        };
        parameters = {
          duration: settings.duration,
          ease: settings.ease,
          step: function() {
            var index, progress, _k;
            progress = Math.floor(object.value * (textLength - 1));
            for (i = _k = 0; 0 <= progress ? _k <= progress : _k >= progress; i = 0 <= progress ? ++_k : --_k) {
              index = order[i];
              output[index] = textCharacters[index];
            }
            return element_var.html(output.join(''));
          },
          complete: function() {
            return element_var.html(text);
          }
        };
        return $(object).delay(settings.delay).animate(target, parameters);
      };

      animate = function() {
        var data, element, index, options, _i, _len;
        for (index = _i = 0, _len = MESSAGES.length; _i < _len; index = ++_i) {
          data = MESSAGES[index];
          element = paragraph.get(index);
          element.innerText = '';
          options = {
            delay: data.delay
          };
          scramble(element, data.text, options);
        }
      };

      initialise = function() {
        var index, text, _i, _len;
        animatebyId.click(animate);
        for (index = _i = 0, _len = MESSAGES.length; _i < _len; index = ++_i) {
          text = MESSAGES[index];
          message.append("<p>");
        }
        paragraph = container.find("p");
        animate();
      };

      initialise();

    }).call(this);
  }

}
