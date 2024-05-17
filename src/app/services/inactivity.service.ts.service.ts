import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InactivityService {
  private timeoutId: any;
  private warningTimeoutId: any;
  private readonly timeout: number = 5 * 60 * 1000; // 5 minutos
  private readonly warningTimeout: number = 1 * 60 * 1000; // 1 minuto para responder

  constructor(private router: Router, private ngZone: NgZone) {
    this.initListener();
    this.startTimer();
  }

  private initListener() {
    document.addEventListener('mousemove', () => this.resetTimer(), true);
    document.addEventListener('keypress', () => this.resetTimer(), true);
  }

  private startTimer() {
    this.ngZone.runOutsideAngular(() => {
      this.timeoutId = setTimeout(() => this.showWarning(), this.timeout);
    });
  }

  private resetTimer() {
    clearTimeout(this.timeoutId);
    clearTimeout(this.warningTimeoutId);
    this.startTimer();
  }

  private showWarning() {
    const confirmation = confirm('¿Sigues ahí? Tu sesión está a punto de expirar.');
    if (confirmation) {
      this.resetTimer();
    } else {
      this.warningTimeoutId = setTimeout(() => this.logout(), this.warningTimeout);
    }
  }

  private logout() {
    this.ngZone.run(() => {
      this.router.navigate(['/login']);
    });
  }
}
