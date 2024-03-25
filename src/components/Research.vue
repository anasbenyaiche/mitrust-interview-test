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
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, defineEmits } from 'vue'
  import axios from 'axios'
  import { GrammarResponse } from '../types/gammarTypes'

  const searchQuery = ref<string>('')
  const grammar = ref<GrammarResponse | null>()

  const search = () => {
    emit('search', searchQuery.value)
  }

  const fetchGrammar = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/claims')
      const data = response.data
      grammar.value = data
    } catch (error) {
      console.error('Erreur:', error)
    }
  }

  onMounted(() => {
    fetchGrammar()
  })
  console.log(grammar.value)

  const emit = defineEmits(['search'])
</script>

<style scoped></style>
