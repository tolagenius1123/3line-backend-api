import { Injectable } from '@nestjs/common';
import { Role } from './dto/role.dto';
import { rolesData } from 'src/utils/helper';

@Injectable()
export class RolesService {
  findAll(): Role[] {
    return rolesData;
  }

  findOne(id: string): Role | undefined {
    return rolesData.find((role) => role.id === id);
  }
}
