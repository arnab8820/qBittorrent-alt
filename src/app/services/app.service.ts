import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private api:ApiServiceService, private auth:AuthGuardService) { }
}
