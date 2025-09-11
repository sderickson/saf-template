import type { User } from "@saflib/identity";
import { mockingOn } from "@saflib/email";
import { getSafReporters } from "@saflib/node";
import type { IdentityServiceCallbacks } from "@saflib/identity";

// TODO: Set up email sends for proper email verification. See @saflib/email for more details.

async function onVerificationTokenCreated(user: User, verificationUrl: string) {
  const { log } = getSafReporters();
  // TODO: add your own email with `npm exec saf-workflow kickoff add-email-template ./emails/verify-email.ts`
  log.info(`Verification email successfully sent to ${user.id}`);
  if (mockingOn) {
    log.info(`Link: ${verificationUrl}`);
  }
}

async function onPasswordReset(user: User, resetUrl: string) {
  const { log } = getSafReporters();
  // TODO: add your own email with `npm exec saf-workflow kickoff add-email-template ./emails/reset-password.ts`
  log.info(`Password reset email successfully sent to ${user.id}`);
  if (mockingOn) {
    log.info(`Link: ${resetUrl}`);
  }
}

async function onPasswordUpdated(user: User) {
  const { log } = getSafReporters();
  // TODO: add your own email with `npm exec saf-workflow kickoff add-email-template ./emails/password-updated.ts`
  log.info(
    `Password update confirmation email successfully sent to ${user.id}`,
  );
}

export const callbacks: IdentityServiceCallbacks = {
  onVerificationTokenCreated,
  onPasswordReset,
  onPasswordUpdated,
};
