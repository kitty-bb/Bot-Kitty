class TicTacToe {
  constructor(playerX = 'x', playerO = 'o') {
  }

  get board() {
    return this._x | this._o;
  }

  get currentTurn() {
    return this._currentTurn ? this.playerO : this.playerX;
  }

  get enemyTurn() {
    return this._currentTurn ? this.playerX : this.playerO;
  }

  static check(state) {
    for (const combo of [7, 56, 73, 84, 146, 273, 292, 448]) {
      if ((state & combo) === combo) {
        return !0;
      }
    }
    return !1;
  }

  /**
     * ```js
     * TicTacToe.toBinary(1, 2) // 0b010000000
     * ```
     */
  static toBinary(x = 0, y = 0) {
    if (x < 0 || x > 2 || y < 0 || y > 2) throw new Error('invalid position');
    return 1 << x + (3 * y);
  }

  /**
     * @param player `0` is `X`, `1` is `O`
     *
     * - `-3` `Game Ended`
     * - `-2` `Invalid`
     * - `-1` `Invalid Position`
     * - ` 0` `Position Occupied`
     * - ` 1` `Sucess`
     * @return {-3|-2|-1|0|1}
     */
  turn(player = 0, x = 0, y) {
  }

  /**
     * @return {('X'|'O'|1|2|3|4|5|6|7|8|9)[]}
     */
  static render(boardX = 0, boardO = 0) {
  }

  /**
     * @return {('X'|'O'|1|2|3|4|5|6|7|8|9)[]}
     */
  render() {
    return TicTacToe.render(this._x, this._o);
  }

  get winner() {
  }
}

new TicTacToe().turn;

export default TicTacToe;
