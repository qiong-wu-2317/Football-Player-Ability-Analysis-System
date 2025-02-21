import { Player } from '../src/Player.js';
import { ComparisonReport } from '../src/ComparisonReport.js';

describe('ComparisonReport', () => {
  let player1, player2, report;

  beforeEach(() => {
    player1 = new Player('P1', 'Salah', 30, 100_000_000, 
      { shooting: 90 }, { speed: 89 }, { composure: 92 }, 'Attacker');
    player2 = new Player('P2', 'Haaland', 22, 150_000_000, 
      { shooting: 94 }, { speed: 93 }, { composure: 88 }, 'Attacker');
    report = new ComparisonReport(player1, player2);
  });

  test('generates technical comparison', () => {
    const result = report.generateReport();
    expect(result.technical.shooting.player1).toBe(90);
    expect(result.technical.shooting.player2).toBe(94);
  });
});