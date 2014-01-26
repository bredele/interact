
/**
 * Expose 'room'
 */

module.exports = room;


/**
 * room constructor.
 * @api public
 */

function room(name) {
  console.log('room', name);
  return function(req, res, next) {

  };
}
