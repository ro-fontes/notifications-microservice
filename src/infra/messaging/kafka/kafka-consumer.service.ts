import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { ServerKafka } from "@nestjs/microservices";
@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: "notifications",
        brokers: ["neat-ox-8596-us1-kafka.upstash.io:9092"],
        sasl: {
          mechanism: "scram-sha-256",
          username:
            "bmVhdC1veC04NTk2JKmWsKGmRgu7S0ZKIi1Qcn0sqpvbDMehRZI65vQ-6XgAtDU",
          password: "e690c4cdc87844ca8c5782765731c17f",
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }

  async;
}
