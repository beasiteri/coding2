import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  ParseIntPipe,
  Patch,
} from '@nestjs/common';
import { EventDto } from './dto/event.dto';
import { EventsService } from './events.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventService: EventsService) {}

  @Get()
  getAll() {
    return this.eventService.getAll();
  }

  @Get('/:id')
  getById(@Param('id', new ParseIntPipe()) id: number) {
    return this.eventService.getById(id);
  }

  @Post()
  create(@Body() event: EventDto) {
    this.eventService.create(event);
  }

  @Delete('/:id')
  delete(@Param('id', new ParseIntPipe()) id: number) {
    this.eventService.delete(id);
  }

  @Patch('/:id')
  update(@Param('id', new ParseIntPipe()) id: number, @Body() event: EventDto) {
    return this.eventService.update(id, event);
  }
}
