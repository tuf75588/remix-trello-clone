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
import { getHomeData, createBoard, deleteBoard } from './queries';

export const meta = () => {
  return [{ title: 'Boards' }];
};

export async function loader({ request }: LoaderFunctionArgs) {
  let userId = await requireAuthCookie(request);
  let boards = await getHomeData(userId);
  return { boards };
}

export async function action({request}: ActionFunctionArgs) {
  let accountId = await requireAuthCookie(request);
}


export default function Home() {
  return <div>home</div>;
}
