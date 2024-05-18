import { createTransport, getTestMessageUrl } from 'nodemailer';
import { ConfigService } from './config/config.service';

export class MailService {
  private transporter: any;
  private configService: ConfigService;

  constructor(configService: ConfigService) {
    this.configService = configService;

    this.transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
  }

  async sendMail({ to, subject, html }): Promise<any> {
    try {
      const info = await this.transporter.sendMail({
        from: process.env.SMTP_FROM,
        to,
        subject,
        html,
      });

      return {
        message: info.messageId,
        preview: getTestMessageUrl(info),
      };
    } catch (error) {
      throw new Error('Error send mail');
    }
  }
}
