import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Heading } from "~/components/Heading";

export default component$(() => {
  return (
    <div class="flex flex-col w-screen h-screen">
      <div class="basis-1 flex">
        <div class="place-self-center text-black text-7xl sm:text-9xl text-error text-center grow">
          Apurva Mishra
        </div>
      </div>
      <div class="basis-2 grid gap-4 grid-cols-1 sm:grid-cols-2 p-4">
        <Heading>First</Heading>
        <Heading>Second</Heading>
        <Heading>Third</Heading>
        <Heading>Fourth</Heading>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Apurva Mishra",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
