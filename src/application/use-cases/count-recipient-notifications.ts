import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repository";

interface ICountRecipientNotificationsRequest {
  recipientId: string;
}

interface ICountRecipientNotificationsResponse {
  count: number;
}

@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: ICountRecipientNotificationsRequest
  ): Promise<ICountRecipientNotificationsResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(
      recipientId
    );

    return { count };
  }
}
