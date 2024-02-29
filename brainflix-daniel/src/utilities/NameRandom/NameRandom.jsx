//utility function for obtain random names every time a comment is submited
const nameRandom = () => {
    let random = Math.random()
    if (random < 0.2){
        return 'Sophie Brown'
    } else if (random < 0.4) {
        return 'Rajesh Gupta'
    } else if (random < 0.6) {
        return 'Elder Rivero'
    } else if (random < 0.8) {
        return 'Jon Jones'
    } else { return ' Jennifer Martin' }
  }

  export default nameRandom;