import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex flex-col h-screen">
      <div class="basis-1/4 justify-self-center text-7xl sm:text-9xl font-bold">
        Apurva Mishra
      </div>
      <div class="bg-tertiary p-2 m-2 outline outline-2 rounded-lg">
        <h1>Hello</h1>
        <p>
          Can't wait to see what you build next!
          <br />
          Happy coding.
        </p>
      </div>
      <div class="flex flex-row ">
        <div class="grow bg-tertiary p-2 m-2 outline outline-2 rounded-lg">
          test
        </div>
        <div class="grow bg-tertiary p-2 m-2 outline outline-2 rounded-lg">
          test
        </div>
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
