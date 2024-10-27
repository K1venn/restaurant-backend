import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserEntity } from 'src/core/modules/user/entities/user.entity';
import { ROLES_KEY } from '../decorators/role.decorator';
import { RolesEnum } from '../enums/Roles.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<RolesEnum[]>(
      ROLES_KEY,
      context.getHandler(),
    );

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user as Omit<UserEntity, 'createdAt' | 'updatedAt'>;

    if (!user || !requiredRoles.includes(user.role)) {
      throw new ForbiddenException(
        'Access denied: You do not have permission to perform this action.',
      );
    }

    return true;
  }
}
