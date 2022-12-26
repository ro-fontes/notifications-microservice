import { Content } from "@application/entities/content";
import {
  Notification,
  INotificationProps,
} from "@application/entities/notifications";

type Override = Partial<INotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: "social",
    content: new Content("Nova solicitacao de amizade"),
    recipientId: "recipient_2",
    ...override,
  });
}
