import { SendNotification } from "@application/use-cases/send-notification";
import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";

interface ISendNotificationsPayload {
  content: string;
  category: string;
  recipientId: string;
}

@Controller()
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @EventPattern("notifications.send-notification")
  async handleSendNotification(
    @Payload() { content, category, recipientId }: ISendNotificationsPayload
  ) {
    await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });
  }
}
