import crypto from 'crypto';
import { prisma } from '~/db/prisma';

export async function accountExists(email: string) {
  let account = await prisma.account.findUnique({
    where: { email: email },
    select: { id: true },
  });
  return Boolean(account);
}

