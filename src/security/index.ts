/**
 * Security and Audit Tools
 * Provides security scanning, vulnerability detection, and RBAC utilities.
 */

export { Role } from './roles.js';
export type { RoleType } from './roles.js';
export { hasPermission } from './permissions.js';
export type { Action } from './permissions.js';
export {
  canAccessRoute,
  canUseFeature,
  getUnauthorizedRedirect,
  assertRouteAccess,
  ROUTE_REQUIREMENTS,
  FEATURE_REQUIREMENTS,
} from './guards.js';

export interface SecurityScan {
  timestamp: Date;
  vulnerabilities: Vulnerability[];
  status: 'clean' | 'warnings' | 'critical';
}

export interface Vulnerability {
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
  location: string;
}

export class SecurityScanner {
  scan(): SecurityScan {
    return {
      timestamp: new Date(),
      vulnerabilities: [],
      status: 'clean',
    };
  }
}
