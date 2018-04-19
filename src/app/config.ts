import {environment} from '../environments/environment';
import {InjectionToken} from '@angular/core';

export const BASE_URL = new InjectionToken('baseUrl');
export const baseUrl = environment.baseUrl;
