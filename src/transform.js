const groupAdultsByAgeRange = people => {
  return people
    .filter(person => person.age >= 18)
    .reduce((acc, inc) => {
      const x = inc.age
      switch (true) {
        case (x <= 20):
          group = '20 and younger'
          break;
        case (x >= 21 && x <= 30):
          group = '21-30'
          break;
        case (x >= 31 && x <= 40):
          group = '31-40'
          break;
        case (x >= 41 && x <= 50):
          group = '41-50'
          break;
        case (x > 50):
          group = '51 and older'
          break;
      }
      acc[group] = acc[group] || [];
      acc[group] = [...acc[group], inc];
      return acc;
    }, {})
}

module.exports = { groupAdultsByAgeRange }