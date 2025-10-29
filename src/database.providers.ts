import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "1234",
    database: "postgres",
    synchronize: true,
    logging: false, 
    }),
    TypeOrmModule.forFeature([User]),
  ],
})
export class AppModule {}
