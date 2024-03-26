<template>
  <div class="container">
    <div class="personal-data" v-if="Object.keys(personalData).length">
      <div v-for="(data, key) in personalData" :key="key" class="data-section">
        <h2>{{ key }}</h2>
        <div v-if="data.claim_type === 'recursive'" class="recursive-data">
          <PersonalData :data="data" />
        </div>
        <div v-else>
          <div v-for="(value, subKey) in data" :key="subKey" class="sub-data">
            <strong>{{ subKey }}</strong
            >: {{ value }}
          </div>
        </div>
      </div>
    </div>
    <div v-else>No personal data available.</div>
  </div>
</template>

<script setup lang="ts">
  import { ref, defineProps } from 'vue'

  interface Claim {
    claim_type: string
    [key: string]: any
  }

  const props = defineProps({
    data: {
      type: Object as () => Record<string, Claim>,
      required: true,
    },
  })

  const personalData = ref<Record<string, any>>({})

  const extractPersonalData = (data: Record<string, Claim>) => {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        if (claim.claim_type === 'recursive') {
          personalData.value[key] = extractPersonalData(claim)
        } else {
          personalData.value[key] = claim
        }
      }
    }
  }

  extractPersonalData(props.data)
</script>

<style scoped></style>
