import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

import { Header } from "~/components/Header";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div class="w-screen h-screen bg-slate-900 text-white">
      <div class="flex flex-row p-8">
        <div class="sm:grow"/>
        <div class="flex flex-col grow max-w-xl">
          <Header />
          <Slot />
        </div>
        <div class="sm:grow" />
      </div>
    </div>
  );
});
