import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from '../Users/users.controller';
import { UsersService } from '../Users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from '../Users/users.entity';
import { UsersRepository } from '../Users/users.repository';
import { Credentials } from '../credentials/credentials.entity';
import { MailModule } from '../mail/mail.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Users, Credentials]),
    MailModule,
    forwardRef(() => AuthModule),
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
