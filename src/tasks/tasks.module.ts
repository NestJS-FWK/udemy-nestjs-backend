import { TasksController } from './tasks.controller';
import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        TasksController,],
    providers: [],
})
export class TasksModule { }
