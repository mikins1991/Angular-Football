import { Standing } from '../interface/standing.interface';

export class MapDataHelper {
    static mapingDataStandings(data): Standing.Table[] {
        const result = [];

        data.forEach((team) => {
            const newItem = {
                name: team.team.name,
                logo: team.team.crestUrl,
                position: team.position,
                points: team.points,
                draw: team.draw,
                goalDifference: team.goalDifference,
                goalsAgainst: team.goalsAgainst,
                goalsFor: team.goalsFor,
                lost: team.lost,
                playedGames: team.playedGames
            };
            result.push(newItem);
        });
        return result;
    }
}
