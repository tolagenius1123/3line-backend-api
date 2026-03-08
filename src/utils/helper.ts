import { Role, RoleUser } from 'src/roles/dto/role.dto';

const avatarSeeds = [
  'Aiden',
  'Bella',
  'Cara',
  'Dana',
  'Evan',
  'Faye',
  'Gina',
  'Hana',
  'Ivan',
  'Jess',
  'Kai',
  'Luna',
  'Mia',
  'Nora',
  'Owen',
];

function makeUsers(count: number, offset = 0): RoleUser[] {
  return Array.from({ length: count }, (_, i) => {
    const seed = avatarSeeds[(offset + i) % avatarSeeds.length];
    return {
      id: `user-${offset + i}`,
      name: seed,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`,
    };
  });
}

export const rolesData: Role[] = [
  {
    id: '1',
    name: 'Superadmin',
    type: 'DEFAULT',
    dateCreated: 'Jan 1, 2023',
    status: 'Active',
    roleUsers: makeUsers(6, 0),
  },
  {
    id: '2',
    name: 'Merchantadmin',
    type: 'DEFAULT',
    dateCreated: 'Feb 1, 2023',
    status: 'Active',
    roleUsers: makeUsers(5, 2),
  },
  {
    id: '3',
    name: 'supportadmin',
    type: 'DEFAULT',
    dateCreated: 'Feb 1, 2023',
    status: 'Active',
    roleUsers: makeUsers(4, 4),
  },
  {
    id: '4',
    name: 'sales personnel',
    type: 'CUSTOM',
    dateCreated: 'Mar 1, 2023',
    status: 'Active',
    roleUsers: makeUsers(3, 6),
  },
  {
    id: '5',
    name: 'Deputy sales personnel',
    type: 'CUSTOM',
    dateCreated: 'Apr 1, 2023',
    status: 'In Active',
    roleUsers: makeUsers(4, 8),
  },
  {
    id: '6',
    name: 'Developeradmin',
    type: 'SYSTEM-CUSTOM',
    dateCreated: 'May 1, 2023',
    status: 'Active',
    roleUsers: makeUsers(4, 10),
  },
  {
    id: '7',
    name: 'Developer-basic',
    type: 'SYSTEM-CUSTOM',
    dateCreated: 'Jun 1, 2023',
    status: 'Active',
    roleUsers: makeUsers(3, 12),
  },
];
