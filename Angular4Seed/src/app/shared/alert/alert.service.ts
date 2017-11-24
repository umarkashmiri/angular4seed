import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Alert, AlertType } from './alert';

@Injectable()
export class AlertService {

  private alertSubject = new Subject<Alert>();
  public alertState = this.alertSubject.asObservable();


  public show(alert: Alert) {
    let m = new Alert();
    m.show = alert.show;
    m.message = alert.message;
    m.type = alert.type;
    m.isCloseable = alert.isCloseable;
    this.alertSubject.next(m);
  }

  public success(msg: string, isCloseable: boolean = false) {
    let m = new Alert();
    m.message = msg;
    m.show = true;
    m.type = AlertType.Success;
    m.isCloseable = isCloseable;
    this.updateMessage(m);
  }

  public error(msg: string, isCloseable: boolean = false) {
    let m = new Alert();
    m.message = msg;
    m.show = true;
    m.type = AlertType.Error;
    m.isCloseable = isCloseable;
    this.updateMessage(m);
  }

  public warn(msg: string, isCloseable: boolean = false) {
    let m = new Alert();
    m.message = msg;
    m.show = true;
    m.type = AlertType.Warning;
    m.isCloseable = isCloseable;
    this.updateMessage(m);
  }

  public info(msg: string, isCloseable: boolean = false) {
    let m = new Alert();
    m.message = msg;
    m.show = true;
    m.type = AlertType.Info;
    m.isCloseable = isCloseable;
    this.updateMessage(m);
  }

  private updateMessage(m: Alert) {
    this.alertSubject.next(m);
  }

  public hide() {
    let m = new Alert();
    m.show = false;
    this.updateMessage(m);
  }
}
