<template>
  <div class="container">
    <div class="research-component">
      <div class="input-group mb-3">
        <input
          v-model="searchQuery"
          type="text"
          class="form-control"
          placeholder="Search..."
          aria-label="Search"
          aria-describedby="button-search"
        />
        <button
          id="button-search"
          class="btn btn-primary"
          type="button"
          @click="search"
        >
          Search
        </button>
      </div>
      <FieldInfoList :fieldInfoList="filteredGrammar" v-if="grammar" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, defineEmits } from 'vue'
  import axios from 'axios'
  import FieldInfoList from './FieldInfoList.vue'
  import { FieldInfo } from '../types/gammarTypes'
  import { transformToFieldInfo } from '../helpers/transformToFieldInfo'

  const searchQuery = ref<string>('')
  const grammar = ref<FieldInfo[]>()
  const filteredGrammar = ref<FieldInfo[]>()

  const search = () => {
    const query = searchQuery.value.toLowerCase().trim()
    if (query === '') {
      filteredGrammar.value = grammar.value
    } else {
      filteredGrammar.value = (grammar.value || []).filter((fieldInfo) =>
        fieldInfo.field.toLowerCase().includes(query)
      )
    }
  }

  const fetchGrammar = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/claims')
      const data = response.data
      grammar.value = transformToFieldInfo(data.data.scopes)
      filteredGrammar.value = grammar.value
    } catch (error) {
      console.error('Erreur:', error)
    }
  }

  onMounted(() => {
    fetchGrammar()
  })

  const emit = defineEmits(['search'])
</script>

<style scoped></style>
