import { Slot, component$ } from '@builder.io/qwik';
 
export const Heading = component$(() => {
  return (
    <div class="border-2 rounded-2xl text-primary p-4">
      <Slot />
    </div>
  );
});
