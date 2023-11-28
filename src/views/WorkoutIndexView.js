import { ref } from 'vue';
import { supabase } from '../lib/supabaseClient';
import { WORKOUTS_TABLE_NAME } from '../lib/constants';

// Create data / vars
const data = ref([]);
const loading = ref(true);

// Get data
const getData = async (sortBy, sortDirection) => {
  data.value = [];
  loading.value = true;

  try {
    const { data: workouts, error } = await supabase.from(WORKOUTS_TABLE_NAME).select().order(sortBy,
      { ascending: (sortDirection || '').toLowerCase() === 'asc' });
    if (error) throw error;
    loading.value = false;
    data.value = workouts;
  } catch (error) {
    // handle error
  }

  loading.value = false;
};

export { data, loading, getData };
