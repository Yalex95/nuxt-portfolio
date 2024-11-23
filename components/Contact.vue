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
  <section id="contact" class="flex w-8/12 flex-row  mx-auto">
    <div class="w-8/12 flex justify-center items-center py-10">
    <UForm
      :schema="schema"
      :state="state"
      class="grid grid-cols-2 gap-4 w-full"
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
      <UFormGroup name="message" class="col-span-2">
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
        class="w-1/3 px-4 py-3 flex items-center justify-center"
      >
        Submit
      </UButton>
    </UForm>
  </div>

  </section>
</template>
