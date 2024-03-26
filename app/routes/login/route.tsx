import { json, redirect, type DataFunctionArgs } from '@remix-run/node';
import { Form, Link, useActionData } from '@remix-run/react';

export const meta = () => {
  return [{ title: 'Login' }];
};

export default function Signup() {
  return (
    <div className="flex min-h full flex-1 flex-col mt-20 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2
          id="login-header"
          className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Log In
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
          <Form className="space-y-6" method="post">
            <div></div>
          </Form>
        </div>
      </div>
    </div>
  );
}
