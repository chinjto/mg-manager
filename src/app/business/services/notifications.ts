import { Injectable, Signal, signal } from '@angular/core';
import { Period } from '../models/period';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  getPage(page?: number): Signal<Period[]> {
    if (page === 2) {
      return this.page2;
    } else {
      return this.page1;
    }
  }

  private get page1(): Signal<Period[]> {
    return signal<Period[]>([
      {
        name: 'TODAY',
        notifications: [
          { color: 'green', icon: 'arrow-up', author: 'Chinjto', action: 'started the server', target: '#server-1 Minecraft', time: '8:57am' },
          { color: 'red', icon: 'arrow-down', author: 'System', action: 'stoppped the server', target: '#server-2 Palworld', time: '4:00am' },
          { color: 'red', icon: 'arrow-down', author: 'System', action: 'stoppped the server', target: '#server-1 Minecraft', time: '4:00am' }
        ]
      } as Period,
      {
        name: 'YESTERDAY',
        notifications: [
          { color: 'green', icon: 'arrow-up', author: 'Chinjto', action: 'started the server', target: '#server-2 Palworld', time: '4:37pm' },
          { color: 'yellow', icon: 'sync', author: 'Chinjto', action: 'updated the server', target: '#server-2 Palworld', time: '4:15pm' },
          { color: 'red', icon: 'arrow-down', author: 'Chinjto', action: 'stoppped the server', target: '#server-2 Palworld', time: '4:14pm' }
        ]
      } as Period
    ]);
  }

  private get page2(): Signal<Period[]> {
    return signal<Period[]>([
      {
        name: 'LAST WEEK',
        notifications: [
          { color: 'green', icon: 'arrow-up', author: 'Chinjto', action: 'started the server', target: '#server-1 Minecraft', time: '10:02am' },
          { color: 'yellow', icon: 'sync', author: 'Chinjto', action: 'updated the server', target: '#server-1 Minecraft', time: '9.55am' },
          { color: 'red', icon: 'arrow-down', author: 'Chinjto', action: 'stoppped the server', target: '#server-1 Minecraft', time: '9:54am' },
          { color: 'green', icon: 'arrow-up', author: 'Chinjto', action: 'started the server', target: '#server-2 Palworld', time: '9:54am' },
          { color: 'yellow', icon: 'sync', author: 'Chinjto', action: 'updated the server', target: '#server-2 Palworld', time: '9:09am' },
          { color: 'red', icon: 'arrow-down', author: 'Chinjto', action: 'stoppped the server', target: '#server-2 Palworld', time: '9:07am' }
        ]
      } as Period
    ]);
  }

}
