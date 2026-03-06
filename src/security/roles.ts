/**
 * RBAC Role Definitions
 * Defines the role hierarchy for CyberAi access control
 */

export enum Role {
  Admin = 'admin',
  Operator = 'operator',
  User = 'user',
}

export type RoleType = `${Role}`;
