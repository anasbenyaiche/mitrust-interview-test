<template>
  <div class="container mt-4">
    <div v-for="(fieldInfo, index) in fieldInfoList" :key="index" class="mb-4">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ fieldInfo.field }}</h5>
          <p class="card-text" v-if="fieldInfo.desc_2">
            <strong>Description:</strong> {{ fieldInfo.desc_2 }}
          </p>
          <p class="card-text" v-if="fieldInfo.examples">
            <strong>Examples:</strong> {{ fieldInfo.examples }}
          </p>
          <div v-if="fieldInfo.children && fieldInfo.children.length">
            <h6 class="card-subtitle mb-2 text-muted">Children:</h6>
            <ul class="list-group list-group-flush">
              <li
                class="list-group-item"
                v-for="(child, childIndex) in fieldInfo.children"
                :key="childIndex"
              >
                <div class="nested-card">
                  <h6 class="card-title">{{ child.field }}</h6>
                  <p class="card-text" v-if="child.desc_2">
                    <strong>Description:</strong> {{ child.desc_2 }}
                  </p>
                  <p class="card-text" v-if="child.examples">
                    <strong>Examples:</strong> {{ child.examples }}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue'

  interface FieldInfo {
    field: string
    desc_2?: string
    examples?: string
    children?: FieldInfo[]
  }

  const props = defineProps({
    fieldInfoList: {
      type: Array as () => FieldInfo[],
      required: true,
    },
  })
</script>

<style scoped>
  .card {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  .card-title {
    margin-bottom: 10px;
  }

  .card-text {
    margin-bottom: 5px;
  }

  .nested-card {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin-top: 10px;
  }

  .nested-card .card-title {
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .nested-card .card-text {
    font-size: 0.9rem;
  }
</style>
