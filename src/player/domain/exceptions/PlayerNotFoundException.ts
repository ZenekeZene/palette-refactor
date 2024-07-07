class PlayerNotFoundException extends Error {
  constructor() {
    super('Player not found')
    this.name = 'PlayerNotFoundException'
  }
}

export { PlayerNotFoundException }
