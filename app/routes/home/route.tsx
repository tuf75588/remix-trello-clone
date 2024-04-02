import {
  type LoaderFunctionArgs,
  type ActionFunctionArgs,
  redirect,
  broadcastDevReady,
  json,
} from '@remix-run/node';
import {
  Form,
  Link,
  useFetcher,
  useLoaderData,
  useNavigation,
} from '@remix-run/react';

import { requireAuthCookie } from '~/auth/auth';
import { Button } from '~/components/button';
import { Icon } from '~/icons/icons';

const meta = () => {
  return [{ title: 'Boards' }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  let userId = await requireAuthCookie(request);
  return { userId };
}
