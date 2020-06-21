export class MapDataHelper {
  static mapingDataStandings(data) {
    const result = [];

    data.forEach((team) => {
      const newItem = {
        name: team.team.name,
        logo: team.team.crestUrl,
        position: team.position,
        points: team.points,
      };
      result.push(newItem);
    });
    return result;
  }
}
