<template>

  <transition name="fade">
    <div v-if="modelValue == true" class="confirm-delete-modal">
      <div
        v-show="modelValue"
        class="
          absolute
          inset-0
          flex
          items-center
          justify-center
          bg-gray-700 bg-opacity-50">
        <div class="max-w-2xl min-w-sm p-6 mx-4 bg-white rounded shadow">
          <div class="flex items-center justify-between">
            <h3 class="text-2xl">{{ modalTitle }}</h3>
            <svg
              @click="processing ? null : closeModal"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 text-red-900 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div class="mt-4">
            <p class="mb-4 text-sm">
            {{ confirmMessage }}
            </p>
          </div>
          {{ processing }}
          <div class="mt-4 justify-between flex">
            <button :disabled="processing"
              @click="processing ? null : closeModal"
              class="px-6 py-2 text-blue-800 border border-blue-600 rounded"
            >
              Cancel
            </button>
            <button class="px-6 py-2 ml-2 text-red-100 bg-red-600 rounded"
              @click="onConfirm" :disabled="processing">
              {{ confirmButtonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<script setup>

const props = defineProps({
  modelValue: Boolean,
  modalTitle: {
    type: String,
    default: 'Confirm Delete',
  },
  confirmButtonText: {
    type: String,
    default: 'Delete',
  },
  confirmMessage: {
    type: String,
    default: 'Are you sure you want to delete this?'
  },
  processing: {
    type: Boolean,
    default: false,
  },
  onConfirm: {
    type: Function,
    default: () => null,
  },
});

const emit = defineEmits(['update:modelValue']);

const closeModal = () => {
  emit('update:modelValue', false);
};

// emit confirm event
const onConfirm = props.onConfirm || closeModal;

</script>
