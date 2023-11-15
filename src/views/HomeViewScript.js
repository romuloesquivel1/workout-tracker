import { ref } from 'vue';
import { supabase } from '../lib/supabaseClient';
import { WORKOUTS } from '../lib/constants';

// Create data / vars
const data = ref([]);
const loading = ref(true);

// Get data
const getData = async () => {
  try {
    const { data: workouts, error } = await supabase.from(WORKOUTS).select();
    if (error) throw error;
    loading.value = false;
    data.value = workouts;
  } catch (error) {
    // handle error
  }
};

export { data, loading, getData };