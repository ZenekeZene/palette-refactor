export const Types = {
  LoadGame: Symbol.for('LoadGame'),

  // Player:
  PlayerLoaderRepository: Symbol.for('PlayerLoaderRepository'),
  RegisterPlayer: Symbol.for('RegisterPlayer'),
  PlayerRepository: Symbol.for('PlayerRepository'),

  // Level Module:
  LevelsLoaderRepository: Symbol.for('LevelsLoaderRepository'),
  RegisterLevels: Symbol.for('RegisterLevels'),
  LevelsRepository: Symbol.for('LevelsRepository'),
  PassLevel: Symbol.for('PassLevel'),
  GetLevel: Symbol.for('GetLevel'),

  // Quote Module:
  QuotesLoaderRepository: Symbol.for('QuotesLoaderRepository'),
  RegisterQuotes: Symbol.for('RegisterQuotes'),
  QuotesRepository: Symbol.for('QuotesRepository'),
  GetQuote: Symbol.for('GetQuote'),

  // Color Module:
  MixColor: Symbol.for('MixColor'),
  GenerateColors: Symbol.for('GenerateColors'),
  ColorMixerLogger: Symbol.for('ColorMixerLogger'),
  ColorRepository: Symbol.for('ColorRepository'),

  // Shared:
  DomainEventSubscribers: Symbol.for('DomainEventSubscribers'),
  EventBus: Symbol.for('EventBus'),
}
