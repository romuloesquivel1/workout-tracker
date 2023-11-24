import { ref } from 'vue';
import { supabase } from '../lib/supabaseClient';
import { WORKOUTS_TABLE_NAME } from '../lib/constants';

// Create data / vars
const data = ref([]);
const loading = ref(true);

// Get data
const getData = async () => {
  data.value = [];

  try {
    const { data: workouts, error } = await supabase.from(WORKOUTS_TABLE_NAME).select();
    if (error) throw error;
    loading.value = false;
    data.value = workouts;
  } catch (error) {
    // handle error
  }
};

export { data, loading, getData };
