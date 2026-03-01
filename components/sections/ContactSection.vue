<script setup lang="ts">
import { contactHeadline, contactSub, email } from '~/data/content'

const { status, errorMessage, submit, reset } = useContactForm()

const name: Ref<string> = ref('')
const userEmail: Ref<string> = ref('')
const message: Ref<string> = ref('')

async function handleSubmit(): Promise<void> {
  await submit({
    name: name.value,
    email: userEmail.value,
    message: message.value,
  })
}

function handleReset(): void {
  name.value = ''
  userEmail.value = ''
  message.value = ''
  reset()
}
</script>

<template>
  <SectionWrapper
    id="contact"
    :title="contactHeadline"
    :subtitle="contactSub"
  >
    <!-- Success state -->
    <div
      v-if="status === 'sent'"
      class="mx-auto max-w-lg rounded-md border border-success/20 bg-success/10 p-8 text-center"
    >
      <Icon name="heroicons:check-circle" class="mx-auto mb-4 h-12 w-12 text-success" />
      <h3 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">
        Message Sent!
      </h3>
      <p class="mb-6 text-sm text-text-muted-light dark:text-text-muted">
        Thanks for reaching out. I'll get back to you within 24 hours.
      </p>
      <button
        class="text-sm font-medium text-primary hover:underline"
        @click="handleReset"
      >
        Send another message
      </button>
    </div>

    <!-- Form -->
    <form
      v-else
      class="mx-auto max-w-lg space-y-4"
      @submit.prevent="handleSubmit"
    >
      <div>
        <input
          v-model="name"
          type="text"
          placeholder="Your name"
          required
          minlength="1"
          maxlength="200"
          class="w-full rounded-sm border border-black/10 bg-black/5 px-5 py-4 text-gray-900 placeholder-text-muted-light outline-none transition-colors focus:border-primary/50 dark:border-white/10 dark:bg-accent-dark dark:text-white dark:placeholder-text-muted dark:focus:border-primary/50"
        />
      </div>
      <div>
        <input
          v-model="userEmail"
          type="email"
          placeholder="Your email"
          required
          maxlength="200"
          class="w-full rounded-sm border border-black/10 bg-black/5 px-5 py-4 text-gray-900 placeholder-text-muted-light outline-none transition-colors focus:border-primary/50 dark:border-white/10 dark:bg-accent-dark dark:text-white dark:placeholder-text-muted dark:focus:border-primary/50"
        />
      </div>
      <div>
        <textarea
          v-model="message"
          placeholder="Tell us about your project..."
          required
          minlength="1"
          maxlength="5000"
          rows="5"
          class="w-full resize-none rounded-sm border border-black/10 bg-black/5 px-5 py-4 text-gray-900 placeholder-text-muted-light outline-none transition-colors focus:border-primary/50 dark:border-white/10 dark:bg-accent-dark dark:text-white dark:placeholder-text-muted dark:focus:border-primary/50"
        />
      </div>

      <!-- Error message -->
      <p
        v-if="status === 'error'"
        class="text-sm text-error"
      >
        {{ errorMessage }}
      </p>

      <NeonButton
        :disabled="status === 'sending'"
        icon="heroicons:paper-airplane"
        class="w-full justify-center"
        @click="handleSubmit"
      >
        {{ status === 'sending' ? 'Sending...' : 'Send Message' }}
      </NeonButton>

      <p class="text-center text-xs text-text-muted-light dark:text-text-muted">
        Or email us directly at
        <a :href="`mailto:${email}`" class="text-primary hover:underline">
          {{ email }}
        </a>
      </p>
    </form>
  </SectionWrapper>
</template>
