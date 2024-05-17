import { Module } from '@nestjs/common';
import { MailerController } from './mailer.controller';
import { ConfigService } from './services/config/config.service';
import { MailService } from './services/mail.service';

@Module({
  imports: [],
  providers: [ConfigService, MailService],
  controllers: [MailerController],
})
export class AppMailerModule {}
