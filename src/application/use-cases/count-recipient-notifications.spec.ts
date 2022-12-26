import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CountRecipientNotifications } from "./count-recipient-notifications";

describe("Count recipients notifications", () => {
  it("should be able to count recipient notifications", async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipienteNotifications = new CountRecipientNotifications(
      notificationsRepository
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: "recipient_1" })
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: "recipient_1" })
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: "recipient_2" })
    );

    const { count } = await countRecipienteNotifications.execute({
      recipientId: "recipient_1",
    });

    expect(count).toEqual(2);
  });
});
