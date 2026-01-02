import { HandledDatabaseError } from "@saflib/drizzle";

/**
 * Superclass for all handled tasktap db errors
 */
export class TasktapDatabaseError extends HandledDatabaseError {}

// TODO: Add specific error classes for your database
export class StubError extends TasktapDatabaseError {}
