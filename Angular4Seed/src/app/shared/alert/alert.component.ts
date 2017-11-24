import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AlertService } from './alert.service';
import { Subscription } from 'rxjs/Subscription';
import { Alert, AlertType } from './alert';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AlertComponent implements OnInit {

  public model: Alert;
  public sub: Subscription;

  constructor(private alert: AlertService) {
    this.model = new Alert();
  }

  ngOnInit() {
    this.sub = this.alert.alertState.subscribe((alert: Alert) => {
      this.model = alert;
    });
  }

}


