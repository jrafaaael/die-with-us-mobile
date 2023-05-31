interface PendingMessage {
  optimisticId: string;
  id?: never;
  createdAt?: never;
}

interface AvailableMessage {
  optimisticId: string;
  id: string;
  createdAt: string;
}

export type Message = {
  message: string;
  username: string;
} & (PendingMessage | AvailableMessage);
