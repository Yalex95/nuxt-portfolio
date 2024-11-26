<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";

const schema = z.object({
  email: z.string().email("Invalid email"),
  fullName: z.string().optional(),
  message: z.string().min(10, "message must be at least 10 characters"),
  // .min(3, "full name must be at least 3 characters"),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  email: undefined,
  fullName: undefined,
  message: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data);
}
</script>

<template>
  <section id="contact">
    <div id="contact-me" class="flex md:w-11/12 lg:w-8/12 w-full flex-row mx-auto py-10 lg:py-20 justify-center lg:justify-start">
      <div class="md:w-10/12 w-11/12 flex justify-center items-center py-10 flex-col">
        <div class="flex flex-col py-10">
          <h2 class="text-3xl font-bold uppercase">{{ $t("contactText") }}</h2>
          <h3 class="font-bold text-2xl uppercase">{{ $t("contactMeSub") }}</h3>
          <p class="my-5">{{ $t("contactMeDesc") }}</p>
        </div>
        <UForm
          :schema="schema"
          :state="state"
          class="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
          @submit="onSubmit"
        >
          <UFormGroup name="fullName">
            <UInput
              size="lg"
              v-model="state.fullName"
              icon="i-heroicons-user"
              placeholder="Name"
            />
          </UFormGroup>
          <UFormGroup name="email" required>
            <UInput
              size="lg"
              v-model="state.email"
              placeholder="you@example.com"
              icon="i-heroicons-envelope"
            />
          </UFormGroup>
          <UFormGroup name="message" class="md:col-span-2">
            <UTextarea
              size="lg"
              v-model="state.message"
              placeholder="Message"
              icon="i-heroicons-chat-bubble-left-right"
              required
              autoresize
              :maxrows="10"
            />
          </UFormGroup>

          <UButton
            type="submit"
            class="md:w-1/3 px-4 py-3 flex items-center justify-center"
          >
            Submit
          </UButton>
        </UForm>
      </div>
    </div>
  </section>
</template>
<style scoped>
#contact-me {
  position: relative;
}
#contact {
  position: relative;
}
#contact::before {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent, #0a1626, #0a1626, #0a1626);
}
</style>
