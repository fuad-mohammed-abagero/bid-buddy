import { pgTable, serial, uuid } from "drizzle-orm/pg-core";

export const bids = pgTable("bb_bids", {
  id: uuid("id").primaryKey(),
});
