/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      var beginners_time = 1300;
      var programmers_time = 800;
      var learning_speed = config[focus];

      if (knowsProgramming === true) {
        return Math.ceil(programmers_time/learning_speed);
      } else {
        return Math.ceil(beginners_time/learning_speed);
      }
      
  };
  