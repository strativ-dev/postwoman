<template>
  <div
    class="flex w-screen h-screen"
    style="flex-direction: row; justify-content: center; align-items: center"
  >
    <!-- <header
      class="flex items-center justify-between flex-1 px-2 py-2 space-x-2"
    >
      <div class="inline-flex items-center space-x-2">
        <ButtonPrimary
          v-if="currentUser === null"
          :label="t('header.login')"
          @click.native="showLogin = true"
        />
      </div>
    </header> -->
    <!-- <AppAnnouncement v-if="!network.isOnline" /> -->
    <FirebaseLogin :show="showLogin" @hide-modal="showLogin = true" />
    <!-- <AppSupport :show="showSupport" @hide-modal="showSupport = false" /> -->
    <!-- <TeamsModal :show="showTeamsModal" @hide-modal="showTeamsModal = false" /> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "@nuxtjs/composition-api"
// import { useNetwork } from "@vueuse/core"
import intializePwa from "~/helpers/pwa"
// import { probableUser$ } from "~/helpers/fb/auth"
import { getLocalConfig, setLocalConfig } from "~/newstore/localpersistence"
import {
  // useReadonlyStream,
  useI18n,
  useToast,
} from "~/helpers/utils/composables"
import { defineActionHandler } from "~/helpers/actions"

const t = useI18n()

const toast = useToast()

/**
 * Once the PWA code is initialized, this holds a method
 * that can be called to show the user the installation
 * prompt.
 */
const showInstallPrompt = ref(() => Promise.resolve()) // Async no-op till it is initialized

const showSupport = ref(false)
const showLogin = ref(false)
// const showTeamsModal = ref(false)

// const network = reactive(useNetwork())

// const currentUser = useReadonlyStream(probableUser$, null)

defineActionHandler("modals.support.toggle", () => {
  showSupport.value = !showSupport.value
})

onMounted(() => {
  // Initializes the PWA code - checks if the app is installed,
  // etc.
  showInstallPrompt.value = intializePwa()

  const cookiesAllowed = getLocalConfig("cookiesAllowed") === "yes"
  if (!cookiesAllowed) {
    toast.show(`${t("app.we_use_cookies")}`, {
      duration: 0,
      action: [
        {
          text: `${t("action.learn_more")}`,
          onClick: (_, toastObject) => {
            setLocalConfig("cookiesAllowed", "yes")
            toastObject.goAway(0)
            window.open("https://docs.hoppscotch.io/privacy", "_blank")?.focus()
          },
        },
        {
          text: `${t("action.dismiss")}`,
          onClick: (_, toastObject) => {
            setLocalConfig("cookiesAllowed", "yes")
            toastObject.goAway(0)
          },
        },
      ],
    })
  }
})

// Template refs
</script>
