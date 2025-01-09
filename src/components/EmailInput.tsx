'use client';

import { useActionState } from 'react';
// import { useAppState } from '@/state/AppState';
import { SubmitEmail } from '@/lib/SubmitEmail';
import { toast } from 'sonner';
import * as React from 'react';

const EmailInput = () => {
  const [state, setEmail] = useActionState(SubmitEmail, undefined);
  // const { setShouldRespondToKeyboardCommands } = useAppState();

  React.useEffect(() => {
    if (!state) {
      return;
    }

    if ('data' in state) {
      toast(state.data);
    } else if ('error' in state) {
      toast(`Error when sending email: ${state.error}`);
    }
  }, [state]);

  // React.useEffect(() => {
  //   setShouldRespondToKeyboardCommands?.(false);
  // }, [setShouldRespondToKeyboardCommands]);

  return (
    <div>
      <form action={setEmail} style={{ display: 'flex', alignItems: 'center' }}>
        <input
          id='email'
          name='email'
          type='email'
          placeholder='Enter your email'
          required
          autoComplete='email'
          style={{ padding: '10px', marginRight: '10px', flex: 1 }}
        />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default EmailInput;
