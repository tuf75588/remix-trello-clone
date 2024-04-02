import { json, type ActionFunctionArgs, redirect } from '@remix-run/node';
import { Form, Link, useActionData } from '@remix-run/react';

import { redirectIfLoggedInLoader, setAuthOnResponse } from '~/auth/auth';
import { Label, Input } from '~/components/input';
import { Button } from '~/components/button';

export async function action({ request }: ActionFunctionArgs) {}

export default function Signup() {
  let actionResult = useActionData<typeof action>();
  return (
    <div className="flex min-h-full flex-1 flex-col mt-20 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2
          id="signup-header"
          className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Sign up
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm-w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              autoFocus
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              aria-describedby={
                actionResult?.errors?.email ? 'email-error' : 'signup-header'
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
