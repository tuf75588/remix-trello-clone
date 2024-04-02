import { json, type ActionFunctionArgs, redirect } from '@remix-run/node';
import { Form, Link, useActionData } from '@remix-run/react';

import { redirectIfLoggedIn, setAuthOnResponse } from '~/auth/auth';
import { Label, Input } from '~/components/input';
import { Button } from '~/components/button';

