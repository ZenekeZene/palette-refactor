# TODO
- [?] See [Support variable fonts](https://fonts.google.com/selection/embed) in old browsers.
- [] Get all neccessary icons [here](https://react-icons.github.io/react-icons/).
- [-] Research a i18n library.
- [?] Move Vite and config relationated with frontend to his folder (applications/frontend).
- [-] Create a contructor with filePath:URL in LevelsLoaderFromFileRepository. Bug with dynamic import with Vite.
- [x] Not propagate the domain model to store (UI). Use Request (DTO) and Response (DTO).

## DI Container:
- [-] Is it useful to have 2 DI containers? One for contexts and one for app/frontend?
- [-] Is it useful to have a interface for DI container? I dont want propagate the static import of tysringe in the basecode. See "On master: Idea: wip decoupling di container of tsyringe" on stash list.
- [-] Change the DI Container, the vendor (not use decorators).
- ~~[-] Change the location: move from game context to apps/frontend.~~

## Event bus
- [x] Create the event bus and subscribers.
- [x] Make a diagram about event bus.
- [] Publish the diagram in RRSS.
  - [] Can we change the example?
      - CustomEvent instead of events module.
  - [] Can it be simplified?
  - [] Differences between pub sub pattern, event bus and this event bus applied in arch. hexagonal or DDD (?).
  - [] How we can publish this diagram?

## Testing
- [] 'Test and domain'. Should we use domain logic inside our factories to testing purposes? Is it more correct to use DTOs?

## Legend
- [ ] To do.
- [-] Postponed.
- [x] Done.
- [?] Research.
- ~~[]~~ Cancelled.
