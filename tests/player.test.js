import { Player } from '../src/Player.js';
import { EvaluationModel } from '../src/EvaluationModel.js';

describe('Player and EvaluationModel', () => {
  let model, attacker;

  beforeEach(() => {
    model = new EvaluationModel();
    attacker = new Player(
      'P1',
      'Messi',
      35,
      50_000_000,
      { passing: 95, dribbling: 99, shooting: 93 },
      { speed: 85, stamina: 80 },
      { vision: 94, composure: 97 },
      'Attacker'
    );
  });

  test('calculates correct score with default weights', () => {
    attacker.calculateScore(model);
    expect(attacker.score).toBeCloseTo(
      (95+99+93)*0.5 + (85+80)*0.3 + (94+97)*0.2
    );
  });

  test('adjusts weights and recalculates score', () => {
    model.adjustWeights('Attacker', { technical: 0.6, physical: 0.25, mental: 0.15 });
    attacker.calculateScore(model);
    expect(attacker.score).toBeCloseTo(
      (95+99+93)*0.6 + (85+80)*0.25 + (94+97)*0.15
    );
  });
});