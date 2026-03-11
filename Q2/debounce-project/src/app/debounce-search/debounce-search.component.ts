import { Component } from '@angular/core';

@Component({
  selector: 'app-debounce-search',
  templateUrl: './debounce-search.component.html',
  styleUrls: ['./debounce-search.component.css']
})
export class DebounceSearchComponent {

  timer: any;
  result: string = '';

  onKeyUp(event: any){

    const value = event.target.value;
    clearTimeout(this.timer);

    this.timer = setTimeout(() => {

      if(value.trim() === ''){
        this.result = '';
        return;
      }

      this.result = "Searching for: " + value;
      console.log("Function executed with:", value);

    }, 1000);

  }

}