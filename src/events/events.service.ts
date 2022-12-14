import { Injectable } from '@nestjs/common';
import { EventDto } from './dto/event.dto';

@Injectable()
export class EventsService {
  private events = [
    { id: 1, name: 'WellHello', date: new Date('2022-12-22') },
    { id: 2, name: 'Tankcsapda', date: new Date('2022-12-26') },
  ];

  getAll() {
    return this.events;
  }

  getById(id: number) {
    return this.events.filter((event) => event.id === id);
  }

  create(event: EventDto) {
    const ids = this.events.map((event) => event.id);
    const maxId = Math.max(...ids);
    const newEventId = maxId + 1;
    const newEvent = {
      id: newEventId,
      name: event.name,
      date: new Date(event.date),
    };

    this.events.push(newEvent);
  }

  delete(id: number) {
    this.events = this.events.filter((event) => event.id !== id);
  }

  update(id: number, event: EventDto) {
    const eventToModify = this.events.find((event) => event.id === id);
    eventToModify.name = event.name;
  }
}
