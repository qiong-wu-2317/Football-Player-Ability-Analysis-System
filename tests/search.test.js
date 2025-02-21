import { SearchRecommendationSystem } from '../src/SearchRecommendationSystem.js';
import { Player } from '../src/Player.js';

describe('SearchRecommendationSystem', () => {
  let players, system;

  beforeEach(() => {
    players = [
      new Player('P1', 'Player1', 25, 10_000_000, {}, {}, {}, 'Midfielder'),
      new Player('P2', 'Player2', 28, 20_000_000, {}, {}, {}, 'Defender'),
    ];
    system = new SearchRecommendationSystem(players);
  });

  test('filters by position', () => {
    const results = system.filterPlayers({ position: 'Defender' });
    expect(results.length).toBe(1);
    expect(results[0].name).toBe('Player2');
  });

  test('returns top recommendations', () => {
    players.forEach(p => p.score = Math.random() * 100); // Add scoring logic
    const top5 = system.getRecommendations();
    expect(top5.length).toBe(2); // Only 2 players in test data
  });
});