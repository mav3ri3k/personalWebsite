import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="bg-neutral-900 p-2 outline outline-2 rounded-lg">
      <h1>Hello</h1>
      <p>
        Can't wait to see what you build next!
        <br />
        Happy coding.
      </p>
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
