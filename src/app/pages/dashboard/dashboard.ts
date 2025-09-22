import { Component } from '@angular/core';
import { WidgetNotifications } from './components/widgets/notifications/widget-notifications';
import { WidgetServers } from './components/widgets/servers/widget-servers';

@Component({
    selector: 'app-dashboard',
    imports: [WidgetServers, WidgetNotifications],
    templateUrl: './dashboard.html'
})
export class Dashboard { }
