import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { RolesEnum } from '../enums/Roles.enum';
import { RolesGuard } from '../guards/role.guard';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: RolesEnum[]) => {
  return applyDecorators(SetMetadata(ROLES_KEY, roles), UseGuards(RolesGuard));
};
