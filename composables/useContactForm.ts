import { collection, addDoc } from 'firebase/firestore'
import type { Firestore } from 'firebase/firestore'

type ContactStatus = 'idle' | 'sending' | 'sent' | 'error'

interface ContactPayload {
  readonly name: string
  readonly email: string
  readonly message: string
  readonly topic: string | null
}

interface UseContactFormReturn {
  readonly status: Ref<ContactStatus>
  readonly errorMessage: Ref<string>
  submit: (payload: ContactPayload) => Promise<void>
  reset: () => void
}

export function useContactForm(): UseContactFormReturn {
  const status: Ref<ContactStatus> = ref('idle')
  const errorMessage: Ref<string> = ref('')

  async function submit(payload: ContactPayload): Promise<void> {
    if (status.value === 'sending') return

    status.value = 'sending'
    errorMessage.value = ''

    try {
      const { $firestore } = useNuxtApp()
      const db: Firestore = $firestore as Firestore

      await addDoc(collection(db, 'contact_submissions'), {
        name: payload.name,
        email: payload.email,
        message: payload.message,
        topic: payload.topic,
        createdAt: new Date(),
      })

      status.value = 'sent'
    } catch (err: unknown) {
      // The UI shows a human fallback; keep the raw error for debugging.
      console.error(err)
      status.value = 'error'
      errorMessage.value = ''
    }
  }

  function reset(): void {
    status.value = 'idle'
    errorMessage.value = ''
  }

  return { status, errorMessage, submit, reset }
}
