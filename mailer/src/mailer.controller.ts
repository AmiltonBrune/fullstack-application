import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { IEmailData } from './interfaces/email-data.interface';
import { IMailSendResponse } from './interfaces/mail-send-response.interface';
import { MailService } from './services/mail.service';

@Controller()
export class MailerController {
  constructor(private readonly mailService: MailService) {}

  @MessagePattern('mail_send')
  async mailSend(data: IEmailData): Promise<IMailSendResponse> {
    await this.mailService.sendMail({
      html: data?.html,
      subject: data?.subject,
      to: data?.to,
    });

    return {
      status: HttpStatus.ACCEPTED,
      message: 'mail_send_success',
    };
  }
}
