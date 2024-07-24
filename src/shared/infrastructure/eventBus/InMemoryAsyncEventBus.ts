import { DomainEvent } from '../../domain/utils/DomainEvent'
import { EventBus } from '../../domain/utils/EventBus'
import { DomainEventSubscribers } from './DomainEventSubscribers'

export class InMemoryAsyncEventBus implements EventBus {
  private createEvent(event: DomainEvent): CustomEvent {
    return new CustomEvent(event.eventName, { detail: event })
  }

  async publish(events: DomainEvent[]): Promise<void> {
    events.map((event) => {
      document.dispatchEvent(this.createEvent(event))
    })
  }

  addSubscribers(subscribers: DomainEventSubscribers) {
    subscribers.items.forEach((subscriber) => {
      subscriber.subscribedTo().forEach((event) => {
        const handler = ((e: CustomEvent) => {
          subscriber.on(e.detail)
        }) as EventListener
        document.addEventListener(event.EVENT_NAME, handler)
      })
    })
  }
}
