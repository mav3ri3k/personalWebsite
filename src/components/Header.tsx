import { component$ } from '@builder.io/qwik';
 
export const Header = component$(() => {
  return (
    <div class="">
      <div class="flex flex-row mb-4 p-2">
        <div class="grow text-2xl font-bold">
          Apurva Mishra
        </div >
        <div class="text-center">
          Test 
        </div>
      </div>
    </div>
  );
});
