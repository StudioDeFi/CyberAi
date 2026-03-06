/**
 * RBAC Permissions
 * Defines actions and permission checks for each role
 */

import { Role } from './roles.js';

export type Action =
  | 'view:agents'
  | 'view:repos'
  | 'view:logs'
  | 'view:dashboards'
  | 'view:chat'
  | 'view:docs'
  | 'manage:deploy'
  | 'manage:workflows'
  | 'manage:contracts'
  | 'manage:terminal'
  | 'manage:agent-tools'
  | 'admin:all';

const ROLE_PERMISSIONS: Record<Role, ReadonlySet<Action>> = {
  [Role.Admin]: new Set<Action>([
    'view:agents',
    'view:repos',
    'view:logs',
    'view:dashboards',
    'view:chat',
    'view:docs',
    'manage:deploy',
    'manage:workflows',
    'manage:contracts',
    'manage:terminal',
    'manage:agent-tools',
    'admin:all',
  ]),
  [Role.Operator]: new Set<Action>([
    'manage:workflows',
    'manage:contracts',
    'manage:terminal',
    'manage:agent-tools',
    'view:chat',
    'view:docs',
  ]),
  [Role.User]: new Set<Action>(['view:chat', 'view:docs']),
};

/**
 * Check whether a given role has permission to perform an action.
 */
export function hasPermission(role: Role, action: Action): boolean {
  return ROLE_PERMISSIONS[role].has(action);
}
