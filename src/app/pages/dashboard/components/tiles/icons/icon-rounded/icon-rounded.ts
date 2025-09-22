import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'icon-rounded',
  templateUrl: './icon-rounded.html'
})
export class IconRounded {

  readonly color = input.required<string>();
  readonly pi = input.required<string>();

}
