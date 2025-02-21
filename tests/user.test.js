import { User } from '../src/User.js';
import { Scout } from '../src/Scout.js';

describe('User Hierarchy', () => {
  test('scout inherits user properties', () => {
    const scout = new Scout('James');
    expect(scout.name).toBe('James');
    expect(scout.role).toBe('Scout');
  });
});