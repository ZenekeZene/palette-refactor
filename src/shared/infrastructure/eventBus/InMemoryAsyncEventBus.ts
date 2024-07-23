import { DomainEvent } from '../../domain/utils/DomainEvent'
import { EventBus } from '../../domain/utils/EventBus'
import { DomainEventSubscribers } from './DomainEventSubscribers'

export class InMemoryAsyncEventBus implements EventBus {
  async publish(events: DomainEvent[]): Promise<void> {
    events.map(event => {
      const customEvent = new CustomEvent(event.eventName, { detail: event })
      document.dispatchEvent(customEvent)
    })
  }

  addSubscribers(subscribers: DomainEventSubscribers) {
    subscribers.items.forEach(subscriber => {
      subscriber.subscribedTo().forEach(event => {
        document.addEventListener(event.EVENT_NAME, ((e: CustomEvent) => {
          subscriber.on(e.detail);
        }) as EventListener);
      })
    })
  }
}
