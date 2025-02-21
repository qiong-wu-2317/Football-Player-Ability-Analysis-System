/**
 * @module User
 * Base class for system users
 */
export class User {
    /**
     * @param {string} name - User's full name
     * @param {'Scout'|'Manager'|'Agent'|'System Administrator'} role - User role
     */
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }

    getAccessLevel() {
        return "Base access";
    }
  }