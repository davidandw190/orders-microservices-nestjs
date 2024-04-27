import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable, catchError, tap } from 'rxjs';

import { AUTH_SERVICE } from './services';
import { ClientProxy } from '@nestjs/microservices';
