<script setup lang="ts">
import {
  contactLinks,
  contactSub,
  contactTitle,
  email,
  formLabels,
} from '~/data/content'

interface Props {
  topic?: string | null
}

const props = withDefaults(defineProps<Props>(), {
  topic: null,
})

const { status, errorMessage, submit, reset } = useContactForm()

const name: Ref<string> = ref('')
const userEmail: Ref<string> = ref('')
const message: Ref<string> = ref('')

async function handleSubmit(): Promise<void> {
  await submit({
    name: name.value,
    email: userEmail.value,
    message: message.value,
    topic: props.topic,
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
  <SectionBlock id="contact" :title="contactTitle">
    <div class="grid gap-14 md:grid-cols-[1fr_1.1fr]">
      <div class="max-w-prose">
        <p class="leading-relaxed text-soft">{{ contactSub }}</p>
        <a
          :href="`mailto:${email}`"
          class="link mt-8 inline-block text-xl font-semibold md:text-2xl"
        >
          {{ email }}
        </a>
        <ul class="mt-8 flex gap-6 text-sm">
          <li v-for="item in contactLinks" :key="item.href">
            <a :href="item.href" class="link" target="_blank" rel="noopener">
              {{ item.label }} ↗
            </a>
          </li>
        </ul>
      </div>

      <div v-if="status === 'sent'" class="border-l-2 border-success pl-6">
        <p class="text-xl font-semibold">{{ formLabels.sentTitle }}</p>
        <p class="mt-2 text-soft">{{ formLabels.sentBody }}</p>
        <button type="button" class="link mt-6 text-sm" @click="handleReset">
          {{ formLabels.sendAnother }}
        </button>
      </div>

      <form v-else class="space-y-5" @submit.prevent="handleSubmit">
        <div>
          <label for="contact-name" class="label mb-2 block">
            {{ formLabels.name }}
          </label>
          <input
            id="contact-name"
            v-model="name"
            type="text"
            autocomplete="name"
            required
            maxlength="200"
            class="field"
          />
        </div>
        <div>
          <label for="contact-email" class="label mb-2 block">
            {{ formLabels.email }}
          </label>
          <input
            id="contact-email"
            v-model="userEmail"
            type="email"
            autocomplete="email"
            required
            maxlength="200"
            class="field"
          />
        </div>
        <div>
          <label for="contact-message" class="label mb-2 block">
            {{ formLabels.message }}
          </label>
          <textarea
            id="contact-message"
            v-model="message"
            :placeholder="formLabels.messagePlaceholder"
            required
            maxlength="5000"
            rows="5"
            class="field resize-y"
          />
        </div>

        <p v-if="status === 'error'" class="text-sm text-error" role="alert">
          {{ errorMessage || formLabels.errorFallback }}
        </p>

        <button
          type="submit"
          class="button-primary disabled:opacity-60"
          :disabled="status === 'sending'"
        >
          {{ status === 'sending' ? formLabels.sending : formLabels.submit }}
        </button>
        <p class="text-xs text-soft">
          {{ formLabels.privacyNote }}
          <NuxtLink to="/privacy" class="link">{{ formLabels.privacyLinkLabel }}</NuxtLink>.
        </p>
      </form>
    </div>
  </SectionBlock>
</template>
